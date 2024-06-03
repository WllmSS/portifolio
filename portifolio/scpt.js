document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const contentDivs = document.querySelectorAll(".content div");
    const links = document.querySelectorAll('.nav ul li');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("id").replace("-link", "-content");
            const targetDiv = document.getElementById(targetId);

            contentDivs.forEach(function (div) {
                div.classList.remove("active");
            });
            targetDiv.classList.add("active");

            links.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    links.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                });
            });

        });
    });
});



