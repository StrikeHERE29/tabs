let btns = document.querySelectorAll(".buttons");
let boardText = document.querySelectorAll(".board");
let infoContainers = document.querySelectorAll(".about, .another-about");
let right = document.querySelector("#right");
let left = document.getElementById("left");
let aboutCenters = document.querySelectorAll(".about-center")

infoContainers.forEach(function(infoContainer) {
    infoContainer.addEventListener("click", function(e) {
        let id = e.target.dataset.id;

        // Switch on click to change background color for buttons
        if (id) {
            btns.forEach(function(btn) {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            // Remove the text from board
            boardText.forEach(function(board) {
                board.classList.remove("active");
            });

            // Add the text for the specific board
            let element = document.getElementById(id);
            if (element) {
                element.classList.add("active");
            }
        }
    });
});


right.addEventListener("click", function(e) {
    aboutCenters.forEach(function(aboutCenter) {
        if (!aboutCenter.classList.contains("active")) {
            aboutCenter.classList.add("active");
        } else {
            aboutCenter.classList.remove("active");
        }
    });
});