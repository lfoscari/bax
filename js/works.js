var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container"),
  gif_works = container.querySelectorAll(".gif img");

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

/*  Tra i works ce ne solo alcuni che in hover hanno una gif  */

gif_works.forEach((g) => {
  var static_path = g.getAttribute("data-src"),
      gif_path = g.getAttribute("data-hover");
  g.addEventListener("mouseover", (e) => {
    g.setAttribute("src", gif_path);
    g.setAttribute("data-hover", static_path);
  })
  g.addEventListener("mouseleave", (e) => {
    g.setAttribute("src", static_path);
    g.setAttribute("data-hover", gif_path);
  })
})
