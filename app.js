/**
 * Classy Drip - Premium Storefront JavaScript
 * Handles cart management, catalog filters, detail pages, and checkout flows.
 */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  // Men's Products
  {
    id: 1,
    name: "Classy Drip Signature Black Tee",
    price: 790,
    oldPrice: 1050,
    category: "Men",
    type: "T-Shirt",
    image: "assets/black-tshirt.png",
    images: ["assets/black-tshirt.png", "assets/logo.jpg"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description: "Crafted from 100% premium heavy combed cotton (220 GSM). Featuring the luxury C.D. monogram with a gold-threaded royal crown embroidered on the left chest. Bio-washed for ultimate softness and pre-shrunk for an enduring classic fit.",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Classy Drip Signature White Tee",
    price: 790,
    oldPrice: 1050,
    category: "Men",
    type: "T-Shirt",
    image: "assets/white-tshirt.png",
    images: ["assets/white-tshirt.png", "assets/logo.jpg"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium heavy-weight white tee tailored with custom-knit ribbing. Displays the iconic black-embroidered crown monogram. Seamless side tailoring offers a comfortable structure for streetwear layering.",
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Classy Drip Streetwear Set (Men)",
    price: 2490,
    oldPrice: 3200,
    category: "Men",
    type: "Premium Sets",
    image: "assets/hero.png",
    images: ["assets/hero.png", "assets/black-tshirt.png"],
    sizes: ["M", "L", "XL"],
    description: "A complete limited-edition streetwear suit. Includes the premium matching crew neck drop-shoulder hoodie and relaxed utility trousers. Designed for comfort, warmth, and high-fashion aesthetics.",
    badge: "Limited Edition"
  },
  {
    id: 5,
    name: "Minimalist Oversized Tee",
    price: 890,
    oldPrice: 1200,
    category: "Men",
    type: "T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    description: "Drop-shoulder relaxed fit streetwear essential. Cut from heavy 240 GSM organic cotton. Extremely durable, minimalist, and styled with subtle label tags.",
    badge: "Trending"
  },
  {
    id: 7,
    name: "Premium Black Bomber Jacket",
    price: 2990,
    oldPrice: 3500,
    category: "Men",
    type: "Jacket",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"],
    sizes: ["M", "L", "XL"],
    description: "Luxury bomber jacket for the modern street aesthetic. Lightweight, waterproof exterior with premium inner lining.",
    badge: "Hot"
  },
  {
    id: 8,
    name: "Classic Urban Cargo Pants",
    price: 1890,
    oldPrice: 2200,
    category: "Men",
    type: "Pants",
    image: "https://images.unsplash.com/photo-1624378440846-51d02c842fb0?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1624378440846-51d02c842fb0?w=600&q=80"],
    sizes: ["M", "L", "XL"],
    description: "Utilitarian cargo pants crafted from durable premium twill. Features 6 robust pockets and adjustable ankle cuffs.",
    badge: ""
  },
  {
    id: 9,
    name: "Essential Grey Hoodie",
    price: 1490,
    oldPrice: 1800,
    category: "Men",
    type: "Sweatshirt",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"],
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight fleece hoodie in versatile ash grey. Ribbed cuffs, kangaroo pocket, and double-lined hood.",
    badge: "Basic"
  },
  {
    id: 10,
    name: "Distressed Denim Jacket",
    price: 3290,
    oldPrice: 4000,
    category: "Men",
    type: "Jacket",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&q=80"],
    sizes: ["M", "L", "XL"],
    description: "Vintage washed denim with custom hardware and subtle distressing. An enduring streetwear staple.",
    badge: ""
  },
  {
    id: 11,
    name: "Graphic Street Tee",
    price: 950,
    oldPrice: 1300,
    category: "Men",
    type: "T-Shirt",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Bold back graphic printed on 240 GSM cotton. Ribbed neck and relaxed fit.",
    badge: ""
  },
  {
    id: 12,
    name: "Textured Knit Polo",
    price: 1290,
    oldPrice: 1600,
    category: "Men",
    type: "Polo",
    image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=600&q=80"],
    sizes: ["M", "L", "XL"],
    description: "Elevated knitwear for a smart casual streetwear look. Breathable, structured, and minimal.",
    badge: "New"
  },

  // Women's Products
  {
    id: 4,
    name: "Classy Drip Streetwear Set (Women)",
    price: 2290,
    oldPrice: 3000,
    category: "Women",
    type: "Premium Sets",
    image: "assets/hero2.png",
    images: ["assets/hero2.png", "assets/white-tshirt.png"],
    sizes: ["S", "M", "L"],
    description: "Curated women's high-fashion set containing an oversized luxury hoodie and slim cargo pants. Engineered from premium French terry fabric. Embroidered crown accents.",
    badge: "Sale"
  },
  {
    id: 6,
    name: "Classy Drip Classic Crewneck Sweatshirt",
    price: 1290,
    oldPrice: 1750,
    category: "Women",
    type: "Sweatshirt",
    image: "assets/hero3.png",
    images: ["assets/hero3.png", "assets/logo.jpg"],
    sizes: ["S", "M", "L", "XL"],
    description: "Elegant fleece-lined crewneck sweatshirt in soft cream white. Minimal branding with our signature crown motif. Ideal for cozy evenings or classy travel outfits.",
    badge: ""
  },
  {
    id: 13,
    name: "Cropped Utility Jacket",
    price: 2490,
    oldPrice: 3000,
    category: "Women",
    type: "Jacket",
    image: "https://images.unsplash.com/photo-1550614000-4b95d4edaa22?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1550614000-4b95d4edaa22?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Boxy fit cropped jacket with utility pockets and durable zipper hardware.",
    badge: "Trending"
  },
  {
    id: 14,
    name: "Ribbed Knit Tank",
    price: 690,
    oldPrice: 900,
    category: "Women",
    type: "Top",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Form-fitting ribbed tank top, perfect for layering or summer streetwear.",
    badge: "Basic"
  },
  {
    id: 15,
    name: "Oversized Vintage Wash Tee",
    price: 890,
    oldPrice: 1100,
    category: "Women",
    type: "T-Shirt",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Relaxed vintage wash tee with dropped shoulders. Premium heavy cotton.",
    badge: ""
  },
  {
    id: 16,
    name: "High-Waist Parachute Pants",
    price: 1790,
    oldPrice: 2100,
    category: "Women",
    type: "Pants",
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Lightweight parachute pants with adjustable toggles and a relaxed fit.",
    badge: "Hot"
  },
  {
    id: 17,
    name: "Seamless Bike Shorts",
    price: 850,
    oldPrice: 1200,
    category: "Women",
    type: "Bottoms",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "High-waisted seamless shorts for an athletic streetwear vibe.",
    badge: ""
  },
  {
    id: 18,
    name: "Zip-Up Fleece Hoodie",
    price: 1690,
    oldPrice: 2000,
    category: "Women",
    type: "Sweatshirt",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Cozy zip-up hoodie in soft fleece fabric. Perfect for effortless styling.",
    badge: "New Arrival"
  },
  {
    id: 19,
    name: "Satin Cargo Skirt",
    price: 1590,
    oldPrice: 1900,
    category: "Women",
    type: "Bottoms",
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Midi length cargo skirt crafted from premium matte satin.",
    badge: ""
  },
  {
    id: 20,
    name: "Premium Mesh Top",
    price: 990,
    oldPrice: 1400,
    category: "Women",
    type: "Top",
    image: "https://images.unsplash.com/photo-1434389670869-c8c8c724bbd1?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1434389670869-c8c8c724bbd1?w=600&q=80"],
    sizes: ["S", "M", "L"],
    description: "Long-sleeve mesh top with abstract print. A bold statement piece.",
    badge: "Limited"
  }
];

