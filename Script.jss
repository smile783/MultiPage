// ===================================
// COLLEGE STUDENT PORTAL
// COMMON JAVASCRIPT
// ===================================


// 1. CURRENT YEAR

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


// 2. MOBILE MENU

function toggleMenu() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }
}


// 3. LOGOUT FUNCTION

function logout() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("studentId");

    alert("You have logged out successfully!");

    window.location.href = "login.html";
}


// 4. CHECK LOGIN

function checkLogin() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
    }
}


// 5. DARK MODE

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const mode = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("theme", mode);
}


// 6. LOAD SAVED THEME

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// 7. WELCOME MESSAGE

function welcomeStudent() {

    const studentId = localStorage.getItem("studentId");

    const welcomeElement = document.getElementById("welcomeStudent");

    if (welcomeElement && studentId) {
        welcomeElement.textContent = "Welcome, " + studentId;
    }
}

welcomeStudent();


// 8. CONSOLE MESSAGE

console.log("College Student Portal Loaded Successfully!");
