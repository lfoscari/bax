var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container"),
  topics = document.querySelectorAll(".introduction span"),
  image_target = document.querySelector(".gun");

/*  Cliccando gli swatches cambia il backgroundColor del container  */

colorsources.forEach((s, index) => {
  s.addEventListener('click', () => {
    document.body.style.backgroundColor = colorsources[index].style.backgroundColor;
  })
})

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
