// Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Redirect to Google search for skills
document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', function() {
        const searchTerm = this.getAttribute('data-search');
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
    });
});

// Bubble Burst Game
let score = 0;
let gameInterval;

document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('game-area').innerHTML = ''; // Clear previous bubbles
    gameInterval = setInterval(createBubble, 1000); // Create a bubble every second
}

function createBubble() {
    const bubble
