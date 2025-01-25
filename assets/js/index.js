const heading = "Welcome to Fadoiru Lexiana!";
const paragraph = "Explore our website and learn more about us.";

const typewriterHeading = document.getElementById("typewriter-heading");
const typewriterParagraph = document.getElementById("typewriter-paragraph");

let indexH = 0;
let indexP = 0;

function typeHeading() {
    if (indexH < heading.length) {
        typewriterHeading.textContent += heading.charAt(indexH);
        indexH++;
        setTimeout(typeHeading, 100);
    } else {
        setTimeout(typeParagraph, 500); // Wait before starting paragraph typing
    }
}

function typeParagraph() {
    if (indexP < paragraph.length) {
        typewriterParagraph.textContent += paragraph.charAt(indexP);
        indexP++;
        setTimeout(typeParagraph, 100);
    }
}

typeHeading(); // Start typing animation