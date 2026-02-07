// Smooth scroll untuk navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle form submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validasi
    if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah dikirim.`);
        this.reset();
    } else {
        alert('Mohon isi semua field!');
    }
});

// Mobile menu toggle (opsional)
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        navMenu?.classList.add('mobile');
    } else {
        navMenu?.classList.remove('mobile');
    }
});

console.log('Website Alonesia loaded successfully!');
