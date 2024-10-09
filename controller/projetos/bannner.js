function trocarBanner(numeroBanner) {
    let banners = document.getElementById('banners');
    let offset = numeroBanner * 100; 
    banners.style.transform = `translateX(-${offset}vw)`; 
}

window.trocarBanner = trocarBanner;
