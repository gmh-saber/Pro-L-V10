# Graph Report - C:/Users/LUFFY/Documents/Pro L V10  (2026-09-26)

## Corpus Check
- Large corpus: 424 files � ~709,649 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 1559 nodes · 2214 edges · 283 communities (244 shown, 39 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 143 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Settings Configuration|Settings Configuration]]
- [[_COMMUNITY_Admin User Management|Admin User Management]]
- [[_COMMUNITY_Product and Brand Management|Product and Brand Management]]
- [[_COMMUNITY_Abandoned Checkout and Reviews|Abandoned Checkout and Reviews]]
- [[_COMMUNITY_Banner Management|Banner Management]]
- [[_COMMUNITY_Courier Integrations|Courier Integrations]]
- [[_COMMUNITY_Landing Page Builder|Landing Page Builder]]
- [[_COMMUNITY_Product Data Models|Product Data Models]]
- [[_COMMUNITY_Order Data Models|Order Data Models]]
- [[_COMMUNITY_Tracking and Meta CAPI|Tracking and Meta CAPI]]
- [[_COMMUNITY_Frontend Dependencies|Frontend Dependencies]]
- [[_COMMUNITY_Admin Layout and Theme|Admin Layout and Theme]]
- [[_COMMUNITY_Customer and Dashboard|Customer and Dashboard]]
- [[_COMMUNITY_Flash Sale Management|Flash Sale Management]]
- [[_COMMUNITY_Email Templates|Email Templates]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 139|Community 139]]
- [[_COMMUNITY_Community 140|Community 140]]
- [[_COMMUNITY_Community 147|Community 147]]
- [[_COMMUNITY_Community 148|Community 148]]
- [[_COMMUNITY_Community 149|Community 149]]
- [[_COMMUNITY_Community 150|Community 150]]
- [[_COMMUNITY_Community 151|Community 151]]
- [[_COMMUNITY_Community 153|Community 153]]
- [[_COMMUNITY_Community 154|Community 154]]
- [[_COMMUNITY_Community 169|Community 169]]
- [[_COMMUNITY_Community 190|Community 190]]
- [[_COMMUNITY_Community 191|Community 191]]
- [[_COMMUNITY_Community 192|Community 192]]
- [[_COMMUNITY_Community 193|Community 193]]
- [[_COMMUNITY_Community 194|Community 194]]
- [[_COMMUNITY_Community 195|Community 195]]
- [[_COMMUNITY_Community 199|Community 199]]
- [[_COMMUNITY_Community 281|Community 281]]
- [[_COMMUNITY_Community 282|Community 282]]

## God Nodes (most connected - your core abstractions)
1. `Controller` - 85 edges
2. `PublicUploader` - 30 edges
3. `Product` - 27 edges
4. `site_name()` - 25 edges
5. `setting()` - 23 edges
6. `LandingPageDesigns` - 20 edges
7. `ProductController` - 19 edges
8. `CourierShipTest` - 19 edges
9. `User` - 18 edges
10. `Order` - 17 edges

## Surprising Connections (you probably didn't know these)
- `Shopzy Marketplace` --semantically_similar_to--> `Projoss E-Commerce & Marketplace Platform`  [INFERRED] [semantically similar]
  DEPLOY.md → README.md
- `AbandonedCheckoutController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/AbandonedCheckoutController.php → app/Http/Controllers/Controller.php
- `AccountController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/AccountController.php → app/Http/Controllers/Controller.php
- `CartController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/CartController.php → app/Http/Controllers/Controller.php
- `CheckoutController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/CheckoutController.php → app/Http/Controllers/Controller.php

## Import Cycles
- None detected.

## Communities (283 total, 39 thin omitted)

### Community 0 - "Settings Configuration"
Cohesion: 0.06
Nodes (37): SettingController, branding_asset_is_usable(), branding_asset_url(), branding_cache_buster(), configure_mail_from_settings(), currency_symbol(), favicon_url(), has_custom_logo() (+29 more)

