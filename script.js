// Smooth Scroll for Nav Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Word Guessing Game Logic
document.addEventListener("DOMContentLoaded", function() {
    const word = "CODE";
    let guessedWord = Array(word.length).fill("_");
    let attemptsLeft = 5;

    const wordBlanks = document.getElementById("word-blanks");
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    wordBlanks.textContent = guessedWord.join(" ");
    attemptsDisplay.textContent = attemptsLeft;

    guessButton.addEventListener("click", function() {
        const guess = guessInput.value.toUpperCase();
        guessInput.value = "";

        if (guess && guess.length === 1 && /^[A-Z]$/.test(guess)) {
            let correct = false;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guessedWord[i] = guess;
                    correct = true;
                }
            }
            wordBlanks.textContent = guessedWord.join(" ");

            if (!correct) {
                attemptsLeft--;
                attemptsDisplay.textContent = attemptsLeft;
                if (attemptsLeft === 0) {
                    message.textContent = "Game Over! The word was " + word;
                    guessButton.disabled = true;
                }
            } else if (!guessedWord.includes("_")) {
                message.textContent = "Congratulations! You've guessed the word!";
                guessButton.disabled = true;
            }
        } else {
            message.textContent = "Please enter a valid letter.";
        }
    });
});
