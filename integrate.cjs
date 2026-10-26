const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const stitchDir = path.join(baseDir, 'stitch_screens');
const indexPath = path.join(baseDir, 'index.html');

function getMainContent(patternPrefix) {
  const files = fs.readdirSync(stitchDir);
  const matched = files.find(f => f.startsWith(patternPrefix) && f.endsWith('.html'));
  if (!matched) {
    console.error(`Not found: ${patternPrefix}`);
    return '';
  }
  const content = fs.readFileSync(path.join(stitchDir, matched), 'utf8');
  const m = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return m ? m[1] : '';
}

const pageProduct      = getMainContent('01_10');
const pageStore        = getMainContent('02_9');
const pageStoresList   = getMainContent('03_8');
const pageWishlist     = getMainContent('04_11');
const pageCart         = getMainContent('05_12');
const pageMyOrders     = getMainContent('06_14');
const pageCheckout     = getMainContent('07_13');
const pageOrderDetails = getMainContent('09_15');
const pageProfile      = getMainContent('10_16');
const pageVendorReg2   = getMainContent('11_18');
const pageVendorReg1   = getMainContent('12_17');

console.log('Product len:', pageProduct.length);
console.log('Store len:', pageStore.length);
console.log('StoresList len:', pageStoresList.length);
console.log('Wishlist len:', pageWishlist.length);
console.log('Cart len:', pageCart.length);
console.log('MyOrders len:', pageMyOrders.length);
console.log('Checkout len:', pageCheckout.length);
console.log('OrderDetails len:', pageOrderDetails.length);
console.log('Profile len:', pageProfile.length);
console.log('VendorReg2 len:', pageVendorReg2.length);
console.log('VendorReg1 len:', pageVendorReg1.length);

let indexContent = fs.readFileSync(indexPath, 'utf8');

// 1. Google Fonts / Material Symbols
if (!indexContent.includes('Material+Symbols+Outlined')) {
  const fontSnippet = `  <!-- Google Material Symbols Outlined -->
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <!-- Google Fonts: Cairo -->`;
  indexContent = indexContent.replace('<!-- Google Fonts: Cairo -->', fontSnippet);
}

// 2. Extra styling
if (!indexContent.includes('.size-badge.active')) {
  const extraStyles = `
    .size-badge.active {
      border-color: #54B9F2 !important;
      background-color: #EBF8FF !important;
      color: #172A46 !important;
      font-weight: 700;
      box-shadow: 0 0 0 1px #54B9F2;
    }
    .thumb-btn.active {
      border-color: #54B9F2 !important;
      opacity: 1 !important;
    }
    .tab-item.active {
      color: #54B9F2 !important;
      border-bottom-color: #54B9F2 !important;
      font-weight: 700;
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    .material-symbols-fill {
      font-variation-settings: 'FILL' 1;
    }
`;
  indexContent = indexContent.replace('    .otp-input:focus {', extraStyles + '\n    .otp-input:focus {');
}

// 3. Update top banner
const oldVendorLink = '<a class="text-brand-gold hover:underline font-semibold cursor-pointer" onclick="navigateTo(\'register\')">سجّل كمتجر أو أسرة منتجة</a>';
const newVendorLink = '<a class="text-brand-gold hover:underline font-semibold cursor-pointer" onclick="navigateTo(\'vendor-reg-1\')">سجّل كمتجر أو أسرة منتجة</a><span class="text-slate-400">|</span><a href="merchant_dashboard.html" class="text-brand-sky hover:underline font-bold inline-flex items-center gap-1"><i class="fa-solid fa-gauge-high"></i> لوحة تحكم التاجر</a>';
if (indexContent.includes(oldVendorLink)) {
  indexContent = indexContent.replace(oldVendorLink, newVendorLink);
}

// 4. Update Main Nav Links
const oldNav = `<nav class="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-600">
          <a class="nav-link hover:text-brand-sky transition cursor-pointer text-brand-navy" data-nav="home" onclick="navigateTo('home')">الرئيسية</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="categories" onclick="navigateTo('categories')">جميع الأقسام</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="search" onclick="navigateTo('search')">البحث والتصفية</a>
          <a class="hover:text-brand-sky transition cursor-pointer" onclick="filterCategoryHome('أسر منتجة وحلويات')">الأسر المنتجة</a>
          <a class="hover:text-brand-sky transition cursor-pointer" onclick="filterCategoryHome('عطور وبخور')">العطور الحضرمية</a>
        </nav>`;

