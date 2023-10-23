const input = document.querySelector('nav .menu input');
const navbarNav = document.querySelector('nav .navbar-nav');

input.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
});