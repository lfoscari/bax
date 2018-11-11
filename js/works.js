var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container"),
  gif_works = container.querySelectorAll(".gif img");

/*  Cliccando gli swatches cambia il backgroundColor del container  */

colorsources.forEach((s, index) => {
  s.addEventListener('click', () => {
    container.style.backgroundColor = colorsources[index].style.backgroundColor;
  })
})


/*  Tra i works ce ne solo alcuni che in hover hanno una gif  */

gif_works.forEach((g) => {
  var static_path = g.getAttribute("src"),
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
