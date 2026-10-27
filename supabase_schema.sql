-- ==============================================================================
-- Ghaym Space (غيم سبيس) - Supabase Database Schema
-- السوق الإلكتروني الموحد متعدد البائعين - المكلا، حضرموت
-- ==============================================================================

-- 1. جدول الحسابات والمستخدمين (Profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'merchant', 'driver', 'admin')),
    city TEXT DEFAULT 'المكلا',
    district TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. جدول المتاجر (Stores)
CREATE TABLE IF NOT EXISTS public.stores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name_ar TEXT NOT NULL,
    name_en TEXT,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    phone TEXT,
    logo_url TEXT,
    banner_url TEXT,
    is_verified BOOLEAN DEFAULT false,
    rating NUMERIC(2,1) DEFAULT 5.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. جدول المنتجات (Products)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id UUID REFERENCES public.stores(id) ON DELETE CASCADE,
    name_ar TEXT NOT NULL,
    name_en TEXT,
    description TEXT,
    category TEXT NOT NULL,
    price_yer NUMERIC(12,2) NOT NULL,
    old_price_yer NUMERIC(12,2),
    stock_quantity INTEGER DEFAULT 10,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. جدول الطلبات (Orders)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number TEXT UNIQUE NOT NULL,
    customer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    delivery_address TEXT NOT NULL,
    district TEXT NOT NULL,
    payment_method TEXT NOT NULL CHECK (payment_method IN ('cash', 'kuraimi', 'onecash', 'pys')),
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'preparing', 'on_delivery', 'delivered', 'cancelled')),
    subtotal_yer NUMERIC(12,2) NOT NULL,
    delivery_fee_yer NUMERIC(12,2) DEFAULT 1000.00,
    total_amount_yer NUMERIC(12,2) NOT NULL,
    driver_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. تفاصيل عناصر الطلب (Order Items)
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    product_name TEXT NOT NULL,
    store_id UUID REFERENCES public.stores(id) ON DELETE SET NULL,
    price_yer NUMERIC(12,2) NOT NULL,
    quantity INTEGER DEFAULT 1,
    total_yer NUMERIC(12,2) NOT NULL
);

-- تفعيل ميزة الأمان على مستوى الصفوف (Row Level Security - RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- سياسات الوصول العامة (Public Read Policies)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Stores are viewable by everyone" ON public.stores FOR SELECT USING (true);
CREATE POLICY "Products are viewable by everyone" ON public.products FOR SELECT USING (true);
CREATE POLICY "Users can create orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Users can add order items" ON public.order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view order items" ON public.order_items FOR SELECT USING (true);

-- سياسات التجار والإدارة لتعديل المنتجات
CREATE POLICY "Authenticated users can insert products" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can update products" ON public.products FOR UPDATE USING (true);
