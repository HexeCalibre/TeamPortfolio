const phrases = ["Web Developer?", "Mobile App Developer?", "Game Developer?", "Ethical Hacker?"];
const typingSpeed = 150;
const deleteSpeed = 50;
const initialDisplayDuration = 0;
const displayDuration = 3000;
const pauseDuration = 500;

const typingElement = document.getElementById("typing-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let intervalId;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentDisplayDuration = (phraseIndex === 0) ? initialDisplayDuration : displayDuration;

    if (!isDeleting && charIndex < currentPhrase.length) {
        typingElement.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
    } else {
        if (!isDeleting) {
            isDeleting = true;
            clearInterval(intervalId);
            intervalId = setInterval(type, deleteSpeed);
            return;
        }

        clearInterval(intervalId);
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0; // Restart the loop
        }
        charIndex = 0; // Reset the character index
        setTimeout(() => {
            isDeleting = false;
            typingElement.textContent = ''; // Clear the text before starting to type the next word
            intervalId = setInterval(type, typingSpeed);
        }, pauseDuration);
        return;
    }
}

function clearTypingInterval() {
    clearInterval(intervalId);
}

// Wait for the initial display duration before starting the typing process
setTimeout(() => {
    intervalId = setInterval(type, typingSpeed);
}, initialDisplayDuration);


// Scroll Animation
ScrollReveal({ duration: 1000 });
ScrollReveal().reveal('.hero' ,   { interval: 16, reset: true });