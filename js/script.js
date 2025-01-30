// Ambil elemen yang dibutuhkan
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// Buat overlay
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

// Toggle sidebar dan overlay
hamburger.onclick = (e) => {
    navbarNav.classList.toggle('active');
    overlay.classList.toggle('active');
    e.preventDefault();
    e.stopPropagation();
}

// Tutup sidebar ketika klik overlay
overlay.onclick = () => {
    navbarNav.classList.remove('active');
    overlay.classList.remove('active');
}

// Tutup sidebar ketika klik di luar
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// Tutup sidebar ketika klik link menu
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
        overlay.classList.remove('active');
    });
});