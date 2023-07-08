const phrases = ["Programmer", "Web Developer", "App Developer"]
const typingSpeed = 150;
const deleteSpeed = 50;
const initialDisplayDuration = 0;
const displayDuration = 5000;
const pauseDuration = 500;

const typingElement = document.getElementById("typing-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let intervalID;

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
        if (isDeleting) {
            isDeleting = true;
            clearInterval(intervalID);
            intervalId = setInterval(type, deleteSpeed);
            return;
        }

        clearInterval(intervalId);
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }
        charIndex = 0;
        setTimeout(() => {
            isDeleting = false;
            typingElement.textContent = "";
            intervalId = setInterval(type, typingSpeed);
        }, pauseDuration);
        return;
    }
}

function clearTypingInterval() {
    clearInterval(intervalId);
}

setTimeout(() => {
    intervalId = setInterval(type, typingSpeed);
}, initialDisplayDuration);