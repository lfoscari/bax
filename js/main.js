var colorsources = document.querySelectorAll(".swatches span"),
  container = document.querySelector(".container"),
  project_link = document.querySelector(".project-link"),
  image_project = project_link.querySelector("img"),
  left_label = document.querySelector(".label"),
  /*  Questa struttura come si può portare su wordpress?  */
  projects = [{
      title: "Fendi - #FF",
      image: "img/fendi.png",
      url: "works.html"
    },
    {
      title: "Giorgio Armani - Le Jeu",
      image: "img/ea.jpg",
      url: "works.html"
    },
    {
      title: "Capod'opera - Milan Design Week",
      image: "img/armani.jpg",
      url: "works.html"
    },
    {
      title: "Diesel - New denim",
      image: "img/diesel.jpg",
      url: "works.html"
    }
  ];

/*  Cliccando gli swatches cambia il backgroundColor del container  */

colorsources.forEach((s, index) => {
  s.addEventListener('click', () => {
    container.style.backgroundColor = colorsources[index].style.backgroundColor;
  })
})

/*
  I base alla posizione sull'asse y del mouse cambiano l'immagine
  il link e il testo in pagina.
  Divido la pagina in 4 sezioni e ogni volta che il mouse si sposta
  controllo se si trovi in una sezione diversa da quella precedente
*/

var view_height_half = window.innerHeight / 2,
    view_height_quart = view_height_half / 2,
    i = 0;

onmousemove = function(e) {
  var y = e.clientY;
      t = i;

  if (y < view_height_quart)
    i = 0;
  else if (y < view_height_half)
    i = 1;
  else if (y < view_height_half + view_height_quart)
    i = 2;
  else
    i = 3;

  if(i != t) {
    project_link.setAttribute("href", projects[i].url);
    image_project.setAttribute("src", projects[i].image);
    left_label.innerHTML = projects[i].title;
  }
};
