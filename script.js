// Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Show/Hide Skill Information
document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', function() {
        const infoDiv = this.nextElementSibling;
        if (infoDiv.style.display === "block") {
            infoDiv.style.display = "none"; // Hide if already visible
        } else {
            infoDiv.textContent = this.getAttribute('data-info'); // Set text from data attribute
            infoDiv.style.display = "block"; // Show the info
        }
    });
});
