/**
 * Ghaym Space - Unified Intelligent i18n & Entity Isolation Core
 * Translates ALL visible text, buttons, placeholders, titles, and manages RTL/LTR
 */
(function() {
  // Comprehensive Arabic-to-English translation mapping
  const DICT = {
  "استعراض": "Explore",
  "أضف للسلة": "Add to Cart",
  "إضافة للسلة": "Add to Cart",
  "أضف إلى السلة": "Add to Cart",
  "متوفر بالمخزون": "In Stock",
  "غير متوفر": "Out of Stock",
  "الأكثر طلباً": "Most Popular",
  "الأعلى مبيعاً": "Best Seller",
  "جديد": "New",
  "خصم": "Discount",
  "عروض اليوم": "Today's Offers",
  "عروض حصرية": "Exclusive Deals",
  "منتجات مميزة": "Featured Products",
  "متاجر مميزة": "Featured Stores",
  "كل المتاجر": "All Stores",
  "كل المنتجات": "All Products",
  "تحميل المزيد": "Load More",
  "عرض الكل": "View All",
  "عرض التفاصيل": "View Details",
  "زيارة المتجر": "Visit Store",
  "متابعة الشراء": "Continue Shopping",
  "إتمام الطلب": "Complete Order",
  "تأكيد الطلب": "Confirm Order",
  "إلغاء الطلب": "Cancel Order",
  "تتبع الطلب": "Track Order",
  "تحميل الفاتورة": "Download Invoice",
  "طباعة الفاتورة": "Print Invoice",
  "مشاركة": "Share",
  "نسخ الرابط": "Copy Link",
  "نسخ الرقم": "Copy Number",
  "تم النسخ بنجاح": "Copied successfully",
  "تطبيق الكوبون": "Apply Coupon",
  "كود الخصم": "Discount Code",
  "أدخل رمز الكوبون": "Enter coupon code",
  "المكلا": "Mukalla",
  "المكلا القديمة": "Old Mukalla",
  "المكلا - الشرج": "Mukalla - Al-Sharj",
  "المكلا - حي الشرج": "Mukalla - Al-Sharj District",
  "حي الشرج": "Al-Sharj District",
  "الديس": "Al-Dis",
  "حي الديس": "Al-Dis District",
  "فوة": "Fuwah",
  "فوه": "Fuwah",
  "فوه القديمة": "Old Fuwah",
  "حضرموت": "Hadramout",
  "اليمن": "Yemen",
  "عطور وبخور": "Perfumes & Incense",
  "بخور وعود ملكي": "Royal Oud & Incense",
  "بخور حضرمي فاخر": "Luxury Hadrami Incense",
  "بخور حضرمي ملكي فاخر (دقة العود)": "Luxury Hadrami Royal Incense (Diqqat Al-Oud)",
  "دهن العود والمسك": "Oud Oil & Musk",
  "مرشوش ومخامير": "Body Mists & Mukhamariyah",
  "عطور شرقية وغربية": "Oriental & Western Perfumes",
  "أسر منتجة وحلويات": "Productive Families & Sweets",
  "أسر منتجة": "Productive Families",
  "أطايب المكلا": "Mukalla Delicacies",
  "حلويات طازجة": "Fresh Sweets",
  "حلويات ومعجنات": "Pastries & Sweets",
  "مخبوزات ومعمول": "Bakery & Maamoul",
  "هدايا وتوزيعات": "Gifts & Favors",
  "هدايا وزهور": "Gifts & Flowers",
  "باقات هدايا ومباخر": "Gift Sets & Burners",
  "حرف وفضيات": "Crafts & Silverware",
  "حرف وفضيات حضرمية": "Hadrami Silver & Crafts",
  "مسبحة فضة حضرمية منقوشة يدوياً": "Handcrafted Hadrami Engraved Silver Rosary",
  "خنجر حضرمي تراثي": "Heritage Hadrami Dagger",
  "فضيات تراثية": "Heritage Silverware",
  "ملابس وأزياء": "Fashion & Clothing",
  "أزياء وعبايات": "Abayas & Fashion",
  "إلكترونيات": "Electronics",
  "أجهزة وإكسسوارات": "Electronics & Accessories",
  "عطر نفحات حضرموت الفاخر": "Nafahat Hadramout Luxury Perfume",
  "متجر نفحات حضرموت": "Nafahat Hadramout Store",
  "متجر عطور دوعن - الديس": "Do'an Perfumes Store - Al-Dis",
  "متجر عطور دوعن": "Do'an Perfumes Store",
  "سويت هوم للمخبوزات - المكلا القديمة": "Sweet Home Bakery - Old Mukalla",
  "سويت هوم للمخبوزات": "Sweet Home Bakery",
  "فضيات الأحقاف التراثية - الشرج": "Al-Ahqaf Heritage Silver - Al-Sharj",
  "فضيات الأحقاف التراثية": "Al-Ahqaf Heritage Silver",
  "زهور وفرح للهدايا والتغليف": "Flowers & Joy Gifts & Packaging",
  "زهور وفرح": "Flowers & Joy",
  "الدان الحضرمي للعود": "Al-Dan Hadrami Oud",
  "توصيل فوري": "Instant Delivery",
  "توصيل فوري خلال ساعتين": "Instant 2-hour delivery",
  "توصيل سريع": "Express Delivery",
  "توصيل مجاني": "Free Delivery",
  "ضمان الجودة": "Quality Guarantee",
  "منتج أصلي 100%": "100% Original Product",
  "منتج أصلي": "Original Product",
  "دعم فني 24/7": "24/7 Customer Support",
  "دفع آمن ومحلي": "Secure Local Payment",
  "متاجر موثقة ومعتمدة": "Verified & Accredited Stores",
  "موثق": "Verified",
  "حرفة يدوية": "Handmade Craft",
  "أسرة منتجة": "Productive Family",
  "مفتوح الآن": "Open Now",
  "مغلق": "Closed",
  "عميل موثق": "Verified Customer",
  "تقييم ممتاز": "Excellent Rating",
  "نجمة": "Star",
  "نجوم": "Stars",
  "نتائج البحث والتصفية": "Search & Filter Results",
  "ترتيب حسب": "Sort By",
  "الأحدث": "Newest",
  "الأعلى تقييماً": "Highest Rated",
  "السعر: من الأقل للأعلى": "Price: Low to High",
  "السعر: من الأعلى للأقل": "Price: High to Low",
  "تصفية النتائج": "Filter Results",
  "نطاق السعر": "Price Range",
  "الحالة": "Status",
  "الموقع": "Location",
  "مسح التصفية": "Clear Filter",
  "إعادة ضبط": "Reset",
  "عرض النتائج": "Show Results",
  "سلة المشتريات": "Shopping Cart",
  "سلة التسوق": "Shopping Cart",
  "عناصر في السلة": "Items in cart",
  "المجموع الفرعي": "Subtotal",
  "تكلفة التوصيل": "Delivery Fee",
  "المجموع الإجمالي": "Grand Total",
  "إجمالي قيمة الطلب": "Order Total",
  "شامل الضريبة إن وجدت": "Tax inclusive if applicable",
  "طريقة الدفع:": "Payment Method:",
  "طريقة الدفع": "Payment Method",
  "الدفع عند الاستلام": "Cash on Delivery",
  "الدفع نقداً عند الاستلام": "Cash on Delivery",
  "تحويل بنكي / محفظة إلكترونية": "Bank Transfer / Mobile Wallet",
  "تحويل بنكي (الكريمي / ون كاش)": "Bank Transfer (Kuraimi / OneCash)",
  "كريمي جوال": "Kuraimi Jawwal",
  "ون كاش": "OneCash",
  "محفظة بيس": "PYS Wallet",
  "محفظة جيب": "Jeeb Wallet",
  "عنوان التوصيل": "Delivery Address",
  "إضافة عنوان جديد": "Add New Address",
  "العنوان الافتراضي": "Default Address",
  "اختر منطقة التوصيل": "Select delivery area",
  "ملاحظات إضافية للمندوب": "Additional notes for driver",
  "تأكيد الطلب والدفع": "Confirm Order & Pay",
  "تم استلام طلبك بنجاح!": "Your order has been received successfully!",
  "رقم الطلب:": "Order Number:",
  "تتبع الطلب الآن": "Track Order Now",
  "تفاصيل الطلب وتتبع حالته": "Order Details & Status Tracking",
  "قيد المراجعة": "Under Review",
  "قيد التجهيز بالمتجر": "Preparing in Store",
  "جاهز للاستلام": "Ready for Pickup",
  "مع مندوب التوصيل": "With Delivery Courier",
  "تم التوصيل بنجاح": "Successfully Delivered",
  "ملغي": "Cancelled",
  "تسجيل الدخول": "Sign In",
  "إنشاء حساب جديد": "Create New Account",
  "الاسم الكامل": "Full Name",
  "رقم الهاتف": "Phone Number",
  "رقم الجوال": "Mobile Number",
  "البريد الإلكتروني": "Email Address",
  "كلمة المرور": "Password",
  "تأكيد كلمة المرور": "Confirm Password",
  "حفظ التغييرات": "Save Changes",
  "الملف الشخصي": "Profile",
  "إعدادات الحساب": "Account Settings",
  "عناويني": "My Addresses",
  "سجل الطلبات": "Order History",
  "تسجيل الخروج": "Sign Out",
  "سجّل كمتجر": "Register as Merchant",
  "انضم كتاجر شريك": "Join as Merchant Partner",
  "ابدأ بيع منتجاتك في المكلا ووسع نشاطك التجاري": "Start selling your products in Mukalla and expand your business",
  "اسم المتجر": "Store Name",
  "مجال النشاط / التصنيف": "Business Field / Category",
  "رقم السجل التجاري / وثيقة العمل الحر": "Commercial Register / Freelance Document",
  "المدينة والحي": "City & Neighborhood",
  "رفع شعار المتجر": "Upload Store Logo",
  "إرسال طلب الانضمام": "Submit Application",
  "تم استلام طلبك وسنقوم بالتواصل معك خلال 24 ساعة": "Your application has been received and we will contact you within 24 hours",
  "خدمة العملاء والدعم": "Customer Service & Support",
  "تواصل عبر واتساب": "Chat via WhatsApp",
  "اتصل بنا مباشرة": "Call Us Directly",
  "تابعنا على انستقرام": "Follow us on Instagram",
  "رقم الهاتف المعتمد:": "Official Phone Number:",
  "حساب انستقرام الرسمي:": "Official Instagram:",
  "المكلا، حضرموت، الجمهورية اليمنية": "Mukalla, Hadramout, Republic of Yemen",
  "الشروط والأحكام": "Terms & Conditions",
  "سياسة الخصوصية": "Privacy Policy",
  "سياسة الإرجاع والاستبدال": "Return & Exchange Policy",
  "جميع الحقوق محفوظة منصة غيم سبيس © 2026": "All rights reserved Ghaym Space Platform © 2026",
  "منصة غيم سبيس - سوق المكلا الإلكتروني الأول": "Ghaym Space - Mukalla's #1 Digital Marketplace",
  "المنصة الأولى المعتمدة في المكلا 📍": "The #1 Certified Platform in Mukalla 📍",
  "كل ما تحتاجه في": "Everything you need in",
  "، بين يديك الآن": ", at your fingertips now",
  "اكتشف أشهر متاجر حضرموت وأفضل إبداعات الأسر المنتجة المحلية. عطور وبخور، مأكولات منزلية، حرف وفضيات مع خدمة التوصيل السريع لجميع الأحياء.": "Discover Hadramout's most famous stores and local home-business crafts. Perfumes, homemade foods, silverware, and fast delivery to all neighborhoods.",
  "دفع عند الاستلام وكريمي": "Cash on Delivery & Kuraimi",
  "متجر المكلا المختار": "Mukalla's Featured Store",
  "عطور وبخور دوعنية أصلية": "Original Do'ani Perfumes & Incense",
  "أعلى تقييم بالمكلا ⭐": "Highest Rated in Mukalla ⭐",
  "مناطق التوصيل الفوري": "Instant Delivery Zones",
  "الشرج - فوه - الديس": "Al-Sharj - Fuwah - Al-Dis",
  "طلب الآن مع توصيل مجاني": "Order Now with Free Delivery",
  "تصفح حسب القسم": "Browse by Category",
  "عرض كل الأقسام (7)": "View All Categories (7)",
  "عرض كل الأقسام": "View All Categories",
  "فضيات وتراث حضرمي": "Hadrami Silver & Heritage",
  "أكثر المنتجات طلباً في المكلا": "Most Popular Products in Mukalla",
  "عرض كل المنتجات المتاحة": "View All Available Products",
  "مطبخ أم سالم الحضرمي - فوة": "Um Salem Hadrami Kitchen - Fuwah",
  "عسل دوعني سدر أصلي 100% مضمون": "100% Guaranteed Authentic Do'an Sidr Honey",
  "دار الفضة التراثية - الشرج": "Heritage Silver House - Al-Sharj",
  "أسر منتجة متألقة": "Featured Productive Families",
  "مشاريع منزلية بحضرموت": "Home Projects in Hadramout",
  "دعم كامل للأسر المنتجة والحرفيات الحضرميات مع تسويق متكامل وتوصيل سريع وموثوق.": "Full support for Hadrami home businesses and artisans with marketing and fast, reliable delivery.",
  "تصفح أسر المكلا": "Browse Mukalla Home Businesses",
  "عطور دوعن الفاخرة": "Do'an Luxury Perfumes",
  "دقة العود الدوعنية والمخامير الأصلية المجهزة بعناية": "Do'ani Oud blends and authentic handcrafted perfumes",
  "مخبوزات وحلويات سويت هوم": "Sweet Home Bakery & Desserts",
  "حلويات ومخبوزات منزلية طازجة يومياً في المكلا": "Fresh homemade desserts and baked goods daily in Mukalla",
  "فخار وخزف حضرمي تراثي": "Heritage Hadrami Pottery & Ceramics",
  "مشغولات يدوية حضرمية أصيلة من مشاغل الشرج": "Authentic Hadrami handicrafts from Al-Sharj workshops",
  "آراء وتجارب عملاء غيم سبيس": "Ghaym Space Customer Reviews & Testimonials",
  "شهادات حقيقية من متسوقين وتجار في المكلا وحضرموت": "Real reviews from shoppers and merchants across Mukalla and Hadramout",
  "خدمة ممتازة وسريعة جداً. طلبت بخور وعطر ووصلني خلال ساعة ونصف للشرج بجودة عالية. شكراً لفريق غيم سبيس.": "Excellent and super fast service. I ordered incense and perfume and it arrived within 1.5 hours to Al-Sharj in top quality. Thanks to Ghaym Space team.",
  "سارة باوزير": "Sarah Bawazir",
  "عميلة من المكلا (الشرج)": "Customer from Mukalla (Al-Sharj)",
  "كمتجر أسر منتجة، المنصة ساعدتني جداً في تنظيم الطلبات والدفع عبر كريمي والتوصيل المنظم.": "As a home business store, the platform helped me organize orders, receive payments via Kuraimi, and streamline delivery.",
  "أم أحمد للحلويات": "Um Ahmed Sweets",
  "شريكة متجر معتمد": "Certified Merchant Partner",
  "أفضل تجربة شراء هدايا وفضيات أونلاين في حضرموت، التغليف راقي والدفع عند الاستلام مريح جداً.": "Best online gift and silverware shopping experience in Hadramout, elegant packaging and convenient Cash on Delivery.",
  "عمر باسويدان": "Omar Baswaidan",
  "عميل من المكلا (الديس)": "Customer from Mukalla (Al-Dis)",
  "كل ما تحتاجه من أسواق المكلا في مكان واحد": "Everything you need from Mukalla markets in one place",
  "انضم لآلاف المتسوقين وتصفح مئات المتاجر المحلية المعتمدة في حضرموت": "Join thousands of shoppers and explore hundreds of verified local stores in Hadramout",
  "ابدأ التسوق الآن": "Start Shopping Now",
  "انضم كبائع معتمد": "Join as Verified Seller",
  "تطبيق الويب الأول في المكلا": "The #1 Web App in Mukalla",
  "سوق إلكتروني متكامل يربط المتاجر المحلية والأسر المنتجة بالمشترين في المكلا وحضرموت مع توصيل سريع ودفع موثوق.": "An integrated marketplace connecting local stores and productive families with buyers across Mukalla and Hadramout with fast delivery and trusted payment.",
  "روابط سريعة": "Quick Links",
  "عن غيم سبيس": "About Ghaym Space",
  "سياسة التوصيل": "Delivery Policy",
  "بوابات المنظومة": "System Portals",
  "لوحة تحكم التاجر": "Merchant Dashboard",
  "بوابة كابتن التوصيل": "Delivery Courier Portal",
  "لوحة الإدارة العليا": "Super Admin Dashboard",
  "خدمة العملاء والدعم المباشر": "Customer Support & Direct Assistance",
  "المكلا، حضرموت، الجمهورية اليمنية 📍": "Mukalla, Hadramout, Republic of Yemen 📍",
  "هاتف / واتساب: 773058707": "Phone / WhatsApp: 773058707",
  "انستقرام: @ghay_m.space": "Instagram: @ghay_m.space",
  "ساعات العمل: السبت - الخميس (9:00 ص - 11:00 م)": "Working Hours: Sat - Thu (9:00 AM - 11:00 PM)",
  "الجمعة: (4:00 م - 11:00 م)": "Friday: (4:00 PM - 11:00 PM)",
  "جميع الحقوق محفوظة © 2026 منصة غيم سبيس - المكلا": "All rights reserved © 2026 Ghaym Space Platform - Mukalla",
  "استكشف كافة تصنيفات السوق المحلي في المكلا": "Explore all local market categories in Mukalla",
  "مأكولات وحلويات منزلية": "Homemade Food & Sweets",
  "أشهى الأطباق الحضرمية والحلويات المصنوعة منزلياً بأيدي أسر منتجة": "Delicious Hadrami dishes and homemade sweets prepared by local families",
  "أرقى أنواع البخور والعود الدوعني والمخامير والعطور": "Finest Hadrami incense, Do'an oud, mukhamariyah and perfumes",
  "فضيات وحلي تقليدية، خناجر، ومصنوعات يدوية": "Traditional silverware, jewelry, daggers, and handicrafts",
  "تنسيق هدايا، زهور طبيعية، وتوزيعات مناسبات": "Gift packaging, fresh flowers, and event favors",
  "عبايات حضرمية، جلابيات، وأزياء تراثية وعصرية": "Hadrami abayas, jalabiyas, and heritage & modern fashion",
  "ملحقات جوالات، إلكترونيات وأجهزة منزلية خفيفة": "Mobile accessories, electronics, and small home appliances",
  "عسل حضرمي طبيعي، بهارات، ومنتجات غذائية": "Natural Hadrami honey, spices, and authentic pantry foods",
  "مأكولات ومؤن": "Food & Pantry",
  "متاجر المكلا المعتمدة": "Verified Mukalla Stores",
  "تصفح قائمة المتاجر والأسر المنتجة الموثقة في مدينة المكلا وضواحيها": "Browse verified stores and productive families in Mukalla and surrounding areas",
  "جميع المتاجر": "All Stores",
  "البحث في المتاجر...": "Search stores...",
  "المكلا - الديس": "Mukalla - Al-Dis",
  "المكلا - فوه": "Mukalla - Fuwah",
  "مفتوح": "Open",
  "متجر موثق": "Verified Store",
  "أسر منتجة معتمدة": "Verified Productive Family",
  "منتجات": "Products",
  "منتج": "Product",
  "تقييم": "Rating",
  "الرئيسية / عطور وبخور / عطر نفحات حضرموت الفاخر": "Home / Perfumes & Incense / Nafahat Hadramout Luxury Perfume",
  "عطر نفحات حضرموت الفاخر (50 مل)": "Nafahat Hadramout Luxury Perfume (50ml)",
  "المتجر:": "Store:",
  "الحالة:": "Status:",
  "متوفر بالمخزون (12 قطعة متبقية)": "In Stock (12 pieces remaining)",
  "كود المنتج:": "Product SKU:",
  "وصف المنتج": "Product Description",
  "المواصفات": "Specifications",
  "التقييمات": "Reviews",
  "مزيج ساحر يجمع بين أصالة العود الدوعني الفاخر وانتعاش الزهور الشرقية. صنع يدوياً بعناية فائقة ليعكس التراث الحضرمي العريق بثبات يدوم لأكثر من 24 ساعة.": "A captivating blend of authentic Do'ani oud and fresh oriental floral notes. Handcrafted with utmost care to reflect Hadrami heritage with 24+ hour longevity.",
  "المكونات:": "Ingredients:",
  "دهن عود دوعني خالص، صندل، مسك أبيض، نفحات عنبر وورد طائفي.": "Pure Do'ani Oud, sandalwood, white musk, amber hints, and Taif rose.",
  "الحجم:": "Size:",
  "50 مل": "50 ml",
  "الكمية:": "Quantity:",
  "شراء الآن": "Buy Now",
  "مشاركة المنتج": "Share Product",
  "إضافة للمفضلة": "Add to Wishlist",
  "منتجات ذات صلة": "Related Products",
  "سلة المشتريات (4 منتجات)": "Shopping Cart (4 items)",
  "مراجعة وتأكيد مشترياتك قبل إتمام الطلب": "Review and confirm your purchases before checkout",
  "إفراغ السلة": "Empty Cart",
  "كود الخصم / الكوبون": "Discount / Coupon Code",
  "أدخل الكوبون": "Enter coupon",
  "تطبيق": "Apply",
  "الشحن والتوصيل خلال ساعتين داخل المكلا": "Shipping and delivery within 2 hours across Mukalla",
  "الدفع عند الاستلام أو عبر الكريمي / ون كاش متاح": "Cash on Delivery or via Kuraimi / OneCash available",
  "إتمام الطلب والدفع": "Checkout & Payment",
  "أدخل بيانات التوصيل واختر طريقة الدفع المناسبة لك": "Enter delivery info and choose your preferred payment method",
  "بيانات المستلم": "Recipient Information",
  "رقم الهاتف المحمول": "Mobile Phone Number",
  "المدينة:": "City:",
  "الحي / المنطقة:": "District / Neighborhood:",
  "العنوان بالتفصيل (الشارع، المعلم القريب):": "Detailed Address (Street, Nearest Landmark):",
  "ملاحظات التوصيل (اختياري):": "Delivery Notes (Optional):",
  "طرق الدفع المحلية بالمكلا": "Local Payment Methods in Mukalla",
  "الدفع نقداً عند استلام الشحنة من المندوب": "Pay cash upon delivery by the courier",
  "تحويل فوري لحسابنا بالكريمي (رقم الحساب: 300123456)": "Direct transfer to our Kuraimi account (Acct: 300123456)",
  "دفع إلكتروني فوري عبر تطبيق ون كاش": "Instant digital payment via OneCash app",
  "ملخص الطلب": "Order Summary",
  "تأكيد الطلب الآن": "Confirm Order Now",
  "تهانينا! تم تأكيد طلبك بنجاح": "Congratulations! Your order is confirmed",
  "شكراً لثقتك بمنصة غيم سبيس. سنقوم بتجهيز طلبك وتوصيله في أسرع وقت.": "Thank you for trusting Ghaym Space. We will prepare and deliver your order promptly.",
  "رقم الطلب الخاص بك:": "Your Order Number:",
  "حالة الطلب:": "Status:",
  "قيد التجهيز": "Preparing",
  "الوقت المتوقع للوصول:": "Estimated Delivery Time:",
  "خلال ساعتين (داخل المكلا)": "Within 2 hours (inside Mukalla)",
  "متابعة حالة الطلب": "Track Order Status",
  "العودة للرئيسية": "Back to Home",
  "طلباتي السابقة والجارية": "My Previous & Active Orders",
  "متابعة حالة وتفاصيل كافة طلباتك السابقة عبر غيم سبيس": "Track the status and details of all your previous orders on Ghaym Space",
  "جميع الطلبات": "All Orders",
  "الطلبات الجارية": "Active Orders",
  "الطلبات المكتملة": "Completed Orders",
  "الطلبات الملغية": "Cancelled Orders",
  "تفاصيل الطلب": "Order Details",
  "إعادة الطلب": "Reorder",
  "فاتورة الشراء": "Purchase Invoice",
  "مركز المساعدة والدعم الفني": "Help Center & Technical Support",
  "نحن هنا لخدمتك على مدار الساعة في مدينة المكلا": "We are here to help you 24/7 across Mukalla",
  "تواصل معنا مباشرة": "Contact Us Directly",
  "الاتصال المباشر": "Direct Call",
  "محادثة واتساب": "WhatsApp Chat",
  "حساب انستقرام": "Instagram Account",
  "الأسئلة الشائعة": "Frequently Asked Questions",
  "كم تستغرق مدة التوصيل داخل المكلا؟": "How long does delivery take inside Mukalla?",
  "يتم التوصيل خلال ساعتين كحد أقصى للطلبات الفورية داخل أحياء المكلا (الشرج، الديس، فوة، المكلا القديمة).": "Delivery takes up to 2 hours for instant orders across Mukalla neighborhoods (Al-Sharj, Al-Dis, Fuwah, Old Mukalla).",
  "ما هي وسائل الدفع المتاحة؟": "What payment methods are available?",
  "نوفر الدفع نقداً عند الاستلام، والتحويل عبر بنك الكريمي (حساب أو جوال)، وتطبيق ون كاش، ومحفظة بيس.": "We offer Cash on Delivery, transfers via Kuraimi Bank (Account or Jawwal), OneCash, and PYS Wallet.",
  "كيف يمكنني التسجيل كمتجر شريك؟": "How do I register as a merchant partner?",
  "يمكنك الضغط على زر 'انضم كتاجر شريك' في أعلى الصفحة وتعبئة بيانات متجرك ليتم التواصل معك وتفعيله فوراً.": "Click 'Join as Merchant Partner' in the header, fill out your store details, and our team will contact you to activate it immediately.",
  "انضمام تاجر جديد - الخطوة 1": "New Merchant Registration - Step 1",
  "انضمام تاجر جديد - الخطوة 2": "New Merchant Registration - Step 2",
  "البيانات الأساسية للمتجر": "Store Basic Information",
  "بيانات التوثيق والمالك": "Owner & Verification Details",
  "اسم مالك المتجر": "Store Owner Name",
  "رقم الهوية الوطنية / جواز السفر": "National ID / Passport Number",
  "نوع النشاط التجاري": "Business Type",
  "متجر قائم وله محل تجاري": "Physical Store with Commercial Location",
  "مشروع منزلي / أسرة منتجة": "Home-based Business / Productive Family",
  "حرفة يدوية مستقلة": "Independent Artisan Craft",
  "رقم الحساب البنكي بالكريمي لاستلام الأرباح": "Kuraimi Bank Account to receive profits",
  "متابعة للخطوة التالية": "Proceed to Next Step",
  "السابق": "Previous",
  "إتمام التسجيل ورفع الطلب": "Complete Registration & Submit",
  "الملف الشخصي وإعدادات الحساب": "Profile & Account Settings",
  "إدارة بياناتك الشخصية، عناويني، وتفضيلات الحساب": "Manage personal info, addresses, and account preferences",
  "المعلومات الشخصية": "Personal Information",
  "العناوين المحفوظة": "Saved Addresses",
  "تغيير كلمة المرور": "Change Password",
  "كلمة المرور الحالية": "Current Password",
  "كلمة المرور الجديدة": "New Password",
  "تحديث الملف الشخصي": "Update Profile",
  "حفظ كلمة المرور": "Save Password",
  "الشروط والأحكام - غيم سبيس": "Terms & Conditions - Ghaym Space",
  "سياسة الخصوصية - غيم سبيس": "Privacy Policy - Ghaym Space",
  "آخر تحديث: يناير 2026": "Last Updated: January 2026",
  "مقدمة": "Introduction",
  "شروط الاستخدام": "Terms of Use",
  "حقوق والتزامات البائع": "Merchant Rights & Responsibilities",
  "حقوق والتزامات المشتري": "Customer Rights & Responsibilities",
  "سياسة الدفع والرسوم": "Payment & Fees Policy",
  "سياسة الإرجاع والإلغاء": "Returns & Cancellation Policy",
  "البيانات التي نقوم بجمعها": "Data We Collect",
  "كيفية استخدام البيانات": "How We Use Data",
  "حماية وأمان البيانات": "Data Security & Protection",
  "ملفات تعريف الارتباط وحقوق المستخدم": "Cookies & User Rights",
  "مميز": "Featured",
  "Ghaym Space | غيم سبيس - سوق المكلا الإلكتروني الأول": "Ghaym Space - Mukalla's #1 Digital Marketplace",
  "تمت العملية بنجاح": "Operation completed successfully",
  "4.9 / 5.0 (240 تقييم)": "4.9 / 5.0 (240 reviews)",
  "بوكس حلوى ومعمول حضرمي بالسمسم والفستق": "Hadrami Sweets & Maamoul Box with Sesame & Pistachio",
  "توصيل محلي فوري": "Instant Local Delivery",
  "توصيل سريع لكافة أحياء المكلا وضواحيها في أقل من ساعتين.": "Express delivery across all Mukalla neighborhoods in under 2 hours.",
  "دفع عند الاستلام ومحافظ": "Cash on Delivery & Wallets",
  "الدفع نقداً عند الباب أو عبر الكريمي مميز، بيس، وون كاش.": "Cash payment at doorstep or via Kuraimi, PYS, and OneCash.",
  "دعم الأسر المنتجة": "Support Productive Families",
  "منصة تفتح آفاقاً جديدة للمشاريع المنزلية والحرفية الحضرمية.": "A platform opening new horizons for Hadrami home & craft projects.",
  "ضمان الجودة 100%": "100% Quality Guarantee",
  "منتجات أصلية ومفحوصة مع إمكانية المعاينة قبل الدفع.": "Authentic inspected products with inspection option before payment.",
  "تصفح أقسام سوق غيم سبيس": "Browse Ghaym Space Market Categories",
  "اختر القسم المناسب لاستعراض المتاجر والمنتجات المتوفرة في المكلا": "Choose the category to explore stores and products available in Mukalla",
  "زيوت عطرية فاخرة، لبان، ودقة عود حضرمية": "Luxury perfume oils, frankincense, and Hadrami oud",
  "18 متجر نشط": "18 Active Stores",
  "طعام ومخبوزات": "Food & Bakery",
  "أسر منتجة، حلويات حضرمية، وأكلات بيتية طازجة": "Productive families, Hadrami sweets, and fresh home-cooked meals",
  "24 متجر نشط": "24 Active Stores",
  "توزيعات مناسبات، بوكسات هدايا، وباقات ورد": "Event favors, gift boxes, and flower bouquets",
  "15 متجر نشط": "15 Active Stores",
  "حِرف وفضيات": "Crafts & Silverware",
  "تراثيات حضرمية، مسابح فضة، ومصنوعات يدوية": "Hadrami heritage items, silver rosaries, and handcrafted goods",
  "12 متجر نشط": "12 Active Stores",
  "عبايات نسائية، أزياء حضرمية، وموضة عصرية": "Women's abayas, Hadrami dresses, and modern fashion",
  "32 متجر نشط": "32 Active Stores",
  "ملحقات هواتف، شواحن، وسماعات ذكية": "Phone accessories, chargers, and smart earbuds",
  "9 متاجر نشطة": "9 Active Stores",
  "مستلزمات الأطفال والألعاب": "Kids Supplies & Toys",
  "ألعاب تنمية المهارات، ملابس أطفال، ومستلزمات مواليد": "Skill development toys, kids clothing, and newborn essentials",
  "14 متجر نشط": "14 Active Stores",
  "بخور حضرمي ملكي فاخر (دقة العود) 100 جرام": "Luxury Hadrami Royal Incense (Diqqat Oud) 100g",
  "توصيل فوري خلال 90 دقيقة": "Instant delivery within 90 minutes",
  "كيكة العسل الحضرمية الفاخرة بطبقات الكراميل": "Luxury Hadrami Honey Cake with Caramel Layers",
  "طازجة - تجهيز يومي حسب الطلب": "Fresh - Daily on-demand preparation",
  "مسبحة فضة حضرمية أصيلة عيار 925 مع حجر كريم": "Authentic Hadrami 925 Silver Rosary with Gemstone",
  "صناعة يدوية - مشاغل الشرج التراثية": "Handmade - Al-Sharj Heritage Workshops",
  "باقة ورد طبيعي جوري مع علبة شوكولاتة فاخرة": "Fresh Rose Bouquet with Luxury Chocolate Box",
  "تنسيق راقي - مناسبات وهدايا": "Elegant Arrangement - Events & Gifts",
  "تفاصيل ومواصفات المنتج": "Product Details & Specifications",
  "توصيل مجاني للطلبات فوق 20,000 ر.ي": "Free delivery for orders above 20,000 YER",
  "إمكانية الاسترجاع خلال 24 ساعة": "24-hour return policy",
  "طريقة الاستخدام:": "How to Use:",
  "يناسب الاستخدام اليومي والمناسبات الرسمية بفضل تركيزه العالي وثباته الطويل.": "Suitable for daily use and formal occasions due to high concentration and long-lasting aroma.",
  "بلد المنشأ:": "Country of Origin:",
  "حضرموت - اليمن (إنتاج يدوي محلي)": "Hadramout - Yemen (Handmade local production)",
  "تقييمات العملاء لهذا المنتج": "Customer Reviews for This Product",
  "4.9 من 5": "4.9 out of 5",
  "بناءً على 24 تقييم حقيقي": "Based on 24 verified reviews",
  "أحمد العمودي": "Ahmed Al-Amoudi",
  "رائحة البخور والعود ممتازة جداً وثابتة في الثياب والمكان. فخورين بمنتجات المكلا!": "The incense and oud scent is exceptional and stays on clothes and rooms. Proud of Mukalla products!",
  "فاطمة بن محفوظ": "Fatima Bin Mahfoud",
  "التوصيل كان سريع خلال ساعة ونصف للديس والتغليف في غاية الأناقة. شكراً لكم.": "Delivery was fast within 1.5 hours to Al-Dis and packaging was remarkably elegant. Thank you.",
  "نبذة عن المتجر": "About the Store",
  "متجر متخصص في صناعة وتجهيز أرقى أنواع البخور الحضرمي، دقة العود الملكية، والعطور الشرقية المستوحاة من تراث دوعن والمكلا الأصيل. مرخص وموثق في منصة غيم سبيس منذ عام 2024.": "A specialized boutique crafting the finest Hadrami incense, royal oud, and oriental perfumes inspired by Do'an and Mukalla heritage. Verified on Ghaym Space since 2024.",
  "ساعات الدوام:": "Working Hours:",
  "السبت - الخميس: 9:00 ص - 10:30 م | الجمعة: 4:00 م - 10:30 م": "Sat - Thu: 9:00 AM - 10:30 PM | Fri: 4:00 PM - 10:30 PM",
  "العنوان على الخريطة:": "Map Address:",
  "المكلا - حي الديس - بجانب بنك الكريمي": "Mukalla - Al-Dis District - Next to Kuraimi Bank",
  "منتجات المتجر": "Store Products",
  "الأكثر مبيعاً في المتجر": "Store Best Sellers",
  "تواصل مع المتجر": "Contact Store",
  "كابتن التوصيل السريع": "Express Delivery Courier",
  "المهام الحالية المسندة": "Current Assigned Tasks",
  "المهام المكتملة اليوم": "Completed Tasks Today",
  "إجمالي تحصيلات الكاش": "Total Cash Collected",
  "العميل:": "Customer:",
  "المستلم:": "Recipient:",
  "رقم هاتف العميل:": "Customer Phone:",
  "نقطة الاستلام (المتجر):": "Pickup Point (Store):",
  "نقطة التسليم (العميل):": "Drop-off Point (Customer):",
  "المبلغ المطلوب تحصيله نقداً:": "Cash Amount to Collect:",
  "تم استلام الشحنة من المتجر": "Shipment picked up from store",
  "في الطريق إلى العميل": "On the way to customer",
  "تم تسليم الشحنة وتحصيل المبلغ": "Delivered and cash collected",
  "تأكيد التسليم بنجاح": "Confirm Successful Delivery",
  "الاتصال بالعميل": "Call Customer",
  "فتح الموقع في خرائط جوجل": "Open in Google Maps",
  "لوحة القيادة المركزية - منصة غيم سبيس": "Central Management Dashboard - Ghaym Space",
  "إجمالي المبيعات النشطة": "Total Active Sales",
  "إجمالي المتاجر الشريكة": "Total Partner Stores",
  "إجمالي طلبات اليوم": "Total Orders Today",
  "طلبات الانضمام المعلقة": "Pending Store Applications",
  "الموافقة على المتجر": "Approve Store",
  "رفض الطلب": "Reject Application",
  "تجميد المتجر": "Suspend Store",
  "تنشيط المتجر": "Activate Store",
  "إدارة العمولة والرسوم": "Commission & Fees Management",
  "سجل العمليات والرقابة": "Audit Log & Compliance",
  "هل يمكنني الدفع عبر المحافظ الإلكترونية مثل بيس أو ون كاش؟": "Can I pay via mobile wallets like PYS or OneCash?",
  "نعم بكل تأكيد، نوفر خيارات دفع إلكترونية فورية تشمل ون كاش، محفظة بيس (PYS)، وحساب الكريمي المميز مع تأكيد فوري للطلب.": "Yes absolutely, we provide instant digital payment options including OneCash, PYS Wallet, and Kuraimi Bank with instant order confirmation.",
  "هل التوصيل يشمل كافة أحياء المكلا وضواحيها؟": "Does delivery cover all Mukalla districts and outskirts?",
  "نعم، يغطي فريق التوصيل الخاص بنا كافة أحياء المكلا الرئيسية: الشرج، الديس، المكلا القديمة، فوه القديمة، المساكن، وروكب، وتتراوح مدة التوصيل بين 60 إلى 120 دقيقة.": "Yes, our delivery team covers all major Mukalla districts: Al-Sharj, Al-Dis, Old Mukalla, Old Fuwah, Al-Masakin, and Rokob, with delivery times between 60 to 120 minutes.",
  "كيف أضمن جودة المنتجات خصوصاً من الأسر المنتجة؟": "How do you guarantee product quality, especially from home businesses?",
  "كافة المتاجر والأسر المنتجة المسجلة في غيم سبيس تخضع لتوثيق هوية ومعايير جودة صارمة، ويحق للمشتري معاينة الطلب والتأكد من مطابقته قبل سداد المبلغ للمندوب.": "All stores and productive families on Ghaym Space undergo strict identity and quality verification, and buyers can inspect items upon delivery before paying the courier.",
  "أهلاً بك في منصة غيم سبيس": "Welcome to Ghaym Space Platform",
  "سجل دخولك الآن لتتمتع بتجربة تسوق سريعة ومميزة": "Sign in now to enjoy a fast and unique shopping experience",
  "تسجيل الدخول كتاجر": "Merchant Sign In",
  "تسجيل الدخول ككابتن توصيل": "Driver Sign In",
  "تسجيل الدخول كإدارة": "Admin Sign In",
  "أو تابع التصفح كزائر": "Or continue browsing as guest",
  "الدخول بحساب تجريبي سريع:": "Quick Demo Role Sign In:",
  "عميل (مشتري)": "Customer (Buyer)",
  "تاجر معتمد": "Verified Merchant",
  "مندوب توصيل": "Delivery Courier",
  "مدير المنصة": "Platform Admin",
  "القسم المحدد حالياً:": "Currently Selected Category:",
  "نتائج البحث عن:": "Search Results for:",
  "تم العثور على": "Found",
  "الشرج (شارع السلام والهايبر)": "Al-Sharj (Al-Salam St. & Hyper)",
  "الشرج - شارع السلام والهايبر": "Al-Sharj - Al-Salam St. & Hyper",
  "روكب، بويش وجول مسحة": "Rokob, Boyesh & Jool Masha",
  "روكب": "Rokob",
  "بويش": "Boyesh",
  "جول مسحة": "Jool Masha",
  "المساكن": "Al-Masakin",
  "أقصى سعر (ر.ي)": "Max Price (YER)",
  "أدنى سعر (ر.ي)": "Min Price (YER)",
  "الأكثر تطابقاً ورواجاً": "Best Match & Trending",
  "علبة 150 جرام معبأة بأجود أنواع العود والزيوت الشرقية": "150g box packed with the finest oud and oriental oils",
  "عطر مسك الغزال الحضرمي الفاخر": "Hadrami Deer Musk Luxury Perfume",
  "تولة أصلية برائحة ثابتة وفوحان يدوم 48 ساعة": "Authentic tolah with 48-hour lasting fragrance",
  "عسل سدر دوعني قطفة أولى": "Do'an First-Harvest Sidr Honey",
  "كيلو صافي من مناحل وادي دوعن الشهيرة": "1kg net from famous Wadi Do'an apiaries",
  "دار الفضة - الشرج": "Silver House - Al-Sharj",
  "فضة عيار 925 صناعة يدوية أصيلة": "Handcrafted authentic 925 sterling silver",
  "بوكس حلوى ومعمول حضرمي بالسمسم": "Hadrami Sesame Sweets & Maamoul Box",
  "كيلو ونصف مشكل من المعمول والغريبة الحضرمية": "1.5kg assorted Hadrami maamoul and ghuraiba",
  "طقم مبخرة خشبية حضرمية مع ملقط ومخزن بخور": "Hadrami Wooden Censer Set with Tongs & Storage",
  "نقش يدوي أنيق مع تشطيب نحاسي أصيل": "Hand-carved with antique brass finish",
  "طقم مبخرة حضرمية خشبية فاخرة مع مخزن للبخور": "Hadrami Wooden Luxury Censer Set with Storage",
  "علبة شوكولاتة باتشي فاخرة مع تغليف إهداء راقي": "Patchi Luxury Chocolate Box with Elegant Gift Wrap",
  "تاجر (نفحات)": "Merchant (Nafahat)",
  "مالك المنصة": "Platform Owner",
  "متابعة والتحقق من الهاتف": "Continue & Verify Mobile",
  "لديك حساب بالفعل؟": "Already have an account?",
  "خطوة 2 من 2: التحقق": "Step 2 of 2: Verification",
  "رمز التحقق (OTP)": "Verification Code (OTP)",
  "أدخل رمز التأكيد المكون من 4 أرقام المرسل إلى هاتفك": "Enter the 4-digit verification code sent to your phone",
  "لم يصلك الرمز؟": "Didn't receive code?",
  "إعادة الإرسال بعد": "Resend in",
  "ثانية": "seconds",
  "تأكيد الحساب والدخول": "Verify Account & Sign In",
  "إدارة المنتجات والمخزون": "Products & Inventory Management",
  "أضف وعدل أصناف متجرك، وراقب الكميات المتاحة": "Add and edit products, monitor stock quantities",
  "تعديل بيانات المتجر": "Edit Store Details",
  "سجل المبيعات والأرباح": "Sales & Profit Record",
  "الرصيد القابل للسحب:": "Withdrawable Balance:",
  "طلب سحب الأرباح": "Request Payout",
  "حالة المتجر:": "Store Status:",
  "نشط ويستقبل الطلبات": "Active & Accepting Orders",
  "إيقاف مؤقت لاستقبال الطلبات": "Pause Accepting Orders",
  "منتجاتك الحالية": "Your Current Products",
  "إضافة صنف جديد": "Add New Product Item",
  "صورة المنتج": "Product Image",
  "اسم الصنف": "Item Name",
  "القسم التابع له": "Assigned Category",
  "سعر البيع (ر.ي)": "Selling Price (YER)",
  "الكمية المتوفرة": "Available Quantity",
  "حالة التوفر": "Availability Status",
  "الإجراءات": "Actions",
  "تعديل الصنف": "Edit Item",
  "حذف الصنف": "Delete Item",
  "الموقع الجغرافي: المكلا - حضرموت": "Location: Mukalla - Hadramout",
  "مركز الشكاوى والاقتراحات": "Complaints & Suggestions Center",
  "نحن نستمع إليكم دائماً لتقديم أفضل تجربة تسوق في المكلا": "We always listen to provide the best shopping experience in Mukalla",
  "موضوع الشكوى / الاقتراح": "Subject of Complaint / Suggestion",
  "تفاصيل الرسالة": "Message Details",
  "إرسال الرسالة": "Submit Message",
  "شكراً لتواصلك، سنرد عليك خلال 12 ساعة": "Thank you for contacting us, we will reply within 12 hours",
  "تفاصيل الدفع والتوصيل": "Payment & Delivery Details",
  "طريقة الاستلام والتوصيل": "Pickup & Delivery Method",
  "توصيل سريع إلى العنوان": "Express Delivery to Address",
  "استلام مباشر من المتجر": "Self Pickup from Store",
  "بيانات الشحنة والمنتجات": "Shipment & Items Overview",
  "رسوم الخدمة والتوصيل": "Service & Delivery Fee",
  "المجموع النهائي": "Final Total",
  "سداد نقدي عند الباب": "Cash on Delivery",
  "تحويل فوري (حساب بنكي / كريمي)": "Direct Bank / Kuraimi Transfer",
  "تم استلام طلبكم بنجاح وجاري إرساله للمتجر والمندوب": "Your order has been received and sent to store and driver",
  "رقم تتبع الطلب:": "Order Tracking Number:",
  "الوقت المقدر لوصول الطلب: 90 دقيقة": "Estimated arrival time: 90 minutes",
  "شكراً لتسوقك من متاجر المكلا المحلية عبر غيم سبيس": "Thank you for shopping from Mukalla local stores via Ghaym Space",
  "استعادة الحساب": "Account Recovery",
  "إرسال رمز إعادة التعيين": "Send Reset Code",
  "مزيج ساحر واستثنائي يجمع بين العود الكمبودي المعتق، الصندل الطبيعي الهادئ، ونفحات الورد الدوعني الأصيل.": "An enchanting blend uniting aged Cambodian oud, soothing natural sandalwood, and authentic Do'ani rose notes.",
  "يباع بواسطة:": "Sold by:",
  "متوفر في المخزون": "In Stock",
  "شامل كافة الرسوم والضريبة": "All fees and taxes included",
  "اختر الحجم المتوفر:": "Select available size:",
  "100 مل": "100 ml",
  "توصيل 45 دقيقة": "45-Minute Delivery",
  "دفع محلي مرن": "Flexible Local Payment",
  "استرجاع مجاني خلال 48 ساعة في حال عدم المطابقة": "Free 48-hour return if not matching description",
  "مكونات وهرم العطر": "Perfume Pyramid & Notes",
  "آراء العملاء": "Customer Reviews",
  "فخامة تنطق بالأصالة الحضرمية": "Luxury Reflecting Hadrami Heritage",
  "الزجاجة مصنوعة من الكريستال السميك المقاوم ومزودة برذاذ ضبابي يوزع العطر بتجانس مثالي، مغلفة بصندوق جلدي فاخر يجعله الهدية المثالية لأعزائكم في كل المناسبات السعيدة.": "Crafted from thick crystal glass with mist atomization spray, encased in a luxury leather gift box perfect for joyous occasions.",
  "الاستخدام الموصى به:": "Recommended Usage:",
  "المناسبات الرسمية، الأعياد، وحفلات الزفاف والمجالس.": "Formal events, Eid celebrations, weddings, and gatherings.",
  "درجة الثبات والتركيز:": "Longevity & Concentration:",
  "Eau de Parfum بتركيز زيوت عطرية نقية تتجاوز 25%.": "Eau de Parfum with pure essential fragrance oils exceeding 25%.",
  "الهرم العطري والمكونات النقية": "Fragrance Pyramid & Pure Notes",
  "القمة العطرية (الإفتتاحية)": "Top Notes (Opening)",
  "الورد الدوعني، البرغموت، ورذاذ الهيل الأخضر": "Do'ani Rose, Bergamot, and green cardamom mist",
  "قلب العطر (الوسط)": "Heart Notes (Middle)",
  "خشب الصندل العتيق، حبوب التونكا، والعنبر الصافي": "Vintage Sandalwood, Tonka beans, and pure amber",
  "قاعدة العطر (الارتكاز)": "Base Notes (Foundation)",
  "دهن العود الكمبودي المعتق والمسك الأبيض الأصيل": "Aged Cambodian Oud and authentic white musk",
  "يحق للعميل معاينة زجاجة العطر وتجربة عينة التيستر المرفقة مع الطلب قبل السداد لمندوب التوصيل.": "Customers are entitled to inspect the bottle and sample tester before paying the delivery courier.",
  "استرجاع مجاني بنسبة 100% في حال عدم رضى العميل عن العينة التجريبية دون فتح العبوة الأساسية.": "100% free return if customer is not satisfied with sample without unsealing original box.",
  "سالم بن محفوظ - حي السلام": "Salem Bin Mahfoud - Al-Salam District",
  "عطر فخم جداً وريحته ثابته بالثوب حتى بعد الغسيل. التوصيل كان سريع خلال نص ساعة فقط للديس. شكراً متجر نفحات وغيم سبيس.": "Exquisite luxury perfume that lasts on garments even after washing. Delivery was in 30 minutes to Al-Dis. Thanks Nafahat & Ghaym Space.",
  "مريم باقروان - فوه الطويلة": "Maryam Baqrawan - Fuwah",
  "التغليف كأنه هدية ملوكية! فخورة بهكذا مستوى من المتاجر الحضرمية.": "Packaging feels like royal gift! Proud of this high caliber of Hadrami stores.",
  "منتجات مقترحة تناسب ذوقك": "Recommended products matching your taste",
  "طلب رقم #": "Order #",
  "تاريخ الطلب:": "Order Date:",
  "إجمالي الفاتورة:": "Invoice Total:",
  "عرض تفاصيل الشحنة": "View Shipment Details",
  "تم استلام الطلب من قِبل المتجر وجاري تجهيزه للتسليم": "Order received by store and being prepared for delivery",
  "المندوب في طريقه إلى موقعك بالمكلا": "Courier is on the way to your location in Mukalla",
  "تم تسليم الطلب واستلام المبلغ نقداً": "Order delivered and payment collected in cash",
  "ملاحظة المندوب:": "Courier Note:",
  "تم التسليم عند الباب بنجاح": "Delivered at doorstep successfully",
  "اختر طريقة الدفع المناسبة:": "Choose preferred payment method:",
  "سداد كاش عند الاستلام": "Cash on Delivery",
  "تحويل فوري عبر حساب الكريمي": "Direct transfer via Kuraimi Bank",
  "سداد عبر محفظة ون كاش": "Pay via OneCash Wallet",
  "سداد عبر محفظة بيس": "Pay via PYS Wallet",
  "تأكيد العنوان ورقم الجوال": "Confirm address & mobile number",
  "تأكيد الطلب نهائياً": "Confirm Order Finally",
  "شكراً لطلبك من غيم سبيس!": "Thank you for ordering from Ghaym Space!",
  "سيصلك اتصال من كابتن التوصيل عند الانطلاق.": "Courier will call you upon departure.",
  "بخور وعرائسي": "Bridal & Luxury Incense",
  "بخور دوعني ملكي معتق بالمسك": "Do'ani Royal Incense Aged with Musk",
  "أدهان شرقية": "Oriental Oils",
  "تولة دهن عود كمبودي معتق سوبر": "Tolah Aged Cambodian Super Oud Oil",
  "مرشات ومفارش": "Room & Linen Mists",
  "مرش المجالس والمفارش الفندقي 500 مل": "Hotel-grade Majlis & Linen Spray 500ml",
  "رجوع إلى قائمة المتاجر": "Back to Stores List",
  "نفحات": "Nafahat",
  "شريك بلاتيني": "Platinum Partner",
  "9:00 ص - 11:00 م": "9:00 AM - 11:00 PM",
  "محادثة المتجر": "Chat with Store",
  "المتجر الحضرمي الأول المتخصص في صناعة وتوريد أجود أنواع العود الدوعني الملكي، البخور العرائسي الفاخر، المخامير، والمرشوشات التراثية بأيدٍ حضرمية خبيرة تجمع بين عراقة التراث وفخامة الحاضر.": "The #1 Hadrami boutique specializing in crafting and supplying the finest royal Do'ani oud, bridal incense, mukhamariyah, and heritage sprays by expert Hadrami hands blending heritage with luxury.",
  "تاريخ الانضمام: 2023": "Joined: 2023",
  "سرعة التوصيل": "Delivery Speed",
  "فوري خلال 45 دقيقة": "Express in 45 min",
  "أصلي ومضمون 100%": "100% Original & Guaranteed",
  "الاستلام المباشر": "Direct Pickup",
  "متاح من الفرع": "Available from Branch",
  "الكل": "All",
  "عطور شرقية وفرنسية": "Oriental & French Perfumes",
  "بخور عرائسي": "Bridal Incense",
  "بخور ظفاري حضرمي فاخر درجة أولى": "Luxury 1st Grade Hadrami Dhofari Incense",
  "طقم متكامل": "Complete Set",
  "بكج العود والمبخرة الكريستالية": "Oud & Crystal Censer Package",
  "مرشوش الملكي للمفارش والمنازل 500 مل": "Royal Linen & Home Mist 500ml",
  "نادر وفاخر": "Rare & Luxury",
  "دقة عود أرياني طبيعي معتق": "Aged Natural Ariani Oud Blend",
  "مخمرية حضرمية ملكية للشعر والجسم": "Royal Hadrami Mukhamariyah for Hair & Body",
  "الموقع الجغرافي وساعات العمل": "Location & Working Hours",
  "المكلا - الديس - شارع الشهداء - عمارة الأحقاف": "Mukalla - Al-Dis - Martyrs St. - Al-Ahqaf Bldg.",
  "الموقع الجغرافي والفرع الرئيسي:": "Location & Main Branch:",
  "حي الديس، الشارع العام بجانب بنك الكريمي - المكلا، حضرموت": "Al-Dis District, Main St. next to Kuraimi Bank - Mukalla, Hadramout",
  "فروع أخرى بالمكلا:": "Other Branches in Mukalla:",
  "فرع الشرج - مجمع النور التجاري": "Al-Sharj Branch - Al-Noor Mall",
  "تقييمات المتجر": "Store Ratings",
  "بناءً على 310 تقييم معتمد": "Based on 310 verified reviews",
  "مستوى رضا العملاء عن التوصيل والتغليف:": "Customer Satisfaction on Delivery & Packaging:",
  "ممتاز (98%)": "Excellent (98%)",
  "دهن عود سيوفي طبيعي (ربع تولة)": "Natural Sayoufi Oud Oil (Quarter Tolah)",
  "معمول الدوسري الفاخر برائحة المسك": "Luxury Dosari Maamoul with Musk Scent",
  "متجر نشط": "Active Store",
  "حرف يدوية وتراث": "Handicrafts & Heritage",
  "الترتيب:": "Sort:",
  "المضاف حديثاً": "Recently Added",
  "متخصصون في أرقى خلطات البخور الدوعني الأصيل والعود الكمبودي المعتق، بجودة ورائحة تملأ بيتك بالفخامة.": "Specializing in the finest authentic Do'ani incense blends and aged Cambodian oud, filling your home with luxury.",
  "حلويات ومخبوزات": "Sweets & Bakery",
  "ألذ المخبوزات الحضرمية البيتية، الكعك بالتمر، والحلويات الشرقية المحضرة طازجة يومياً بأيدي أسر مكلاوية مبدعة.": "Delicious homemade Hadrami pastries, date cookies, and fresh oriental sweets prepared daily by creative Mukalla families.",
  "تراث أصيل": "Authentic Heritage",
  "رواق الخوص والحرفيات": "Palm Wicker & Crafts Gallery",
  "مشغولات تراثية": "Heritage Crafts",
  "تغليف راقي": "Luxury Packaging",
  "ريماس للهدايا والمباخر": "Rimas Gifts & Censers",
  "تنسيق هدايا المناسبات والمواليد، مباخر نحاسية ورخامية منقوشة بالاسم مع تجهيز توزيعات الأفراح الراقية.": "Arranging gifts for occasions and newborns, custom engraved brass & marble censers, and luxury wedding favors.",
  "مفحوص مخبرياً": "Lab Tested",
  "عسل دوعن الملكي": "Royal Do'an Honey",
  "عسل سدر دوعني ملكي خالص 100% مستخرج مباشرة من مناحل وادي دوعن، مع مشتقات العكبر وحبوب اللقاح الطبيعية.": "100% pure royal Do'ani Sidr honey harvested directly from Wadi Do'an apiaries, with natural propolis and bee pollen.",
  "تفصيل خاص": "Custom Tailoring",
  "أزياء النخبة التراثية": "Elite Heritage Fashion",
  "ملابس وخياطة": "Clothing & Tailoring",
  "خياطة وتطريز الأثواب الحضرمية التقليدية، الدراريع المطرزة بدقة، وأحدث تصاميم العبايات العصرية بطابع محلي.": "Tailoring and embroidering traditional Hadrami dresses, intricately detailed dara'as, and modern abayas with local character.",
  "سجل كتاجر الآن مجاناً": "Register as Merchant Now for Free",
  "ابدأ ببيع منتجاتك إلى آلاف العملاء في المكلا وحضرموت خلال 24 ساعة": "Start selling your products to thousands of customers across Mukalla and Hadramout within 24 hours",
  "انضمام فوري لغيم سبيس": "Instant Join Ghaym Space",
  "اسم المستلم": "Recipient Name",
  "رقم التواصل": "Contact Phone",
  "اختر طريقة الدفع": "Choose Payment Method",
  "تحويل إلى بنك الكريمي": "Transfer to Kuraimi Bank",
  "محفظة ون كاش (OneCash)": "OneCash Wallet",
  "محفظة بيس الإلكترونية": "PYS Electronic Wallet",
  "نقد عند الاستلام (كاش)": "Cash on Delivery (COD)",
  "مراجعة الطلب قبل الإرسال": "Review order before submitting",
  "سعر المنتج": "Product Price",
  "رسوم الشحن": "Shipping Fee",
  "المجموع الصافي": "Net Total",
  "إتمام الشراء": "Checkout Now",
  "متابعة التسوق": "Continue Shopping"
};

  // Reverse mapping for English to Arabic
  const REVERSE_DICT = {};
  for (const [ar, en] of Object.entries(DICT)) {
    REVERSE_DICT[en.toLowerCase()] = ar;
  }

  // Pre-sort dictionary keys by descending length for longest-phrase substring replacement
  const SORTED_AR_KEYS = Object.keys(DICT).sort((a, b) => b.length - a.length);

  // Get current language from localStorage (defaults to 'ar')
  let currentLang = localStorage.getItem('ghaym_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ghaym_lang', lang);
    const isEn = lang === 'en';

    // 1. Set root HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isEn ? 'ltr' : 'rtl');

    // 2. Update all language buttons
    document.querySelectorAll('#globalLangBtn, #langLabel, .lang-toggle-btn').forEach(btn => {
      btn.textContent = isEn ? 'العربية' : 'English';
    });

    // 3. Walk all text nodes in the body and translate
    translateDOM(document.body, isEn);

    // 4. Translate inputs, placeholders and buttons
    translateAttributes(isEn);
  }

  function translateText(text, isEn) {
    const trimmed = text.trim();
    if (!trimmed) return text;

    if (isEn) {
      // 1. Exact match in dictionary
      if (DICT[trimmed]) {
        return text.replace(trimmed, DICT[trimmed]);
      }

      let res = text;

      // 2. Dynamic numeric & recurring patterns
      res = res.replace(/(\d+)\s*متجر/g, '$1 Stores');
      res = res.replace(/(\d+)\s*متاجر/g, '$1 Stores');
      res = res.replace(/\((\d+)\s*تقييم\)/g, '($1 reviews)');
      res = res.replace(/•\s*(\d+)\s*مراجعة/g, '• $1 reviews');
      res = res.replace(/خصم\s*(\d+)%/g, '$1% OFF');
      res = res.replace(/([0-9,]+)\s*ر\.ي/g, '$1 YER');

      // 3. Longest-phrase matching for compound sentences & descriptions
      for (const key of SORTED_AR_KEYS) {
        if (key.length >= 3 && res.includes(key)) {
          res = res.split(key).join(DICT[key]);
        }
      }
      return res;
    } else {
      const lower = trimmed.toLowerCase();
      if (REVERSE_DICT[lower]) {
        return text.replace(trimmed, REVERSE_DICT[lower]);
      }
    }
    return text;
  }

  function translateDOM(node, isEn) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.nodeValue;
      if (original && original.trim().length > 0) {
        if (!node._ghaymOriginal && /[\u0600-\u06FF]/.test(original)) {
          node._ghaymOriginal = original;
        }

        if (isEn && node._ghaymOriginal) {
          const translated = translateText(node._ghaymOriginal, true);
          if (translated !== node.nodeValue) {
            node.nodeValue = translated;
          }
        } else if (!isEn && node._ghaymOriginal) {
          node.nodeValue = node._ghaymOriginal;
        }
      }
      return;
    }

    const tag = node.tagName ? node.tagName.toLowerCase() : '';
    if (['script', 'style', 'code', 'pre'].includes(tag) || 
        node.classList?.contains('material-symbols-outlined') || 
        node.classList?.contains('fa-solid') || 
        node.classList?.contains('fa-regular') ||
        node.classList?.contains('fa-brands')) {
      return;
    }

    for (let child of node.childNodes) {
      translateDOM(child, isEn);
    }
  }

  function translateAttributes(isEn) {
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
      if (!input._ghaymOriginalPlaceholder) {
        input._ghaymOriginalPlaceholder = input.getAttribute('placeholder');
      }
      const orig = input._ghaymOriginalPlaceholder;
      if (isEn) {
        if (orig && (orig.includes('ابحث') || orig.includes('بحث'))) {
          input.setAttribute('placeholder', 'Search products, stores, or gifts in Mukalla...');
        } else if (orig && DICT[orig.trim()]) {
          input.setAttribute('placeholder', DICT[orig.trim()]);
        }
      } else {
        input.setAttribute('placeholder', orig);
      }
    });
  }

  function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
  }

  // Unified Role-Based Auth & Access Control
  const Auth = {
    getUser: function() {
      const u = localStorage.getItem('ghaym_user');
      return u ? JSON.parse(u) : null;
    },
    login: function(identifier, role = 'customer', extra = {}) {
      const userObj = {
        identifier: identifier,
        name: extra.name || identifier.split('@')[0],
        role: role, // 'customer', 'merchant', 'admin', 'driver'
        storeId: extra.storeId || (role === 'merchant' ? 'store_nafahat' : null),
        storeName: extra.storeName || (role === 'merchant' ? 'متجر نفحات حضرموت' : null),
        driverId: extra.driverId || (role === 'driver' ? 'driver_mukalla_01' : null),
        loginAt: Date.now()
      };
      localStorage.setItem('ghaym_user', JSON.stringify(userObj));
      return userObj;
    },
    logout: function() {
      localStorage.removeItem('ghaym_user');
      window.location.href = 'index.html';
    },
    checkAccess: function(requiredRole, redirectOnFail = true) {
      const user = Auth.getUser();
      if (!user) {
        if (redirectOnFail) {
          alert('عذراً، يجب تسجيل الدخول للوصول إلى هذه الصفحة.');
          window.location.href = 'index.html';
        }
        return false;
      }
      if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
        if (redirectOnFail) {
          alert(`عذراً، هذه الصفحة مخصصة لصلاحية (${requiredRole}) فقط. حسابك الحالي هو (${user.role}).`);
          window.location.href = 'index.html';
        }
        return false;
      }
      return true;
    }
  };

  // Smart Global Click Handler to ensure NO button or link is unresponsive
  function setupInteractiveDelegation() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (!href || href === '#' || href === 'javascript:void(0);' || href === 'javascript:void(0)') {
          e.preventDefault();
          const txt = anchor.textContent.trim();
          if (anchor.getAttribute('onclick')) return; // already handled
          if (txt.includes('شروط') || txt.includes('الشروط')) {
            if (typeof navigateTo === 'function') navigateTo('terms');
          } else if (txt.includes('خصوصية') || txt.includes('الخصوصية')) {
            if (typeof navigateTo === 'function') navigateTo('privacy');
          } else if (txt.includes('من نحن') || txt.includes('عن غيم')) {
            if (typeof navigateTo === 'function') navigateTo('about');
          } else if (txt.includes('تواصل') || txt.includes('اتصل')) {
            if (typeof navigateTo === 'function') navigateTo('contact');
          } else if (txt.includes('مساعدة') || txt.includes('الدعم')) {
            if (typeof showNotification === 'function') showNotification('خدمة العملاء والدعم الفني في المكلا متاحة 24/7 عبر واتساب: 773058707');
          } else if (txt.includes('المتجر') || txt.includes('زيارة')) {
            if (typeof navigateTo === 'function') navigateTo('store');
          } else if (txt.includes('طلب') || txt.includes('الطلبات')) {
            if (typeof navigateTo === 'function') navigateTo('my-orders');
          }
        }
      }

      const button = e.target.closest('button');
      if (button && !button.getAttribute('onclick') && button.type !== 'submit') {
        const txt = button.textContent.trim();
        const icon = button.querySelector('.material-symbols-outlined, i')?.textContent || '';
        
        if (txt.includes('تصدير') || icon.includes('download')) {
          e.preventDefault();
          alert('جاري تجهيز وتصدير ملف البيانات بصيغة CSV...');
        } else if (txt.includes('تصفية') || icon.includes('filter')) {
          e.preventDefault();
          alert('تم تطبيق معايير التصفية المحددة.');
        } else if (txt.includes('إلغاء') || txt.includes('إغلاق')) {
          e.preventDefault();
          const modal = button.closest('.modal, [role="dialog"], .fixed');
          if (modal) modal.classList.add('hidden');
        } else if (txt.includes('مشاركة') || icon.includes('share')) {
          e.preventDefault();
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            if (typeof showNotification === 'function') showNotification('تم نسخ رابط الصفحة بنجاح!');
          }
        }
      }
    });
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    setupInteractiveDelegation();
  });

  window.toggleLang = toggleLanguage;
  window.GhaymI18n = {
    getLang: () => currentLang,
    toggleLang: toggleLanguage,
    applyLanguage: applyLanguage,
    t: (key) => DICT[key] || key
  };
  window.GhaymAuth = Auth;
})();
