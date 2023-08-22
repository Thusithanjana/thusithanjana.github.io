document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("homeLink");
    const aboutLink = document.getElementById("aboutLink");
    const landingPage = document.getElementById("landingPage");
    const aboutPage = document.getElementById("aboutPage");

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        landingPage.classList.remove("hidden");
        aboutPage.classList.add("hidden");
    });

    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        landingPage.classList.add("hidden");
        aboutPage.classList.remove("hidden");
    });
});
