document.addEventListener("DOMContentLoaded", function() {
    // Get all the navbar links
    const navbarLinks = document.querySelectorAll(".navbar-nav a.nav-link");

    // Attach a click event listener to each link
    navbarLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Find the navbar toggle button
            const navbarToggle = document.querySelector(".navbar-toggler");

            // Reset the aria-expanded attribute to false
            navbarToggle.setAttribute("aria-expanded", "false");

            const navbarCollapse = document.querySelector(".navbar-collapse");
            navbarCollapse.setAttribute("class", "collapse navbar-collapse")
        });
    });
});


const line = document.querySelectorAll('.line');

        line[line.length - 1].addEventListener('animationend', () => {
            setTimeout(() => {
                line.forEach(line => {
                    line.style.animation = 'none';
                    void line.offsetWidth;
                    line.style.animation = 'drawLine 3s linear forwards';
                });
            }, 2000);
        });