// 2. CART LIFECYCLE MANAGEMENT
let cart = JSON.parse(localStorage.getItem("classy_drip_cart")) || [];

function saveCart() {
  localStorage.setItem("classy_drip_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, size, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Check if item with same ID and Size already in cart
  const existingItemIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  openCartDrawer();
}

function updateCartQuantity(productId, size, quantity) {
  const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = quantity;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart();
  }
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart();
}

// 3. UI STATE HANDLING (CART DRAWER & HEADER)
document.addEventListener("DOMContentLoaded", () => {
  setupHeaderScroll();
  setupCartDrawer();
  initMobileMenu();
  updateCartUI();
  
  // Page specific initializations
  const path = window.location.pathname;
  if (path.includes("shop.html")) {
    initShopPage();
  } else if (path.includes("product.html")) {
    initProductDetailPage();
  } else if (path.includes("checkout.html")) {
    initCheckoutPage();
  } else {
    // Default Home Page
    initHomePage();
  }
});

function setupHeaderScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  const isHome = !window.location.pathname.includes("shop.html") && 
                 !window.location.pathname.includes("product.html") && 
                 !window.location.pathname.includes("checkout.html");

  if (isHome) {
    header.classList.add("transparent");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        header.classList.remove("transparent");
        header.classList.add("scrolled");
      } else {
        header.classList.add("transparent");
        header.classList.remove("scrolled");
      }
    });
  } else {
    header.classList.add("scrolled");
  }
}

