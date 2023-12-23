const $accordionHeaderImage = document.querySelectorAll(
  ".accordion-header__image"
);

$accordionHeaderImage.forEach((e) => {
  e.addEventListener("click", (event) => {
    const $content = event.target.parentElement.nextElementSibling;
    const imageSrc = event.target.getAttribute("src");

    if (imageSrc === "assets/images/icon-minus.svg") {
      closePanel($content);
      event.target.setAttribute("src", "assets/images/icon-plus.svg");
    } else {
      openPanel($content);
      event.target.setAttribute("src", "assets/images/icon-minus.svg");
    }
  });
});


function addClass(el, className) {
  el.classList.add(className);
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function closePanel($content) {
  removeClass($content, "accordion-body--active");
  addClass($content, "accordion-body");
}

function openPanel($content) {
  addClass($content, "accordion-body--active");
  removeClass($content, "accordion-body");
}
