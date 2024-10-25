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

// Dinosaur Game Setup
const canvas = document.getElementById("dinoGame");
const ctx = canvas.getContext("2d");

let score = 0;
let isJumping = false;
let dinoY = canvas.height - 40; // Dinosaur vertical position
let gravity = 2;
let obstacles = [];
let gameInterval;
let frameCount = 0;

document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    score = 0;
    isJumping = false;
    dinoY = canvas.height - 40;
    obstacles = [];
    frameCount = 0;
    clearInterval(gameInterval);
    document.getElementById("score").innerText = `Score: ${score}`;
    gameInterval = setInterval(gameLoop, 20);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas
