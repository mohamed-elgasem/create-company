let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
if (window.scrollY >= section.offsetTop -510) {
console.log("Reached our-skills our-skills");
spans.forEach((span) => {
span.style.width = span.dataset.width;
})
}
};
