// Client Interactive Storage & Mock-clean Store
window.GhaymApp = (function() {
  const storageKey = 'ghaym_cart';
  const ordersKey = 'ghaym_orders';

  // Seed with default realistic store products if completely empty
  const defaultItems = [
    {
      id: 101,
      title: 'عطر نفحات حضرموت الفاخر (100 مل)',
      price: 14000,
      store: 'متجر نفحات حضرموت (الشرج)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIwLN8WdnGYaRDWC03HqbTnbGIqxd08eyVNBUX8gv9DrVjEQ-2YGD9wtfZPAWshGbJIz9JHnyUhS8d8r5HpbHm58-nGwG7ajZ5VFR-ynX7HR5szuHtPs06DpsGktRCJkYH58oCAKtrQ9byC7BZSHHie4z6Pt_R8px2lCl9ZIJyfGdZYekY4jXmy4ZiU8XQeRfbPqwJb-juCtvLs2oQwVGSOt-pr9Gk7bCExi3bsiomupJqOSDaTR8H',
      qty: 1
    },
    {
      id: 102,
      title: 'معمول حضرمي فاخر بالعسل الدوعني (1 كجم)',
      price: 9000,
      store: 'أطايب المكلا للأسر المنتجة (الديس)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE8XCx2W12RrmA8jckJgW6TUYytv5PwORRT-fS9yhYb1EkkmOycZI5Yk9kAPudGp-a1iZbi0rAE_nYiHrncmjV3kY72HFoHoj8GiQTf8PkGfdGvteNe1syQVFf_nYZpvXwD4CoRpAlfXVaS4mZv1abCQbNcue4n-1FpWNGXY2PVPXwsi2-LebVtsSJgksw-bkytsz-yHwIXzY7IP4F4RtFsPpbmdhcuhDH5z8ej-VgcnynLFPHlpPe',
      qty: 2
    },
    {
      id: 103,
      title: 'مرشوش غيم سبيس الملكي للمفارش 500 مل',
      price: 6000,
      store: 'غيم بوتيك كولكشن',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfpo1_7QU-DdYZZnsa6R2xY_leQQo4RMwXxFbofRz8deAxUIA74EPmDXsMfU3POsSAbY4NTf3e8h4UotwGr3As7PrbhBz5zi4ii6NGIFAHjjo7ZTbn7Zf9Rggoz75kTAc8G5jO1LDOhn1EYFUTAX30BMQsVYyvcrTo1ECUEC0TNzWJP6M4LweHh69rwxRnHVBqEp8WiqYJtuSzTTBEKLVre_wuk08pwgLeXI0MIuQ',
      qty: 1
    }
  ];

  let storedCart = localStorage.getItem(storageKey);
  let cart = storedCart ? JSON.parse(storedCart) : defaultItems;
  if (!storedCart) {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }

  let wishlist = JSON.parse(localStorage.getItem('ghaym_wishlist') || '[]');
  let orders = JSON.parse(localStorage.getItem(ordersKey) || '[]');

  function saveCart() {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('ghaym_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
  }

  function saveOrders() {
    localStorage.setItem(ordersKey, JSON.stringify(orders));
  }

  function addToCart(item) {
    const existing = cart.find(i => (i.title === item.title) || (i.id === item.id));
    if (existing) {
      existing.qty += (item.qty || 1);
    } else {
      cart.push({
        id: item.id || Date.now(),
        title: item.title,
        price: item.price,
        store: item.store || 'متجر معتمد',
        image: item.image || '',
        qty: item.qty || 1
      });
    }
    saveCart();
    if (typeof showNotification === 'function') {
      showNotification(`تمت إضافة "${item.title}" إلى السلة بنجاح!`);
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    if (typeof showNotification === 'function') {
      showNotification(`تم حذف المنتج من السلة بنجاح`);
    }
  }

  function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        removeFromCart(id);
      } else {
        saveCart();
      }
    }
  }

  function clearCart() {
    cart = [];
    saveCart();
  }

  function getCart() { return cart; }
  function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }
  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  // --- Real-time Order Placement to Courier Dispatch ---
  function placeCustomerOrder(customerDetails = {}) {
    const orderId = 'GS-' + Math.floor(10000 + Math.random() * 90000);
    const orderItems = cart.length > 0 ? [...cart] : defaultItems;
    const itemsTotal = orderItems.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const deliveryFee = 1500;
    const totalAmount = itemsTotal + deliveryFee;

    const selectedPay = document.querySelector('input[name="payment_method"]:checked')?.value || 'bank';
    const payText = selectedPay === 'cod' ? 'الدفع نقداً عند الاستلام' : 'تحويل بنكي (الكريمي / ون كاش)';

    const newOrder = {
      orderId: orderId,
      time: new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString('ar-YE'),
      customerName: customerDetails.name || 'م. أحمد مبارك باوزير',
      customerPhone: customerDetails.phone || '+967 773 058 707',
      customerAddress: customerDetails.address || 'المكلا - حي الشرج، قرب الجسر الصيني، عمارة الأمل، شقة 4',
      district: customerDetails.district || 'الشرج',
      storeName: orderItems[0]?.store || 'متجر معتمد',
      items: orderItems,
      total: totalAmount,
      paymentMethod: payText,
      status: 'pending_pickup',
      statusText: 'طلب جديد قيد الاستلام من المتجر'
    };

    orders.unshift(newOrder);
    saveOrders();
    clearCart();

    // Broadcast event across browser tabs
    localStorage.setItem('ghaym_last_dispatched_order', JSON.stringify({
      orderId: newOrder.orderId,
      time: Date.now()
    }));

    return newOrder;
  }

  function getOrders() {
    return JSON.parse(localStorage.getItem(ordersKey) || '[]');
  }

  function toggleWishlist(item) {
    const idx = wishlist.findIndex(i => i.id === item.id);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      if (typeof showNotification === 'function') showNotification(`تمت الإزالة من المفضلة`);
    } else {
      wishlist.push(item);
      if (typeof showNotification === 'function') showNotification(`تمت الإضافة إلى المفضلة`);
    }
    saveWishlist();
  }

  function updateCartUI() {
    const count = getCartCount();
    const total = getCartTotal();

    // 1. Update header badges
    document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = count);
    const curr = (window.GhaymI18n ? window.GhaymI18n.t('currency') : 'ر.ي');
    document.querySelectorAll('[data-cart-total]').forEach(el => el.textContent = total.toLocaleString());
    document.querySelectorAll('[data-cart-subtotal]').forEach(el => el.textContent = total.toLocaleString() + ' ' + curr);

    // 2. Render cart items list in #cartItemsContainer
    const cartContainer = document.getElementById('cartItemsContainer');
    if (cartContainer) {
      if (cart.length === 0) {
        cartContainer.innerHTML = `
          <div class="p-10 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-3xl mx-auto mb-4">
              <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <h3 class="text-base font-bold text-slate-800 mb-1">سلة المشتريات فارغة حالياً</h3>
            <p class="text-xs text-slate-400 mb-5">تصفح أقسام السوق وأضف منتجاتك المفضلة لتظهر هنا</p>
            <button onclick="navigateTo('home')" class="px-6 py-2.5 bg-brand-sky text-white rounded-xl text-xs font-bold shadow hover:bg-sky-500 transition">تصفح المنتجات في السوق</button>
          </div>
        `;
      } else {
        cartContainer.innerHTML = cart.map(item => `
          <article class="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-5 relative transition hover:border-brand-sky/40">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-50 flex-shrink-0 overflow-hidden border border-slate-100 flex items-center justify-center relative">
              ${item.image ? `<img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover"/>` : `<i class="fa-solid fa-box text-3xl text-slate-300"></i>`}
            </div>
            
            <div class="flex-grow text-center sm:text-right space-y-1.5 w-full">
              <div class="flex items-center justify-center sm:justify-start gap-2">
                <span class="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <i class="fa-solid fa-store text-brand-sky text-[10px]"></i>
                  <span>${item.store}</span>
                </span>
              </div>
              <h2 class="text-base font-bold text-brand-navy">${item.title}</h2>
              <div class="text-sm font-bold text-brand-sky">
                ${item.price.toLocaleString()} <span class="text-xs font-normal text-slate-400">${curr} للقطعة</span>
              </div>
            </div>

            <div class="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-slate-100">
              <div class="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                <button onclick="window.GhaymApp.updateQty(${item.id}, 1)" class="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-sky-50 hover:text-brand-sky shadow-xs transition font-bold text-sm" title="زيادة الكمية">+</button>
                <span class="w-8 text-center text-sm font-bold text-brand-navy">${item.qty}</span>
                <button onclick="window.GhaymApp.updateQty(${item.id}, -1)" class="w-8 h-8 rounded-lg bg-white text-slate-700 hover:bg-slate-100 transition font-bold text-sm" title="إنقاص الكمية">-</button>
              </div>

              <div class="text-left min-w-[95px]">
                <span class="text-[11px] text-slate-400 block">المجموع:</span>
                <span class="text-base font-bold text-brand-navy">${(item.price * item.qty).toLocaleString()}</span>
                <span class="text-xs font-semibold text-slate-400"> ${curr}</span>
              </div>

              <button onclick="window.GhaymApp.removeFromCart(${item.id})" class="text-slate-400 hover:text-rose-500 p-2.5 rounded-xl hover:bg-rose-50 transition" title="حذف المنتج من السلة">
                <i class="fa-regular fa-trash-can text-base"></i>
              </button>
            </div>
          </article>
        `).join('');
      }
    }

    // 3. Update Checkout Page dynamic summary if in checkout view
    const checkoutItemsBox = document.getElementById('checkoutDynamicItems');
    if (checkoutItemsBox) {
      if (cart.length === 0) {
        checkoutItemsBox.innerHTML = `<p class="text-xs text-slate-400">لا توجد منتجات محددة</p>`;
      } else {
        checkoutItemsBox.innerHTML = cart.map(i => `
          <div class="flex justify-between items-center text-on-surface-variant text-xs">
            <span>${i.title} (×${i.qty})</span>
            <span class="font-bold text-on-surface">${(i.price * i.qty).toLocaleString()} ${curr}</span>
          </div>
        `).join('');
      }
    }

    const deliveryCost = count > 0 ? 1500 : 0;
    const finalGrandTotal = total + deliveryCost;
    document.querySelectorAll('[data-checkout-subtotal]').forEach(el => el.textContent = total.toLocaleString() + ' ' + curr);
    document.querySelectorAll('[data-checkout-delivery]').forEach(el => el.textContent = deliveryCost.toLocaleString() + ' ' + curr);
    document.querySelectorAll('[data-checkout-grandtotal]').forEach(el => el.textContent = finalGrandTotal.toLocaleString());

    // If English is active, re-translate newly rendered cart and checkout DOM nodes
    if (window.GhaymI18n && window.GhaymI18n.getLang() === 'en') {
      if (cartContainer) window.GhaymI18n.applyLanguage('en');
    }
  }

  function updateWishlistUI() {
    const count = wishlist.length;
    document.querySelectorAll('[data-wishlist-count]').forEach(el => el.textContent = count);
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateWishlistUI();
  });

  return {
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    getCart,
    getCartTotal,
    getCartCount,
    placeCustomerOrder,
    getOrders,
    toggleWishlist,
    updateCartUI
  };
})();
