import { useState, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { money, imageUrl } from '@/lib/utils';
import { trackAddToCart } from '@/lib/tracking';

export default function ProductCard({ product }) {
  const { app } = usePage().props;
  const [imageError, setImageError] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlist = () => {
      const saved = localStorage.getItem('projoss_wishlist');
      if (saved) {
        try {
          const list = JSON.parse(saved);
          setInWishlist(list.some(p => p.id === product.id));
        } catch (e) {}
      } else {
        setInWishlist(false);
      }
    };
    checkWishlist();
    window.addEventListener('wishlist-updated', checkWishlist);
    return () => window.removeEventListener('wishlist-updated', checkWishlist);
  }, [product.id]);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const saved = localStorage.getItem('projoss_wishlist');
    let list = saved ? JSON.parse(saved) : [];
    
    if (inWishlist) {
      list = list.filter(p => p.id !== product.id);
    } else {
      list.push(product);
    }
    
    localStorage.setItem('projoss_wishlist', JSON.stringify(list));
    setInWishlist(!inWishlist);
    window.dispatchEvent(new Event('wishlist-updated'));
  };
  
  // Calculate discount percentage manually if not passed
  let discount = 0;
  if (product.sale_price && product.regular_price > product.sale_price) {
    discount = Math.round(((product.regular_price - product.sale_price) / product.regular_price) * 100);
  }

  const primaryImage = product.images?.find(img => img.is_primary)?.path || product.images?.[0]?.path;
  const imageSrc = imageUrl(primaryImage, product.name);
  const stock = Math.max(0, parseInt(product.stock_quantity) || 0);
  const rating = Math.max(0, Math.min(5, Math.round(parseFloat(product.rating) || 0)));
  const ctaAction = app.settings?.product_cta_action || 'checkout';
  const cardBg = app.settings?.product_card_bg_color || '#FFFFFF';
  const cardText = app.settings?.product_card_text_color || '#111827';
  const rawBtnBg = app.settings?.product_card_btn_bg_color;
  const btnBg = (rawBtnBg && rawBtnBg !== '#f15a24') ? rawBtnBg : 'var(--brand-primary, #f15a24)';
  const btnTextColor = app.settings?.product_card_btn_text_color || '#ffffff';
  const buyText = app.settings?.product_card_buy_text || 'অর্ডার করুন';
  const hasVariants = product.variants_exists;
  const inStock = stock > 0;

  return (
    <article 
      className="product-card relative rounded-[20px] border border-gray-100 shadow-sm p-2 flex flex-col h-full min-w-0 transition-all group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      style={{ backgroundColor: cardBg }}
    >
      <div className="relative shrink-0 aspect-square">
        <Link href={`/product/${product.slug || product.id}`} className="block w-full h-full overflow-hidden bg-gray-50 rounded-[14px]">
          {/* Top-left badge (Always strictly 1 badge: Highest priority shown) */}
          <div className="absolute left-2.5 top-2.5 z-10 flex flex-col items-start pointer-events-none">
            {product.is_best_seller ? (
              <span className="bg-amber-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c.5 2.5 2 4.5 4 6 2.5 2 3 5 2 8a7 7 0 1 1-13.8-3.5C4.5 11 6 8.5 7.5 7c.5 1.5 1.5 2.5 2.5 3 0-2.5 1-5.5 2-8z"/>
                </svg>
                Best Seller
              </span>
            ) : product.is_flash_sale ? (
              <span className="bg-rose-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Hot Offer
              </span>
            ) : product.is_new_arrival ? (
              <span className="bg-blue-600 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
                New Arrival
              </span>
            ) : product.is_featured ? (
              <span className="bg-purple-600 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Featured
              </span>
            ) : discount > 0 ? (
              <span className="bg-[#00D06C] text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                -{discount}%
              </span>
            ) : product.is_free_shipping ? (
              <span className="bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Free Delivery
              </span>
            ) : null}
          </div>
          {imageSrc && !imageError ? (
            <img src={imageSrc} onError={() => setImageError(true)} className="product-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} loading="lazy" />
          ) : (
            <div className="product-img w-full h-full flex items-center justify-center text-gray-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            </div>
          )}
        </Link>
        <button 
          onClick={toggleWishlist}
          className="absolute right-2.5 top-2.5 z-10 p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white shadow-sm border border-gray-100 transition-all"
        >
          <svg className={`w-4 h-4 ${inWishlist ? 'fill-red-500 text-red-500' : 'fill-none'}`} strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      
      <div className="p-3 sm:p-4 flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between gap-1 mb-1.5">
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider truncate block">
            {product.category?.name || 'Category'}
          </span>
          {product.brand && (
            <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 truncate">
              {product.brand}
            </span>
          )}
        </div>
        
        <div className="flex items-start justify-between gap-3 mb-4">
          <Link 
            href={`/product/${product.slug || product.id}`} 
            className="block text-[13px] sm:text-[14px] hover:opacity-80 font-bold transition-colors leading-tight line-clamp-2 pr-2"
            style={{ color: cardText }}
          >
            {product.name}
          </Link>
          
          <div className="flex flex-col items-end shrink-0 leading-tight mt-0.5">
            <span className="whitespace-nowrap font-bold text-gray-900 text-[13px] sm:text-[14px]">
              {money(product.sale_price || product.regular_price)}
            </span>
            {product.sale_price && product.regular_price > product.sale_price && (
              <span className="whitespace-nowrap text-[10px] sm:text-[11px] text-gray-400 line-through mt-1">
                {money(product.regular_price)}
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto flex items-center">
          {hasVariants ? (
            <Link 
              href={`/product/${product.slug || product.id}`}
              style={{
                backgroundColor: inStock ? btnBg : '#9ca3af',
                color: btnTextColor,
              }}
              className="w-full rounded-xl text-[11px] sm:text-[13px] font-bold py-2.5 sm:py-3 transition-all hover:brightness-95 active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm text-center"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>{inStock ? buyText : 'স্টক আউট'}</span>
            </Link>
          ) : (
            <button 
              type="button"
              disabled={!inStock}
              onClick={(e) => {
                 e.preventDefault();
                 trackAddToCart({
                   id: product.id,
                   name: product.name,
                   price: product.sale_price || product.regular_price,
                   category: product.category?.name,
                 }, 1);
                 router.post('/cart/add', {
                     product_id: product.id,
                     qty: 1
                 }, { 
                     preserveScroll: true,
                     onSuccess: () => {
                         if (ctaAction === 'checkout') {
                             router.visit('/checkout');
                         }
                     }
                 });
              }}
              style={{
                backgroundColor: inStock ? btnBg : '#9ca3af',
                color: btnTextColor,
              }}
              className="w-full rounded-xl text-[11px] sm:text-[13px] font-bold py-2.5 sm:py-3 transition-all hover:brightness-95 active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-center cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>{inStock ? buyText : 'স্টক আউট'}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
