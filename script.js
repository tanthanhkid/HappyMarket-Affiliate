// Category mapping for navigation
const categoryMapping = {
    'thoi-trang-nam': { parent: 'thoi-trang', name: 'Thời trang nam' },
    'thoi-trang-nu': { parent: 'thoi-trang', name: 'Thời trang nữ' },
    'giay-dep': { parent: 'thoi-trang', name: 'Giày dép' },
    'tui-xach': { parent: 'thoi-trang', name: 'Túi xách' },
    'trang-suc': { parent: 'thoi-trang', name: 'Trang sức' },
    'dong-ho': { parent: 'thoi-trang', name: 'Đồng hồ' },
    'my-pham': { parent: 'lam-dep', name: 'Mỹ phẩm' },
    'cham-soc-da': { parent: 'lam-dep', name: 'Chăm sóc da' },
    'cham-soc-toc': { parent: 'lam-dep', name: 'Chăm sóc tóc' },
    'nuoc-hoa': { parent: 'lam-dep', name: 'Nước hoa' },
    'dung-cu-lam-dep': { parent: 'lam-dep', name: 'Dụng cụ làm đẹp' },
    'noi-bat': { parent: 'gia-dung', name: 'Nồi bát' },
    'do-dien-gia-dung': { parent: 'gia-dung', name: 'Đồ điện gia dụng' },
    'noi-that': { parent: 'gia-dung', name: 'Nội thất' },
    'trang-tri': { parent: 'gia-dung', name: 'Trang trí' },
    'thuc-pham-chuc-nang': { parent: 'suc-khoe', name: 'Thực phẩm chức năng' },
    'dung-cu-y-te': { parent: 'suc-khoe', name: 'Dụng cụ y tế' },
    'do-the-thao': { parent: 'the-thao', name: 'Đồ thể thao' },
    'fitness': { parent: 'the-thao', name: 'Fitness & Gym' },
    'outdoor': { parent: 'the-thao', name: 'Outdoor' },
    'dien-thoai': { parent: 'dien-tu', name: 'Điện thoại' },
    'phu-kien-dien-tu': { parent: 'dien-tu', name: 'Phụ kiện điện tử' },
    'may-tinh': { parent: 'dien-tu', name: 'Máy tính' },
    'am-thanh': { parent: 'dien-tu', name: 'Âm thanh' },
    'smart-home': { parent: 'dien-tu', name: 'Smart Home' },
    'do-choi-tre-em': { parent: 'do-choi', name: 'Đồ chơi trẻ em' }
};

// Sample product data
const products = [
    {
        id: 1,
        title: "[Mở Bán] Dép Sục đúc nguyên khối EVA quai hậu",
        category: "giay-dep",
        categoryName: "Giày dép",
        price: 99000,
        originalPrice: 180000,
        earnings: 10395,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/1"
    },
    {
        id: 2,
        title: "Áo thun nam nữ chất liệu cotton cao cấp",
        category: "thoi-trang-nam",
        categoryName: "Thời trang nam",
        price: 159000,
        originalPrice: 299000,
        earnings: 15900,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/2"
    },
    {
        id: 3,
        title: "Kem dưỡng da mặt chống lão hóa",
        category: "cham-soc-da",
        categoryName: "Chăm sóc da",
        price: 299000,
        originalPrice: 450000,
        earnings: 29900,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/3"
    },
    {
        id: 4,
        title: "Bộ nồi inox cao cấp 5 món",
        category: "noi-bat",
        categoryName: "Nồi bát",
        price: 899000,
        originalPrice: 1200000,
        earnings: 89900,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/4"
    },
    {
        id: 5,
        title: "Giày thể thao chạy bộ nam nữ",
        category: "do-the-thao",
        categoryName: "Đồ thể thao",
        price: 599000,
        originalPrice: 899000,
        earnings: 59900,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/5"
    },
    {
        id: 6,
        title: "Đồ chơi robot thông minh cho trẻ em",
        category: "do-choi-tre-em",
        categoryName: "Đồ chơi trẻ em",
        price: 1299000,
        originalPrice: 1999000,
        earnings: 129900,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/6"
    },
    {
        id: 7,
        title: "Máy massage cầm tay đa năng",
        category: "dung-cu-y-te",
        categoryName: "Dụng cụ y tế",
        price: 399000,
        originalPrice: 599000,
        earnings: 39900,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/7"
    },
    {
        id: 8,
        title: "Túi xách nữ da thật cao cấp",
        category: "tui-xach",
        categoryName: "Túi xách",
        price: 799000,
        originalPrice: 1299000,
        earnings: 79900,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=300&fit=crop"
        ],
        onSale: true,
        affiliateLink: "https://tiktok.com/affiliate/product/8"
    }
];

