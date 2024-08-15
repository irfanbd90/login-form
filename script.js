window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loadingScreen");
    const content = document.getElementById("content");

    // Fade out the loading screen
    loadingScreen.style.transition = "opacity 1s ease";
    loadingScreen.style.opacity = "0";

    // After the fade-out transition, hide the loading screen and show the content
    setTimeout(() => {
        loadingScreen.style.display = "none";
        content.style.display = "block";
    }, 1000); // The timeout should match the transition duration (1s)
});
