var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container");
/*  Cliccando gli swatches cambia il backgroundColor del container  */

colorsources.forEach((s, index) => {
  s.addEventListener('click', () => {
    document.body.style.backgroundColor = colorsources[index].style.backgroundColor;
  })
})