function setupCartDrawer() {
  const overlay = document.getElementById("cartOverlay");
  const drawer = document.getElementById("cartDrawer");
  const openBtns = document.querySelectorAll(".btn-open-cart");
  const closeBtn = document.getElementById("closeCart");

  if (!overlay || !drawer) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeCartDrawer);
  }

  overlay.addEventListener("click", closeCartDrawer);
}

function openCartDrawer() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeCartDrawer() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartDrawer").classList.remove("open");
  document.body.style.overflow = ""; // Enable background scroll
}

function updateCartUI() {
  const cartBadge = document.getElementById("cartCount");
  const cartContainer = document.getElementById("cartItems");
  const cartSubtotal = document.getElementById("cartSubtotal");

  if (cartBadge) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
  }

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty-message">
        <p style="font-size: 16px; margin-bottom: 20px;">Your shopping bag is empty.</p>
        <a href="shop.html" class="hero-btn" style="background-color:#000; color:#fff; display:inline-block; border-color:#000; padding: 12px 24px;">Shop Now</a>
      </div>
    `;
    if (cartSubtotal) cartSubtotal.textContent = "0 Tk";
    return;
  }

  let subtotal = 0;
  cartContainer.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;
    const prod = PRODUCTS.find(p => p.id === item.id) || item;
    
    // Size options for selector
    const sizeOptionsHTML = prod.sizes ? prod.sizes.map(s => 
      `<option value="${s}" ${s === item.size ? 'selected' : ''}>Size ${s}</option>`
    ).join('') : `<option value="${item.size}">${item.size}</option>`;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <div class="cart-item-price-row">
            <span class="cart-item-price">${item.price} Tk</span>
          </div>
          
          <!-- Size Selector inside cart -->
          <select class="cart-item-size-selector" onchange="changeCartItemSize(${item.id}, '${item.size}', this.value)">
            ${sizeOptionsHTML}
          </select>
          
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="adjustCartQty(${item.id}, '${item.size}', -1)">-</button>
            <input type="text" class="cart-qty-input" value="${item.quantity}" readonly>
            <button class="cart-qty-btn" onclick="adjustCartQty(${item.id}, '${item.size}', 1)">+</button>
          </div>
          
          <!-- Unique Add Another Size Button -->
          <button class="btn-add-another-size" onclick="addAnotherSize(${item.id})">
            + Add another Size
          </button>
        </div>
        
        <button class="cart-item-remove" onclick="removeCartItem(${item.id}, '${item.size}')">×</button>
      </div>
    `;
  }).join("");

  if (cartSubtotal) {
    cartSubtotal.textContent = `${subtotal} Tk`;
  }
}

// Helpers called from window scopes (required for inline HTML onclick handlers)
window.adjustCartQty = (id, size, delta) => {
  const item = cart.find(i => i.id === id && i.size === size);
  if (item) {
    updateCartQuantity(id, size, item.quantity + delta);
  }
};

window.removeCartItem = (id, size) => {
  removeFromCart(id, size);
};

