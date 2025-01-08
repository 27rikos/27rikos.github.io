// Select the Light and Dark mode elements and the dropdown icon
const lightModeButton = document.getElementById("light-mode");
const darkModeButton = document.getElementById("dark-mode");
const htmlElement = document.documentElement;
const themeIcon = document.getElementById("theme-icon");
const githubIcon = document.getElementById("github");

// Function to update theme and icon
function updateTheme(mode) {
    if (mode === "light") {
        htmlElement.setAttribute("data-bs-theme", "light");
        themeIcon.classList.remove("ti-moon");
        themeIcon.classList.add("ti-brightness-2");
        githubIcon.classList.remove('text-light');
        githubIcon.classList.add('text-dark');
    } else if (mode === "dark") {
        htmlElement.setAttribute("data-bs-theme", "dark");
        themeIcon.classList.remove("ti-brightness-2");
        themeIcon.classList.add("ti-moon");
        githubIcon.classList.remove('text-dark');
        githubIcon.classList.add('text-light');
    }
    // Save the selected theme to localStorage
    localStorage.setItem("theme", mode);
}

// Event listener for Light mode
lightModeButton.addEventListener("click", function () {
    updateTheme("light");
});

// Event listener for Dark mode
darkModeButton.addEventListener("click", function () {
    updateTheme("dark");
});

// Check if a theme is stored in localStorage
const storedTheme = localStorage.getItem("theme");

// Apply stored theme or default to light
if (storedTheme) {
    updateTheme(storedTheme);
} else {
    updateTheme("light"); // Default theme is light
}
