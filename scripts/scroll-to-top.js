
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollHeight = 500; // Pixels
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}