window.changeCartItemSize = (id, oldSize, newSize) => {
  // If user changes size, merge into existing or update
  const oldItem = cart.find(i => i.id === id && i.size === oldSize);
  if (!oldItem) return;

  const existingItemIndex = cart.findIndex(i => i.id === id && i.size === newSize);
  
  if (existingItemIndex > -1 && oldSize !== newSize) {
    // Merge quantity if same item size exists
    cart[existingItemIndex].quantity += oldItem.quantity;
    cart = cart.filter(i => !(i.id === id && i.size === oldSize));
  } else {
    // Just rename the size
    oldItem.size = newSize;
  }
  saveCart();
};

window.addAnotherSize = (id) => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  
  // Prompt user or automatically add first available size that isn't already in cart
  const currentSizesInCart = cart.filter(i => i.id === id).map(i => i.size);
  const nextAvailableSize = product.sizes.find(s => !currentSizesInCart.includes(s));
  
  if (nextAvailableSize) {
    addToCart(id, nextAvailableSize, 1);
  } else {
    // All sizes are already in the cart, add the standard Medium or default
    addToCart(id, product.sizes[0], 1);
  }
};

window.quickAddProduct = (id) => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  // Default to M size for quick add
  const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0];
  addToCart(product.id, defaultSize, 1);
};

// 4. PAGE INITIALIZERS

// --- HERO SLIDER ---
let currentSlide = 0;
let sliderInterval = null;
const SLIDE_COUNT = 3;

function initHeroSlider() {
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (!document.getElementById("slide0")) return;

  function goToSlide(index) {
    // Clamp
    if (index < 0) index = SLIDE_COUNT - 1;
    if (index >= SLIDE_COUNT) index = 0;

    document.getElementById(`slide${currentSlide}`).classList.remove("active");
    dots[currentSlide]?.classList.remove("active");

    currentSlide = index;

    document.getElementById(`slide${currentSlide}`).classList.add("active");
    dots[currentSlide]?.classList.add("active");
  }

  // Dot clicks
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(sliderInterval);
      goToSlide(parseInt(dot.dataset.index));
      sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  });

  // Arrow clicks
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(sliderInterval);
      goToSlide(currentSlide - 1);
      sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(sliderInterval);
      goToSlide(currentSlide + 1);
      sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  }

  // Touch swipe support
  let touchStartX = 0;
  const slider = document.getElementById("heroSlider");
  if (slider) {
    slider.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        clearInterval(sliderInterval);
        goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
        sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
      }
    });
  }

  // Auto-play
  sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

// --- MOBILE HAMBURGER MENU ---
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const overlay = document.getElementById("mobileNavOverlay");
  const drawer = document.getElementById("mobileNavDrawer");
  const closeBtn = document.getElementById("mobileNavClose");

  function openMenu() {
    hamburgerBtn?.classList.add("open");
    overlay?.classList.add("open");
    drawer?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburgerBtn?.classList.remove("open");
    overlay?.classList.remove("open");
    drawer?.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburgerBtn?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
}

// --- HOMEPAGE ---
function initHomePage() {
  // Featured Products (first 4)
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS.slice(0, 4).map(p => renderProductCard(p)).join("");
  }

  // More to Explore (last 2)
  const moreGrid = document.getElementById("moreGrid");
  if (moreGrid) {
    moreGrid.innerHTML = PRODUCTS.slice(4).map(p => renderProductCard(p)).join("");
  }

  initHeroSlider();
  initMobileMenu();
}

// --- SHOP / CATALOG PAGE ---
let activeFilters = {
  categories: [],
  types: [],
  priceMin: 0,
  priceMax: 3000,
  sizes: []
};