const newNav = `<nav class="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-600">
          <a class="nav-link hover:text-brand-sky transition cursor-pointer text-brand-navy" data-nav="home" onclick="navigateTo('home')">الرئيسية</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="categories" onclick="navigateTo('categories')">الأقسام</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="stores-list" onclick="navigateTo('stores-list')">المتاجر</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="search" onclick="navigateTo('search')">البحث</a>
          <a class="nav-link hover:text-brand-sky transition cursor-pointer" data-nav="my-orders" onclick="navigateTo('my-orders')">طلباتي</a>
          <a href="merchant_dashboard.html" target="_blank" class="px-3 py-1.5 rounded-xl bg-brand-navy/5 hover:bg-brand-sky hover:text-white text-brand-navy text-xs transition flex items-center gap-1.5 border border-brand-navy/10">
            <i class="fa-solid fa-store text-brand-sky group-hover:text-white"></i>
            <span>لوحة التاجر</span>
          </a>
        </nav>`;

if (indexContent.includes(oldNav)) {
  indexContent = indexContent.replace(oldNav, newNav);
}

// 5. Update Action buttons (Wishlist, Cart, Profile)
indexContent = indexContent.replace(
  `onclick="showNotification('تمت إضافة المنتجات لقائمة المفضلة')"`,
  `onclick="navigateTo('wishlist')"`
);

indexContent = indexContent.replace(
  `onclick="showNotification('سلة المشتريات: 4 منتجات بقيمة 31,500 ر.ي')"`,
  `onclick="navigateTo('cart')"`
);

indexContent = indexContent.replace(
  `onclick="navigateTo('login')" class="bg-brand-navy text-white hover:bg-brand-darkBlue px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"`,
  `onclick="navigateTo(state.user ? 'profile' : 'login')" class="bg-brand-navy text-white hover:bg-brand-darkBlue px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition cursor-pointer"`
);

