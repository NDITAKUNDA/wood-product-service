window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbarMobile = document.getElementById('mobile-nav');
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add('scrolled');
      navbarMobile.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbarMobile.classList.remove('scrolled');
    }
});