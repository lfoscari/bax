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
