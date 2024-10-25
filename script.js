// Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/Hide Skill Information and redirect to Google search
document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', function() {
        const infoDiv = this.nextElementSibling;
        const searchTerm = this.getAttribute('data-search');
        
        // Redirect to Google search
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
        
        // Display info (if needed in future)
        // infoDiv.textContent = this.getAttribute('data-info');
        // infoDiv.style