function initShopPage() {
  const catalogGrid = document.getElementById("catalogGrid");
  const filterInputs = document.querySelectorAll(".filter-checkbox");
  const sizeInputs = document.querySelectorAll(".size-pill-checkbox");
  const priceMinInput = document.getElementById("priceMin");
  const priceMaxInput = document.getElementById("priceMax");

  // Collapsible sidebar on mobile
  const sidebar = document.querySelector(".shop-sidebar");
  if (sidebar) {
    sidebar.addEventListener("click", (e) => {
      if (window.innerWidth <= 992 && !e.target.closest(".filter-section, .filter-checkbox, .size-pill-checkbox, .price-input")) {
        sidebar.classList.toggle("open");
      }
    });
    // Ensure filter clicks don't close the sidebar
    sidebar.querySelectorAll(".filter-checkbox, .size-pill-checkbox, .price-input").forEach(el => {
      el.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  // Render original list
  filterCatalog();

  // Attach search bar listener
  const searchBar = document.getElementById("catalogSearch");
  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      filterCatalog(e.target.value);
    });
  }

  // Hook filters
  filterInputs.forEach(input => {
    input.addEventListener("change", () => {
      const type = input.dataset.filterType;
      const val = input.value;
      if (input.checked) {
        activeFilters[type].push(val);
      } else {
        activeFilters[type] = activeFilters[type].filter(v => v !== val);
      }
      filterCatalog();
    });
  });

  sizeInputs.forEach(input => {
    input.addEventListener("change", () => {
      const val = input.value;
      if (input.checked) {
        activeFilters.sizes.push(val);
      } else {
        activeFilters.sizes = activeFilters.sizes.filter(v => v !== val);
      }
      filterCatalog();
    });
  });

  if (priceMinInput && priceMaxInput) {
    [priceMinInput, priceMaxInput].forEach(input => {
      input.addEventListener("input", () => {
        activeFilters.priceMin = parseInt(priceMinInput.value) || 0;
        activeFilters.priceMax = parseInt(priceMaxInput.value) || 3000;
        filterCatalog();
      });
    });
  }
}

function filterCatalog(searchQuery = "") {
  const catalogGrid = document.getElementById("catalogGrid");
  if (!catalogGrid) return;

  let filtered = PRODUCTS.filter(prod => {
    // Category match
    if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(prod.category)) {
      return false;
    }
    // Type match
    if (activeFilters.types.length > 0 && !activeFilters.types.includes(prod.type)) {
      return false;
    }
    // Price match
    if (prod.price < activeFilters.priceMin || prod.price > activeFilters.priceMax) {
      return false;
    }
    // Size match
    if (activeFilters.sizes.length > 0) {
      const hasSize = prod.sizes.some(s => activeFilters.sizes.includes(s));
      if (!hasSize) return false;
    }
    // Search query match
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = prod.name.toLowerCase().includes(query);
      const matchDesc = prod.description.toLowerCase().includes(query);
      if (!matchName && !matchDesc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--color-text-muted);">
        <p style="font-size: 18px;">No products found matching the criteria.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(prod => renderProductCard(prod)).join("");
}

function renderProductCard(prod) {
  const badgeHTML = prod.badge ? `<span class="product-badge">${prod.badge}</span>` : "";
  const oldPriceHTML = prod.oldPrice ? `<span class="product-price-old">${prod.oldPrice} Tk</span>` : "";
  
  return `
    <div class="product-card">
      <div class="product-img-container">
        ${badgeHTML}
        <a href="product.html?id=${prod.id}">
          <img src="${prod.image}" alt="${prod.name}" class="product-image">
        </a>
        <div class="product-actions">
          <button class="btn-quick-add" onclick="quickAddProduct(${prod.id})">Quick Add</button>
          <button class="btn-wishlist">♥</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${prod.category} • ${prod.type}</span>
        <h3 class="product-name"><a href="product.html?id=${prod.id}">${prod.name}</a></h3>
        <div class="product-price-row">
          <span class="product-price">${prod.price} Tk</span>
          ${oldPriceHTML}
        </div>
      </div>
    </div>
  `;
}

// --- PRODUCT DETAIL PAGE ---
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id")) || 1; // Fallback to product 1
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.getElementById("productDetailLayout").innerHTML = `<p style="grid-column:1/-1; text-align:center; padding: 100px 0;">Product not found.</p>`;
    return;
  }

  // Populate dynamic product details
  const mainImage = document.getElementById("mainProductImage");
  const thumbnailContainer = document.getElementById("productThumbnails");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productPriceOld = document.getElementById("productPriceOld");
  const productDescription = document.getElementById("productDescription");
  const sizeSelectorContainer = document.getElementById("sizeSelector");
  
  if (productName) productName.textContent = product.name;
  if (productPrice) productPrice.textContent = `${product.price} Tk`;
  if (productPriceOld) {
    if (product.oldPrice) {
      productPriceOld.textContent = `${product.oldPrice} Tk`;
    } else {
      productPriceOld.style.display = "none";
    }
  }
  if (productDescription) productDescription.textContent = product.description;

  if (mainImage) mainImage.src = product.image;

  // Render thumbnails
  if (thumbnailContainer && product.images) {
    thumbnailContainer.innerHTML = product.images.map((img, index) => 
      `<img src="${img}" alt="${product.name}" class="thumbnail-img ${index === 0 ? 'active' : ''}" onclick="changeDetailImage('${img}', this)">`
    ).join("");
  }

  // Render size selection buttons
  if (sizeSelectorContainer && product.sizes) {
    sizeSelectorContainer.innerHTML = product.sizes.map((size, index) => `
      <input type="radio" name="prod_size" id="size_${size}" value="${size}" class="size-pill-checkbox" ${index === 1 ? 'checked' : ''}>
      <label for="size_${size}" class="size-pill-label">${size}</label>
    `).join("");
  }

  // Set up Tabs
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const target = tab.dataset.tabTarget;
      document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");
    });
  });

  // Size chart units toggling
  const unitBtns = document.querySelectorAll(".unit-btn");
  unitBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      unitBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const unit = btn.dataset.unit;
      toggleSizeChartUnit(unit);
    });
  });

  // Add to cart click
  const addToCartBtn = document.getElementById("btnAddToCart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const checkedSize = document.querySelector('input[name="prod_size"]:checked');
      if (!checkedSize) {
        alert("Please select a size first.");
        return;
      }
      const quantity = parseInt(document.getElementById("qtyInput").value) || 1;
      addToCart(product.id, checkedSize.value, quantity);
    });
  }

  // Render Frequently Bought Together
  initFBT(product.id);
}

