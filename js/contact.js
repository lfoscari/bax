var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container");
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