// Global variables
let currentView = 'grid';
let filteredProducts = [...products];
let displayedProducts = 6;
let currentSort = 'earnings-desc';

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const earningsRange = document.getElementById('earningsRange');
const earningsValue = document.getElementById('earningsValue');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const viewToggle = document.querySelectorAll('.view-btn');
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateEarningsDisplay();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', filterProducts);
    
    // Filter functionality
    categoryFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', function() {
        currentSort = this.value;
        sortProducts();
        renderProducts();
    });
    
    // Earnings range filter
    earningsRange.addEventListener('input', function() {
        earningsValue.textContent = formatCurrency(this.value);
        filterProducts();
    });
    
    // View toggle
    viewToggle.forEach(btn => {
        btn.addEventListener('click', function() {
            viewToggle.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            productsGrid.className = `products-grid ${currentView === 'list' ? 'list-view' : ''}`;
            renderProducts();
        });
    });
    
    // Load more button
    loadMoreBtn.addEventListener('click', function() {
        displayedProducts += 6;
        renderProducts();
    });
    
    // Modal functionality
    closeModal.addEventListener('click', closeProductModal);
    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            closeProductModal();
        }
    });
    
    // Navigation dropdown functionality
    setupNavigationDropdown();
}

// Setup navigation dropdown
function setupNavigationDropdown() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            if (category) {
                filterByCategory(category);
                // Update the category filter dropdown
                categoryFilter.value = category;
                // Scroll to products section
                document.querySelector('.products-section').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
}

// Filter products by specific category
function filterByCategory(category) {
    filteredProducts = products.filter(product => {
        return product.category === category;
    });
    
    sortProducts();
    displayedProducts = 6;
    renderProducts();
    
    // Show notification
    const categoryName = categoryMapping[category]?.name || category;
    showNotification(`Đã lọc sản phẩm theo: ${categoryName}`, 'success');
}

// Filter products based on search and filters
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const minEarnings = parseInt(earningsRange.value);
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) ||
                            product.categoryName.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesEarnings = product.earnings >= minEarnings;
        
        return matchesSearch && matchesCategory && matchesEarnings;
    });
    
    sortProducts();
    displayedProducts = 6;
    renderProducts();
}

// Sort products
function sortProducts() {
    filteredProducts.sort((a, b) => {
        switch(currentSort) {
            case 'earnings-desc':
                return b.earnings - a.earnings;
            case 'earnings-asc':
                return a.earnings - b.earnings;
            case 'price-desc':
                return b.price - a.price;
            case 'price-asc':
                return a.price - b.price;
            case 'name':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}

// Render products to the grid
function renderProducts() {
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card ${currentView === 'list' ? 'list-view' : ''}" onclick="openProductModal(${product.id})">
            <div class="product-images">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                ${product.onSale ? '<div class="sale-banner">SALE</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-category">${product.categoryName}</p>
                <div class="earnings-badge">
                    <i class="fas fa-coins"></i>
                    Kiếm được ${formatCurrency(product.earnings)}
                </div>
                <div class="pricing">
                    <span class="current-price">${formatCurrency(product.price)}</span>
                    <span class="original-price">${formatCurrency(product.originalPrice)}</span>
                    <span class="discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                </div>
                <button class="share-btn" onclick="event.stopPropagation(); shareProduct(${product.id})">
                    <i class="fas fa-share"></i> Chia sẻ
                </button>
            </div>
        </div>
    `).join('');
    
    // Show/hide load more button
    loadMoreBtn.style.display = displayedProducts >= filteredProducts.length ? 'none' : 'block';
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalCurrentPrice').textContent = formatCurrency(product.price);
    document.getElementById('modalOriginalPrice').textContent = formatCurrency(product.originalPrice);
    document.getElementById('modalDiscount').textContent = `-${Math.round((1 - product.price / product.originalPrice) * 100)}%`;
    document.getElementById('modalEarnings').textContent = formatCurrency(product.earnings);
    
    // Setup modal button events
    document.getElementById('shareBtn').onclick = () => shareProduct(productId);
    document.getElementById('copyLinkBtn').onclick = () => copyAffiliateLink(product.affiliateLink);
    
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Share product
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const shareText = `🔥 Sản phẩm hot: ${product.title}\n💰 Giá chỉ: ${formatCurrency(product.price)}\n💎 Kiếm được: ${formatCurrency(product.earnings)}\n🔗 Link: ${product.affiliateLink}`;
    
    if (navigator.share) {
        navigator.share({
            title: product.title,
            text: shareText,
            url: product.affiliateLink
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Đã sao chép thông tin sản phẩm!', 'success');
        });
    }
}

// Copy affiliate link
function copyAffiliateLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        showNotification('Đã sao chép link affiliate!', 'success');
    });
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Update earnings display
function updateEarningsDisplay() {
    earningsValue.textContent = formatCurrency(earningsRange.value);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);