// 6. Connect links inside each screen
// Replace href="#" on links with appropriate navigateTo()
function linkify(html) {
  let res = html;
  res = res.replace(/href=["']#["']/g, 'href="javascript:void(0)"');
  res = res.replace(/onclick=["']navigateTo\('store'\)["']/g, `onclick="navigateTo('store')"`);
  return res;
}

// Build the new screen sections
const newScreens = `
    <!-- ============================================================== -->
    <!-- 8. PAGE: PRODUCT DETAILS (تفاصيل المنتج)                         -->
    <!-- ============================================================== -->
    <div id="page-product" class="app-page">
      ${linkify(pageProduct)}
    </div>

    <!-- ============================================================== -->
    <!-- 9. PAGE: STORE PROFILE (صفحة المتجر)                            -->
    <!-- ============================================================== -->
    <div id="page-store" class="app-page">
      ${linkify(pageStore)}
    </div>

    <!-- ============================================================== -->
    <!-- 10. PAGE: STORES LIST (قائمة المتاجر)                          -->
    <!-- ============================================================== -->
    <div id="page-stores-list" class="app-page">
      ${linkify(pageStoresList)}
    </div>

    <!-- ============================================================== -->
    <!-- 11. PAGE: WISHLIST (المفضلة)                                   -->
    <!-- ============================================================== -->
    <div id="page-wishlist" class="app-page">
      ${linkify(pageWishlist)}
    </div>

    <!-- ============================================================== -->
    <!-- 12. PAGE: CART (السلة)                                         -->
    <!-- ============================================================== -->
    <div id="page-cart" class="app-page">
      ${linkify(pageCart)}
    </div>

    <!-- ============================================================== -->
    <!-- 13. PAGE: MY ORDERS (طلباتي)                                   -->
    <!-- ============================================================== -->
    <div id="page-my-orders" class="app-page">
      ${linkify(pageMyOrders)}
    </div>

    <!-- ============================================================== -->
    <!-- 14. PAGE: CHECKOUT (إتمام الطلب)                               -->
    <!-- ============================================================== -->
    <div id="page-checkout" class="app-page">
      ${linkify(pageCheckout)}
    </div>

    <!-- ============================================================== -->
    <!-- 15. PAGE: ORDER DETAILS & TRACKING (تفاصيل الطلب وتتبع حالته)  -->
    <!-- ============================================================== -->
    <div id="page-order-details" class="app-page">
      ${linkify(pageOrderDetails)}
    </div>

    <!-- ============================================================== -->
    <!-- 16. PAGE: CUSTOMER PROFILE (حساب العميل)                       -->
    <!-- ============================================================== -->
    <div id="page-profile" class="app-page">
      ${linkify(pageProfile)}
    </div>

    <!-- ============================================================== -->
    <!-- 17. PAGE: VENDOR REGISTRATION STEP 1 (تسجيل التاجر)            -->
    <!-- ============================================================== -->
    <div id="page-vendor-reg-1" class="app-page">
      ${linkify(pageVendorReg1)}
    </div>

    <!-- ============================================================== -->
    <!-- 18. PAGE: VENDOR REGISTRATION STEP 2 (بيانات المتجر وموقعه)     -->
    <!-- ============================================================== -->
    <div id="page-vendor-reg-2" class="app-page">
      ${linkify(pageVendorReg2)}
    </div>
`;

// Insert before the closing container div before footer
const footerIdx = indexContent.indexOf('<!-- ==================== MAIN SITE FOOTER');
if (footerIdx !== -1) {
  const containerDivCloseIdx = indexContent.lastIndexOf('</div>', footerIdx);
  if (containerDivCloseIdx !== -1) {
    indexContent = indexContent.substring(0, containerDivCloseIdx) + newScreens + '\n  </div>\n\n  ' + indexContent.substring(footerIdx);
  }
}

// 7. Interactive Helpers and Router
const scriptHelpers = `
    // --- Interactive handlers for Product Details & New Screens ---
    function changeThumbnail(btnElement, newImageUrl) {
      const mainImg = document.getElementById('main-product-image');
      if (mainImg) { mainImg.src = newImageUrl; }
      document.querySelectorAll('.thumb-btn').forEach(btn => {
        btn.classList.remove('active', 'border-brand-sky');
        btn.classList.add('opacity-60', 'border-transparent');
      });
      btnElement.classList.add('active', 'border-brand-sky');
      btnElement.classList.remove('opacity-60', 'border-transparent');
    }

    function selectSize(badgeElement, price, sizeLabel) {
      document.querySelectorAll('.size-badge').forEach(badge => {
        badge.classList.remove('active');
        badge.classList.add('bg-white', 'border-slate-200');
      });
      badgeElement.classList.add('active');
      badgeElement.classList.remove('bg-white', 'border-slate-200');
      const priceElem = document.getElementById('product-price');
      if (priceElem) { priceElem.textContent = price.toLocaleString(); }
    }

    function updateQuantity(delta) {
      const counter = document.getElementById('qty-counter');
      if (counter) {
        let val = parseInt(counter.textContent) || 1;
        val = Math.max(1, val + delta);
        counter.textContent = val;
      }
    }

    function switchTab(btn, tabId) {
      document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
      const activePane = document.getElementById(tabId);
      if (activePane) activePane.classList.remove('hidden');
    }

    // Connect clicks across screens
    document.addEventListener('DOMContentLoaded', () => {
      // Connect product cards across home and search to product details page
      document.querySelectorAll('.product-card-hover, #searchResultsGrid article').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          if (!e.target.closest('button') && !e.target.closest('a')) {
            navigateTo('product');
          }
        });
      });

      // Cart checkout button -> checkout page
      document.querySelectorAll('#page-cart button, #page-cart a').forEach(btn => {
        if (btn.textContent && (btn.textContent.includes('إتمام الطلب') || btn.textContent.includes('متابعة الشراء'))) {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('checkout');
          });
        }
      });

      // Checkout place order -> order details tracking
      document.querySelectorAll('#page-checkout button').forEach(btn => {
        if (btn.textContent && (btn.textContent.includes('تأكيد الطلب') || btn.textContent.includes('إتمام'))) {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('تم تأكيد طلبك بنجاح وجاري تحضيره في المكلا!');
            setTimeout(() => navigateTo('order-details'), 800);
          });
        }
      });

      // Vendor registration step 1 -> step 2
      document.querySelectorAll('#page-vendor-reg-1 button').forEach(btn => {
        if (btn.textContent && btn.textContent.includes('متابعة')) {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('vendor-reg-2');
          });
        }
      });

      // Vendor registration step 2 submit -> merchant dashboard
      document.querySelectorAll('#page-vendor-reg-2 button').forEach(btn => {
        if (btn.textContent && btn.textContent.includes('إرسال')) {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('تم تسجيل متجرك بنجاح! جاري تحويلك إلى لوحة التحكم...');
            setTimeout(() => {
              window.location.href = 'merchant_dashboard.html';
            }, 1200);
          });
        }
      });

      // Connect any Store click -> store page
      document.querySelectorAll('[data-purpose="store-card"], .store-link').forEach(el => {
        el.addEventListener('click', (e) => {
          if (!e.target.closest('button')) navigateTo('store');
        });
      });
    });
`;

indexContent = indexContent.replace(
  '    // Global Enter key for search',
  scriptHelpers + '\n    // Global Enter key for search'
);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Successfully integrated all Stitch screens into index.html!');
