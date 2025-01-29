document.addEventListener("DOMContentLoaded", () => {
    // Define the text for the heading and paragraph
    const headingText = "Welcome To Fadoiru Lexiana!";
    const paragraphTexts = [
        "Our platform is here to bring ideas to life.",
        "Learn more about how we can help you.",
        "Innovation starts with inspiration.",
        "Empowering creativity through technology."
    ];

    const typewriterHeading = document.getElementById("typewriter-heading");
    const typewriterParagraph = document.getElementById("typewriter-paragraph");

    // Set heading text (static)
    typewriterHeading.textContent = headingText;

    let paragraphIndex = 0; // Current paragraph index
    let charIndex = 0; // Current character index for typing
    let isDeleting = false; // Track if we are deleting or typing
    const typingSpeed = 100; // Speed of typing (ms per character)
    const deletingSpeed = 50; // Speed of deleting (ms per character)
    const delayBetweenTexts = 2000; // Delay before switching to the next text

    function typeEffect() {
        // Get the current text for the paragraph
        const currentText = paragraphTexts[paragraphIndex];

        if (!isDeleting) {
            // Typing phase
            typewriterParagraph.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            // Check if typing is done
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, delayBetweenTexts); // Wait before deleting
            }
        } else {
            // Deleting phase
            typewriterParagraph.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            // Check if deleting is done
            if (charIndex === 0) {
                isDeleting = false;
                paragraphIndex = (paragraphIndex + 1) % paragraphTexts.length; // Move to the next paragraph
            }
        }

        // Recursively call the function with different speeds for typing and deleting
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeEffect, speed);
    }

    // Start the typewriter effect
    typeEffect();
});

// Redirect function for the button
function toAboutPage() {
    window.location.href = "about.html";
}




