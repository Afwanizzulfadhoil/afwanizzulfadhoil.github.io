document.addEventListener("DOMContentLoaded", () => {
    // Define the text for the paragraph
    const paragraphTexts = [
        "Our platform is here to bring ideas to life.",
        "Learn more about how we can help you.",
        "Innovation starts with inspiration.",
        "Empowering creativity through technology."
    ];

    const typewriterParagraph = document.getElementById("typewriter-paragraph");

    let paragraphIndex = 0;
    let isDeleting = false; // Track if we are deleting or typing
    let charIndex = 0; // Current character index
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


function toAboutPage(){
    window.location.href = "about.html";
}