### Community 1 - "Admin User Management"
Cohesion: 0.06
Nodes (18): AdminUserController, Request, OtpService, Request, OtpService, Request, OtpController, PasswordResetController (+10 more)

### Community 2 - "Product and Brand Management"
Cohesion: 0.09
Nodes (11): BrandController, ProductController, Request, Product, ProductImage, Request, Request, Brand (+3 more)

### Community 3 - "Abandoned Checkout and Reviews"
Cohesion: 0.06
Nodes (20): AbandonedCheckoutController, AnalyticsController, ReviewController, Request, Request, Request, Request, Product (+12 more)

### Community 4 - "Banner Management"
Cohesion: 0.09
Nodes (9): BannerController, Request, Banner, Seeder, BannerSeeder, ContactFormFieldSeeder, ContactMessageSeeder, DatabaseSeeder (+1 more)

### Community 5 - "Courier Integrations"
Cohesion: 0.09
Nodes (9): CourierController, JsonResponse, Order, Request, CourierInterface, PathaoService, RedxService, SteadfastService (+1 more)

### Community 6 - "Landing Page Builder"
Cohesion: 0.11
Nodes (4): LandingPageController, Request, LandingPage, LandingPageDesigns

### Community 7 - "Product Data Models"
Cohesion: 0.10
Nodes (6): BelongsTo, Builder, Collection, HasMany, ProductImage, Product

### Community 8 - "Order Data Models"
Cohesion: 0.08
Nodes (8): BelongsTo, HasMany, HasMany, Authenticatable, HasFactory, Order, User, Notifiable

### Community 9 - "Tracking and Meta CAPI"
Cohesion: 0.11
Nodes (6): TrackingController, Request, Order, Request, TrackingIntegrationTest, MetaCapiService

### Community 10 - "Frontend Dependencies"
Cohesion: 0.10
Nodes (20): dependencies, @inertiajs/react, react, react-confetti, react-dom, react-use, recharts, @vitejs/plugin-react (+12 more)

### Community 11 - "Admin Layout and Theme"
Cohesion: 0.11
Nodes (10): Settings(), AdminLayout(), navGroups, ADMIN_THEME_PRESETS, applyAdminTheme(), generateThemePalette(), HEADER_NAV_COLOR_PRESETS, HEADER_TEMPLATES (+2 more)

### Community 12 - "Customer and Dashboard"
Cohesion: 0.13
Nodes (7): CustomerController, DashboardController, ProductCtaController, Request, Request, Controller, SitemapController

### Community 13 - "Flash Sale Management"
Cohesion: 0.20
Nodes (6): FlashSaleController, Product, Request, Category, Request, ShopController

### Community 14 - "Email Templates"
Cohesion: 0.18
Nodes (4): EmailTemplateController, Request, Response, EmailTemplateService

### Community 15 - "Community 15"
Cohesion: 0.28
Nodes (4): OrderController, JsonResponse, Order, Request

### Community 16 - "Community 16"
Cohesion: 0.39
Nodes (15): cfg(), dlPush(), gtagEvent(), hasGa4(), hasGoogleAds(), hasGtm(), hasPixel(), hasTiktok() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.35
Nodes (3): CategoryController, Category, Request

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (4): FeatureController, Request, HomeController, Feature

### Community 19 - "Community 19"
Cohesion: 0.20
Nodes (6): ContactFormField, ContactMessage, Request, BelongsTo, ContactController, ContactMessageValue

### Community 20 - "Community 20"
Cohesion: 0.18
Nodes (6): Model, BlockedDevice, BlockedIp, BlockedPhone, Feature, Setting

### Community 22 - "Community 22"
Cohesion: 0.26
Nodes (10): addToCart(), api(), applyCart(), closeAccountMenus(), closeMobileSearch(), openCart(), openFilter(), openMenu() (+2 more)

