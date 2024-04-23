// Sticky navbar
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    var header = document.querySelector("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

function checkScroll() {
// Get the current scroll position
var scrollPosition = window.scrollY || window.pageYOffset;
if (scrollPosition >= 5) {
  document.getElementById('page2a').style.animation = 'slidein 1s ease-out 0s 1 normal forwards';
  document.getElementById('page2b').style.animation = 'slidein 1s ease-out 0.2s 1 normal forwards';
  document.getElementById('page2c').style.animation = 'slidein 1s ease-out 0.6s 1 normal forwards';
  document.getElementById('page2d').style.animation = 'slidein 1s ease-out 0.8s 1 normal forwards';
}
if (scrollPosition >= 1000) {
  document.getElementById('page3a').style.animation = 'fade 1s ease-out 0s 1 normal forwards';
  document.getElementById('page3b').style.animation = 'fade 1s ease-out 0.2s 1 normal forwards';
  document.getElementById('image-container').style.animation = 'fade 1s ease-out 0.6s 1 normal forwards';
}
if (scrollPosition >= 1800) {
  document.getElementById('page4t').style.animation = 'slidey 1s ease-out 0s 1 normal forwards';
  document.getElementById('page4g').style.animation = 'slidey 1s ease-out 0.2s 1 normal forwards';
  document.getElementById('page4b').style.animation = 'slidey 1s ease-out 0.5s 1 normal forwards';
}
if (scrollPosition >= 2600) {
  document.getElementById('page5t').style.animation = 'shake 0.2s linear 0.5s 3 normal forwards';

}


