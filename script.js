const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is my biggest blessing. I love you.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button unclickable in a playful way
noBtn.addEventListener("click", () => {
    alert("Nice try! But you can't click me that easily!");
});

// Optional: Add a hover effect for desktop users
noBtn.addEventListener("mouseover", () => {
    if (window.innerWidth > 768) { // Only apply this for desktop screens
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Add a margin to prevent the button from touching the edges
        const margin = 10;
        const maxX = wrapperRect.width - noBtnRect.width - margin;
        const maxY = wrapperRect.height - noBtnRect.height - margin;

        // Ensure randomX and randomY are within the wrapper bounds
        const randomX = Math.min(Math.floor(Math.random() * maxX) + margin, maxX);
        const randomY = Math.min(Math.floor(Math.random() * maxY) + margin, maxY);

        noBtn.style.position = "absolute"; // Temporarily make it absolute
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }
});

// Reset button position on mouseout
noBtn.addEventListener("mouseout", () => {
    if (window.innerWidth > 768) { // Only apply this for desktop screens
        noBtn.style.position = "static"; // Reset to default positioning
    }
});
