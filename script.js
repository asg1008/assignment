const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        // Rotate the hovered card
        card.style.transition = "transform 1s ease"; // Set the transition for rotation
        card.style.transform = "rotateY(360deg)"; // Rotate to 360 degrees
    });

    card.addEventListener("mouseleave", function () {
        // Reset the rotation when the mouse leaves
        card.style.transform = "rotateY(0deg)"; // Reset rotation
    });
});
