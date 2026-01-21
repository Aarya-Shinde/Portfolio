 // smooth transition on page reload
 window.addEventListener('beforeunload', function () {
    document.body.style.backgroundColor = '#111111'; // White background during transition
});



/********************* */
//for automatic resume viewing
function downloadCV() {
     window.open('https://drive.google.com/file/d/1frrCwVfJkAPhq33KnxL486Vbcix3RZNw/view?usp=sharing', '_blank');
 }



// Implement smooth scrolling for the navigation links to make transitions between sections seamless.
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


// Highlight active section in navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar a');

    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navbarLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});




// Add a sticky header that changes styles when scrolling down for a more modern UI effect.
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add a typewriter effect to make the introduction text more engaging
const textArray = ["Hey, Aarya here!", "A passionate Software Developer."];
let textIndex = 0;
let charIndex = 0;
const typeSpeed = 100;

function typeEffect() {
    const heading = document.querySelector('.landing-page h1');
    if (charIndex < textArray[textIndex].length) {
        heading.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typeSpeed);
    } else {
        setTimeout(() => {
            heading.textContent = '';
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 2000);
    }
}
document.addEventListener('DOMContentLoaded', typeEffect);


// Highlight skills on hover for a dynamic look.
document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.color = '#007bff';
    });
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1)';
        skill.style.color = '';
    });
});

// For multiple projects, you can add a carousel to display them interactively.
let currentProject = 0;
const projects = document.querySelectorAll('.project-item');

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
});

// Initial display
showProject(currentProject);



// Add real-time validation to the contact form.
const form = document.getElementById('contact-form');
form.addEventListener('input', (event) => {
    const target = event.target;
    if (target.validity.valid) {
        target.style.borderColor = 'green';
    } else {
        target.style.borderColor = 'red';
    }
});

// Add a parallax scrolling effect for the landing page background.
window.addEventListener('scroll', () => {
    const landingPage = document.querySelector('.landing-page');
    const offset = window.scrollY;
    landingPage.style.backgroundPositionY = `${offset * 0.5}px`;
});


// Automatically update the year in the footer.

document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Aarya Shinde. All rights reserved.`;



/*******Education section *** */
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-content");
    const rectangle = document.querySelector(".timeline-rectangle");

    function checkScroll() {
        let scrollPos = window.scrollY + window.innerHeight * 0.75;
        let activeItems = 0;

        timelineItems.forEach((item, index) => {
            if (item.offsetTop < scrollPos) {
                item.classList.add("active");
                activeItems++;
            }
        });

        // Move the timeline rectangle based on how many items are visible
        rectangle.style.transform = `translateY(${activeItems * 120}px)`;
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});