### Community 23 - "Community 23"
Cohesion: 0.37
Nodes (3): CouponController, Coupon, Request

### Community 24 - "Community 24"
Cohesion: 0.37
Nodes (3): ContactFormFieldController, ContactFormField, Request

### Community 26 - "Community 26"
Cohesion: 0.24
Nodes (5): BlockedPhoneController, FakeOrderGuardController, Request, Request, BlockedPhone

### Community 27 - "Community 27"
Cohesion: 0.23
Nodes (5): static, static, OrderFactory, UserFactory, Factory

### Community 28 - "Community 28"
Cohesion: 0.32
Nodes (10): add(), closeCart(), count(), openCart(), remove(), renderCart(), save(), setQty() (+2 more)

### Community 30 - "Community 30"
Cohesion: 0.23
Nodes (3): BelongsTo, Builder, ProductReview

### Community 32 - "Community 32"
Cohesion: 0.25
Nodes (3): Order, Request, CheckoutController

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (5): BlockedIpController, Request, Request, BlockedIp, QuickOrderController

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (3): image_url(), BelongsTo, ProductVariant

### Community 36 - "Community 36"
Cohesion: 0.44
Nodes (3): ContactMessageController, ContactMessage, Request

### Community 37 - "Community 37"
Cohesion: 0.22
Nodes (4): BdCourierResult(), Icons, RISK_MAP, riskStyle()

### Community 38 - "Community 38"
Cohesion: 0.27
Nodes (3): BelongsTo, HasMany, Category

### Community 39 - "Community 39"
Cohesion: 0.20
Nodes (9): partials.floating-chat, partials.seo, partials.tracking-body, partials.tracking-head, storefront.partials.cart-drawer, storefront.partials.footer, storefront.partials.header, storefront.partials.header-compact (+1 more)

### Community 43 - "Community 43"
Cohesion: 0.39
Nodes (3): Order, Request, AccountController

### Community 44 - "Community 44"
Cohesion: 0.28
Nodes (3): Builder, HasMany, ContactMessage

### Community 45 - "Community 45"
Cohesion: 0.22
Nodes (8): description, keywords, license, minimum-stability, name, prefer-stable, $schema, type

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (9): scripts, dev, post-autoload-dump, post-create-project-cmd, post-root-package-install, post-update-cmd, pre-package-uninstall, setup (+1 more)

### Community 47 - "Community 47"
Cohesion: 0.31
Nodes (6): cls(), CodOrderModal(), getCsrf(), ICON, money(), postJson()

### Community 48 - "Community 48"
Cohesion: 0.54
Nodes (3): AdminInvoiceController, Order, Request

### Community 49 - "Community 49"
Cohesion: 0.46
Nodes (4): InventoryController, Product, Request, ProductVariant

### Community 53 - "Community 53"
Cohesion: 0.25
Nodes (8): require-dev, fakerphp/faker, laravel/pail, laravel/pao, laravel/pint, mockery/mockery, nunomaduro/collision, phpunit/phpunit

### Community 55 - "Community 55"
Cohesion: 0.43
Nodes (4): AdminPopupController, Request, Response, RedirectResponse

### Community 56 - "Community 56"
Cohesion: 0.48
Nodes (3): BlockedDeviceController, Request, BlockedDevice

### Community 57 - "Community 57"
Cohesion: 0.52
Nodes (3): MediaController, ProductImage, Request

### Community 58 - "Community 58"
Cohesion: 0.48
Nodes (3): OtpService, Request, LoginController

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (7): pestphp/pest-plugin, php-http/discovery, config, allow-plugins, optimize-autoloader, preferred-install, sort-packages

### Community 66 - "Community 66"
Cohesion: 0.47
Nodes (3): OtpService, Request, RegisterController

### Community 67 - "Community 67"
Cohesion: 0.53
Nodes (4): Closure, Request, Response, BlockMutationsInTestingMode

