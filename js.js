document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        document.getElementById("start").scrollIntoView({ behavior: "smooth" });
    });
});
