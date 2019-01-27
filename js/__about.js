var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container"),
  topics = document.querySelectorAll(".introduction span"),
  image_target = document.querySelector(".gun");

/*  Cliccando gli swatches cambia il backgroundColor del container  */

document.body.style.backgroundColor = localStorage.getItem("backgroundColor");

colorsources.forEach((s, index) => {
  s.addEventListener("click", () => {
    document.body.style.transition = "background-color linear .25s";
    var c = colorsources[index].style.backgroundColor;
    document.body.style.backgroundColor = c;
    localStorage.setItem("backgroundColor", c);
  });
});

/* In hover sui topic l'immagine sotto cambia */

var image, temp;

topics.forEach((t) => {
  t.addEventListener('mouseover', (event) => {
    image = event.target.getAttribute('data-image');
    if(image != temp) {
      image_target.setAttribute('src', image);
      image = temp;
    }
  })
});

// /* Il div che contiene le immagini che cambiano all'hover dei test è alto quanto la prima immagine */
//
// var imageContainer = document.querySelector(".project-link__about");
// var imageHeight = imageContainer.querySelector("img").offsetHeight;
// imageContainer.style.height = imageHeight + "px";
