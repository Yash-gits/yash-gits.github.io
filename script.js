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

// Word Guessing Game
const words = ["CLOUD", "DEVOPS", "DOCKER", "KUBERNETES", "TERRAFORM"];
let selectedWord = "";
let guessedWord = [];
let attempts = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill("_");
    attempts = 6;
    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
    document.getElementById("message").textContent = `Attempts left: ${attempts}`;
    generateAlphabetButtons();
}

function generateAlphabetButtons() {
    const lettersDiv = document.getElementById("letters");
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) { // ASCII codes for A-Z
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letter;
        button.addEventListener("click", () => guessLetter(letter));
        lettersDiv.appendChild(button);
    }
}

function guessLetter(letter) {
    if (selectedWord.includes(letter)) {
        // Reveal matching letters
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
    } else {
        // Deduct an attempt if incorrect
        attempts--;
    }
    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
    document.getElementById("message").textContent = `Attempts left: ${attempts}`;
    
    if (!guessedWord.includes("_")) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word!";
        disableButtons();
    } else if (attempts <= 0) {
        document.getElementById("message").textContent = `Game Over! The word was: ${selectedWord}`;
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("#letters button").forEach(button => button.disabled = true);
}

// Start the game when the page loads
startGame();