function initFBT(currentProductId) {
  const fbtLayout = document.getElementById("fbtLayout");
  if (!fbtLayout) return;

  // Pick 2 other products as FBT companions
  const companions = PRODUCTS.filter(p => p.id !== currentProductId).slice(0, 2);
  const currentProduct = PRODUCTS.find(p => p.id === currentProductId);
  if (!currentProduct || companions.length < 2) return;

  const allFBT = [currentProduct, ...companions];
  const totalPrice = allFBT.reduce((sum, p) => sum + p.price, 0);

  fbtLayout.innerHTML = `
    ${ allFBT.map((p, i) => `
      <div class="fbt-product-card">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" class="fbt-product-img">
        </a>
        <span class="fbt-product-name">${p.name}</span>
        <span class="fbt-product-price">${p.price} ৳</span>
      </div>
      ${ i < allFBT.length - 1 ? '<span class="fbt-plus">+</span>' : '' }
    `).join('') }
    <div class="fbt-summary-box">
      <div class="fbt-total-label">Bundle Total</div>
      <div class="fbt-total-price">${totalPrice} ৳</div>
      <button class="btn-fbt-add" onclick="addFBTToCart([${ allFBT.map(p => p.id).join(',') }])">
        Add All to Bag
      </button>
    </div>
  `;
}

window.addFBTToCart = (ids) => {
  ids.forEach(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (product) {
      const defaultSize = product.sizes.includes("M") ? "M" : product.sizes[0];
      addToCart(id, defaultSize, 1);
    }
  });
  // Only open cart once
  openCartDrawer();
};

window.changeDetailImage = (src, el) => {
  const mainImage = document.getElementById("mainProductImage");
  if (mainImage) mainImage.src = src;
  
  document.querySelectorAll(".thumbnail-img").forEach(thumb => {
    thumb.classList.remove("active");
  });
  el.classList.add("active");
};

