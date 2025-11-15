// Toggle mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
// Show a success message when forms are submitted
function handleFormSubmission(formId, successId) {
    const form = document.getElementById(formId);
    const successMessage = document.getElementById(successId);
    form.addEventListener("submit", () => {
        successMessage.hidden = false;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    handleFormSubmission("leadForm", "leadSuccess");
    handleFormSubmission("contactForm", "contactSuccess");
});