### Community 68 - "Community 68"
Cohesion: 0.53
Nodes (4): Closure, Request, Response, EnsureAdmin

### Community 69 - "Community 69"
Cohesion: 0.60
Nodes (6): Architecture Audit Skill, Change Review Skill, Impact Analysis Skill, Read Broadly Write Narrowly Principle, Universal Project Safety Rules, Safe Feature Skill

### Community 70 - "Community 70"
Cohesion: 0.53
Nodes (4): fieldName(), injectBase64(), readFile(), trackingKey()

### Community 71 - "Community 71"
Cohesion: 0.53
Nodes (4): Closure, Request, Response, SecurityHeaders

### Community 72 - "Community 72"
Cohesion: 0.33
Nodes (6): autoload, files, psr-4, App\\, Database\\Factories\\, Database\\Seeders\\

### Community 73 - "Community 73"
Cohesion: 0.33
Nodes (6): cPanel Deployment Guide, Shopzy Marketplace, Courier Integrations, Fake Order Guard, 1-Click COD Quick Order, Projoss E-Commerce & Marketplace Platform

### Community 76 - "Community 76"
Cohesion: 0.70
Nodes (4): belongsToForm(), initForm(), rowsFor(), selectAllFor()

### Community 77 - "Community 77"
Cohesion: 0.40
Nodes (5): require, inertiajs/inertia-laravel, laravel/framework, laravel/tinker, php

### Community 81 - "Community 81"
Cohesion: 0.40
Nodes (4): landing.partials.buy-now, partials.tracking-body, partials.tracking-head, partials.tracking-landing

### Community 82 - "Community 82"
Cohesion: 0.40
Nodes (4): landing.partials.buy-now, partials.tracking-body, partials.tracking-head, partials.tracking-landing

### Community 85 - "Community 85"
Cohesion: 0.67
Nodes (3): COLOR_PRESETS, EmailTemplatesIndex(), getTemplateIcon()

### Community 92 - "Community 92"
Cohesion: 0.50
Nodes (3): partials.tracking-body, partials.tracking-head, partials.tracking-landing

### Community 139 - "Community 139"
Cohesion: 0.67
Nodes (3): autoload-dev, psr-4, Tests\\

### Community 140 - "Community 140"
Cohesion: 0.67
Nodes (3): extra, laravel, dont-discover

## Knowledge Gaps
- **118 isolated node(s):** `$schema`, `name`, `type`, `description`, `keywords` (+113 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **39 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Controller` connect `Customer and Dashboard` to `Settings Configuration`, `Admin User Management`, `Product and Brand Management`, `Abandoned Checkout and Reviews`, `Banner Management`, `Courier Integrations`, `Landing Page Builder`, `Tracking and Meta CAPI`, `Flash Sale Management`, `Email Templates`, `Community 15`, `Community 17`, `Community 18`, `Community 19`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 32`, `Community 33`, `Community 36`, `Community 41`, `Community 43`, `Community 48`, `Community 49`, `Community 55`, `Community 56`, `Community 57`, `Community 58`, `Community 65`, `Community 66`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Why does `OrderItem` connect `Abandoned Checkout and Reviews` to `Settings Configuration`, `Banner Management`, `Tracking and Meta CAPI`, `Community 15`, `Community 20`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `User` connect `Admin User Management` to `Community 66`, `Abandoned Checkout and Reviews`, `Banner Management`, `Order Data Models`, `Community 27`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 18 inferred relationships involving `PublicUploader` (e.g. with `.deleteStoredImage()` and `.handleImage()`) actually correct?**
  _`PublicUploader` has 18 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `site_name()` (e.g. with `.bulk()` and `.verify()`) actually correct?**
  _`site_name()` has 20 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `name`, `type` to the rest of the system?**
  _122 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.05570611261668172 - nodes in this community are weakly interconnected._