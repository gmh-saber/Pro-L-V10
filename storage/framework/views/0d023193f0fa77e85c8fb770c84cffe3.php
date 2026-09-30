<?php
  $gtmId            = tracking_gtm_id();
  $ga4Id            = tracking_ga4_id();
  $pixelId          = tracking_meta_pixel_id();
  $googleAdsId      = tracking_google_ads_id();
  $googleAdsLabel   = tracking_google_ads_label();
  $tiktokId         = tracking_tiktok_pixel_id();
  $domainVerification = trim((string) setting('meta_domain_verification', ''));
  $customHead       = setting('custom_header_scripts');
?>


<?php if(!empty($domainVerification)): ?>
  <?php if(str_starts_with($domainVerification, '<meta')): ?>
    <?php echo $domainVerification; ?>

  <?php else: ?>
    <meta name="facebook-domain-verification" content="<?php echo e($domainVerification); ?>" />
  <?php endif; ?>
<?php endif; ?>


<?php if($gtmId || $ga4Id || $pixelId || $googleAdsId || $tiktokId): ?>
<script>
window.__tracking = {
  gtm:            <?php echo json_encode($gtmId, 15, 512) ?>,
  ga4:            <?php echo json_encode($ga4Id, 15, 512) ?>,
  pixel:          <?php echo json_encode($pixelId, 15, 512) ?>,
  googleAdsId:    <?php echo json_encode($googleAdsId, 15, 512) ?>,
  googleAdsLabel: <?php echo json_encode($googleAdsLabel, 15, 512) ?>,
  tiktok:         <?php echo json_encode($tiktokId, 15, 512) ?>,
  currency:       <?php echo json_encode(setting('currency_code', 'BDT'), 512) ?>,
};
</script>
<?php endif; ?>

<?php if($gtmId): ?>
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','<?php echo e($gtmId); ?>');
</script>
<?php endif; ?>

<?php if($ga4Id): ?>
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo e($ga4Id); ?>"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
<?php if (! ($gtmId)): ?>
gtag('config', '<?php echo e($ga4Id); ?>');
<?php endif; ?>
</script>
<?php endif; ?>

<?php if($googleAdsId && ! $ga4Id): ?>
<!-- Google Ads Conversion Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo e($googleAdsId); ?>"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '<?php echo e($googleAdsId); ?>');
</script>
<?php elseif($googleAdsId && $ga4Id): ?>
<!-- Google Ads Config via existing gtag -->
<script>
if (typeof gtag === 'function') {
  gtag('config', '<?php echo e($googleAdsId); ?>');
}
</script>
<?php endif; ?>

<?php if($pixelId): ?>
<!-- Meta (Facebook) Pixel -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '<?php echo e($pixelId); ?>');
fbq('track', 'PageView');
</script>
<?php endif; ?>

<?php if($tiktokId): ?>
<!-- TikTok Pixel -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=r+"?sdkid="+e+"&lib="+t;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)};
  ttq.load('<?php echo e($tiktokId); ?>');
  ttq.page();
}(window, document, 'ttq');
</script>
<?php endif; ?>


<?php if(!empty($customHead)): ?>
<?php echo $customHead; ?>

<?php endif; ?>

<?php echo $__env->yieldPushContent('tracking-head'); ?>
<?php /**PATH C:\Users\LUFFY\Documents\Pro L V10\resources\views/partials/tracking-head.blade.php ENDPATH**/ ?>