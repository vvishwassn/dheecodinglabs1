function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.style.width === '250px') {
        navMenu.style.width = '0';
        navMenu.style.right = '-0.2cm'; // Ensure it shifts back to the initial position
    } else {
        navMenu.style.width = '250px';
        navMenu.style.right = '0'; // Ensure it shifts fully into view
    }
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.style.width = '0';
        navMenu.style.right = '-0.2cm'; // Ensure it shifts back to the initial position
    }
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.contact-heading').scrollIntoView({ behavior: 'smooth' });
    toggleMenu(); // Close the menu after clicking
});

document.querySelector('a[href="#career-programs"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.career-programs-text').scrollIntoView({ behavior: 'smooth' });
    toggleMenu(); // Close the menu after clicking
});

document.querySelector('a[href="#who-we-are"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.who-we-are-text').scrollIntoView({ behavior: 'smooth' });
    toggleMenu(); // Close the menu after clicking
});