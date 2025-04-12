document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode for specific elements
    document.querySelector(".head").classList.toggle("dark-mode");
    document.querySelectorAll(".sorting-algo button").forEach(button => {
        button.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".array p").forEach(p => {
        p.classList.toggle("dark-mode");
    });
    document.querySelector(".visual-container").classList.toggle("dark-mode");
});

// Function to reapply dark mode styles to buttons
function reapplyDarkMode() {
    document.querySelectorAll(".sorting-algo button").forEach(button => {
        if (document.body.classList.contains("dark-mode")) {
            button.style.backgroundColor = ""; // Reset inline styles
            button.style.color = "";
            button.classList.add("dark-mode");
        } else {
            button.style.backgroundColor = ""; // Reset inline styles
            button.style.color = "";
            button.classList.remove("dark-mode");
        }
    });
}