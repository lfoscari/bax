var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container");
/*  Cliccando gli swatches cambia il backgroundColor del container  */

colorsources.forEach((s, index) => {
  s.addEventListener('click', () => {
    document.body.style.backgroundColor = colorsources[index].style.backgroundColor;
  })
})

// /*
//   Quando si preme sul bottome 'contact' appare la modal
// */
//
// var modal = document.getElementById("modal");
//
// function openModal() {
//   modal.classList.add("open");
// }
//
// function closeModal() {
//   modal.classList.remove("open");
// }
