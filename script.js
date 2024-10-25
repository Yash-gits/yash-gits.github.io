// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});