window.adjustDetailQty = (delta) => {
  const qtyInput = document.getElementById("qtyInput");
  if (qtyInput) {
    let val = parseInt(qtyInput.value) || 1;
    val += delta;
    if (val < 1) val = 1;
    qtyInput.value = val;
  }
};

function toggleSizeChartUnit(unit) {
  const values = {
    inch: {
      s: ["38", "26", "7.5"],
      m: ["40", "27", "8"],
      l: ["42", "28", "8.5"],
      xl: ["44", "29", "9"],
      xxl: ["46", "30", "9.5"]
    },
    cm: {
      s: ["96.5", "66", "19"],
      m: ["101.6", "68.5", "20.3"],
      l: ["106.7", "71", "21.6"],
      xl: ["111.8", "73.7", "22.8"],
      xxl: ["116.8", "76.2", "24.1"]
    }
  };

  const rows = {
    S: document.getElementById("row_S"),
    M: document.getElementById("row_M"),
    L: document.getElementById("row_L"),
    XL: document.getElementById("row_XL"),
    "2XL": document.getElementById("row_2XL")
  };

  const targetData = values[unit];
  Object.keys(rows).forEach(size => {
    const row = rows[size];
    if (row) {
      const dataKey = size === "2XL" ? "xxl" : size.toLowerCase();
      const cells = row.querySelectorAll("td");
      cells[1].textContent = targetData[dataKey][0]; // Chest
      cells[2].textContent = targetData[dataKey][1]; // Length
      cells[3].textContent = targetData[dataKey][2]; // Sleeve
    }
  });
}

// --- CHECKOUT PAGE ---
function initCheckoutPage() {
  const summaryItems = document.getElementById("summaryItems");
  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryTotal = document.getElementById("summaryTotal");
  const checkoutForm = document.getElementById("checkoutForm");

  if (cart.length === 0) {
    alert("Your cart is empty. Redirecting to catalog.");
    window.location.href = "shop.html";
    return;
  }

  // Populate summary
  let subtotal = 0;
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => {
      subtotal += item.price * item.quantity;
      return `
        <div class="summary-item-row">
          <span class="summary-item-name">${item.name} (${item.size}) <strong style="font-weight:600;">x${item.quantity}</strong></span>
          <span style="font-weight:600;">${item.price * item.quantity} Tk</span>
        </div>
      `;
    }).join("");
  }

  const shippingCharge = 80; // Standard inside Dhaka shipping
  if (summarySubtotal) summarySubtotal.textContent = `${subtotal} Tk`;
  if (summaryTotal) summaryTotal.textContent = `${subtotal + shippingCharge} Tk`;

  // Payment method card clicking
  const paymentCards = document.querySelectorAll(".payment-method-card");
  paymentCards.forEach(card => {
    card.addEventListener("click", () => {
      paymentCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      const radio = card.querySelector(".payment-radio");
      if (radio) radio.checked = true;
    });
  });

  // Submit checkout order
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Perform simple validation
      const name = document.getElementById("fullName").value;
      const phone = document.getElementById("phoneNum").value;
      const address = document.getElementById("addressLine").value;
      const city = document.getElementById("citySelect").value;
      
      if (!name || !phone || !address || !city) {
        alert("Please fill in all the required shipping fields.");
        return;
      }

      // Successful order simulation
      cart = [];
      localStorage.removeItem("classy_drip_cart");
      
      // Render success page inside the main container
      const container = document.querySelector(".container.checkout-page-container");
      if (container) {
        container.innerHTML = `
          <div class="success-container">
            <div class="success-icon">✓</div>
            <h1 class="success-title">Order Confirmed</h1>
            <p class="success-text">Thank you, <strong>${name}</strong>! Your order has been successfully placed. We've sent an order confirmation details SMS to <strong>${phone}</strong>.</p>
            <p style="font-size:14px; margin-bottom: 24px; color:#555;">Estimated Delivery: 2-3 Business Days. Tracking Code: <strong>CD-${Math.floor(100000 + Math.random() * 900000)}</strong></p>
            <a href="index.html" class="hero-btn" style="background-color:#000; color:#fff; border-color:#000; display:inline-block;">Continue Shopping</a>
          </div>
        `;
      }
    });
  }
}
