document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll("#menu a");

    links.forEach(link => {

        link.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#0b6623";
            this.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
            this.style.transform = "scale(1)";
        });

    });

});