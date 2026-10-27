/**
 * Ghaym Space - Supabase Client & Unified Backend Sync Layer
 * Manages Cloud Database Connection, Auth, Products, and Orders
 */

(function() {
  const SUPABASE_URL = 'https://xcswqxwywmwunmunsamb.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_Yfg6lMN2fATSQF6g2InsCg_PZ0UNIGY';

  let supabaseClient = null;

  // Initialize Supabase Client when library is loaded
  function initClient() {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('☁️ [Ghaym Space] Supabase Cloud connected successfully!');
    }
  }

  // Load official Supabase CDN if not already included
  if (!window.supabase) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = initClient;
    document.head.appendChild(script);
  } else {
    initClient();
  }

  const GhaymDB = {
    getClient: () => supabaseClient,
    url: SUPABASE_URL,
    
    // Auth Operations
    signUp: async (email, password, metadata = {}) => {
      if (!supabaseClient) return { error: { message: 'Supabase client not initialized' } };
      return await supabaseClient.auth.signUp({
        email,
        password,
        options: { data: metadata }
      });
    },

    signIn: async (email, password) => {
      if (!supabaseClient) return { error: { message: 'Supabase client not initialized' } };
      return await supabaseClient.auth.signInWithPassword({ email, password });
    },

    signInWithGoogle: async () => {
      if (!supabaseClient) return { error: { message: 'Supabase client not initialized' } };
      return await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
    },

    signOut: async () => {
      if (!supabaseClient) return;
      await supabaseClient.auth.signOut();
      if (window.GhaymAuth) window.GhaymAuth.logout();
    },

    // Fetch Products from Cloud
    getProducts: async () => {
      if (!supabaseClient) return null;
      try {
        const { data, error } = await supabaseClient
          .from('products')
          .select('*, stores(name_ar, location, is_verified)');
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn('Fallback to local products:', err.message);
        return null;
      }
    },

    // Create New Order in Supabase
    createOrder: async (orderData, items) => {
      if (!supabaseClient) return null;
      try {
        const { data: order, error: orderError } = await supabaseClient
          .from('orders')
          .insert([orderData])
          .select()
          .single();

        if (orderError) throw orderError;

        if (items && items.length > 0) {
          const itemsToInsert = items.map(item => ({
            order_id: order.id,
            product_id: item.productId || null,
            product_name: item.name,
            store_id: item.storeId || null,
            price_yer: item.price,
            quantity: item.qty || 1,
            total_yer: (item.price || 0) * (item.qty || 1)
          }));

          const { error: itemsError } = await supabaseClient
            .from('order_items')
            .insert(itemsToInsert);

          if (itemsError) console.error('Error inserting order items:', itemsError);
        }

        return order;
      } catch (err) {
        console.error('Order creation in Supabase failed:', err.message);
        return null;
      }
    },

    // Fetch Orders from Cloud
    getOrders: async () => {
      if (!supabaseClient) return null;
      try {
        const { data, error } = await supabaseClient
          .from('orders')
          .select('*, order_items(*)')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn('Fallback to local orders:', err.message);
        return null;
      }
    },

    // Update Order Status (For Driver & Admin)
    updateOrderStatus: async (orderId, newStatus) => {
      if (!supabaseClient) return null;
      try {
        const { data, error } = await supabaseClient
          .from('orders')
          .update({ status: newStatus })
          .or(`id.eq.${orderId},order_number.eq.${orderId}`)
          .select();
        if (error) throw error;
        return data;
      } catch (err) {
        console.error('Failed to update order status:', err.message);
        return null;
      }
    },

    // Subscribe to Live Orders (Courier & Admin Real-time)
    subscribeToOrders: (callback) => {
      if (!supabaseClient) return null;
      return supabaseClient
        .channel('public:orders')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'orders' }, payload => {
          if (callback) callback(payload.new);
        })
        .subscribe();
    },

    // Fetch Stores
    getStores: async () => {
      if (!supabaseClient) return null;
      try {
        const { data, error } = await supabaseClient.from('stores').select('*');
        if (error) throw error;
        return data;
      } catch (err) {
        console.warn('Fallback to local stores:', err.message);
        return null;
      }
    }
  };

  window.GhaymDB = GhaymDB;
})();
