function trocarBanner(numeroBanner) {
    let banners = document.getElementById('banners');
    banners.style.transform = 'translateX(-' + numeroBanner * 100 + 'vw)';
}

window.trocarBanner = trocarBanner;
