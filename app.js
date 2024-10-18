// Projects section variables
const images = document.querySelectorAll('.projects-grid img');

// Responsiveness variables
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');

// Change the projects images when hovering in desktop view
images.forEach((img) => {
    const defaultImg = img.src;
    const hoverImg = img.getAttribute('data-hover-img');

    // Hover in
    img.addEventListener('mouseover', () => {
        img.src = hoverImg;
    });

    // Hover out event
    img.addEventListener('mouseout', () => {
        img.src = defaultImg;
    });
});

// Change the default image of the projects when in mobile devices
function changeProjectImageWithSize() {

    images.forEach((img) => {
        const defaultImg = img.src;
        const hoverImg = img.getAttribute('data-hover-img');
    
        if (window.innerWidth <= 900) {
            img.src = hoverImg;
        } else {
            img.src = defaultImg;
        }
    });
}

window.addEventListener('resize', changeProjectImageWithSize);
window.addEventListener('load', changeProjectImageWithSize);

// Open7close the navigation menu when clicking on its icon
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Close the navigation menu when clicking outside the menu or the header
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || header.contains(event.target);

    if (!isClickInsideMenu && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Close the navigation menu when starting to scroll
let isScrolling;

// Detect the user's manual scroll
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }, 100);
});

// Form function
function sendEmail() {
    event.preventDefault();

    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    }

    console.log(params);

    emailjs.send("service_ojbtqwz", "template_ik9im9n", params).then(alert("Email Sent! I'll get back to you ASAP :)"))

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
}