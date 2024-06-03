document.addEventListener("DOMContentLoaded", function() {
    // Array of HTML pages (this would be dynamically generated in a real application)
    const pages = ["Articles/article1.html", "Articles/article2.html"];

    const pageList = document.getElementById("pageList");

    pages.forEach(function(page, index) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = page;
        link.textContent = "කතා වස්තුව - " + (index +1);
        listItem.appendChild(link);
        pageList.appendChild(listItem);
    });
});