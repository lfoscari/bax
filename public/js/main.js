var colorsources=document.querySelectorAll(".swatches span"),project_link=document.querySelector(".project-link"),image_project=project_link.querySelector("img"),left_label=document.querySelector(".label"),isMobile=window.innerWidth<980,so=0;function Marquee(){tp.setAttributeNS(null,"startOffset",so+"%"),so<=0&&(so=50),so-=.025,requestAnimationFrame(Marquee)}requestAnimationFrame(Marquee);var projects=[{title:"Fendi - #FF",image:"img/fendi.png",url:"works.html"},{title:"Giorgio Armani - Le Jeu",image:"img/ea.jpg",url:"works.html"},{title:"Capod'opera - Milan Design Week",image:"img/armani.jpg",url:"works.html"},{title:"Diesel - New denim",image:"img/diesel.jpg",url:"works.html"}];if(isMobile){i=0;setInterval(function(){project_link.setAttribute("href",projects[i].url),image_project.setAttribute("src",projects[i].image),left_label.innerHTML=projects[i].title,i=(i+1)%projects.length},750)}else{var view_height_half=window.innerHeight/2,view_height_quart=view_height_half/2,i=0;onmousemove=function(e){var r=e.clientY;t=i,(i=r<view_height_quart?0:r<view_height_half?1:r<view_height_half+view_height_quart?2:3)!=t&&(project_link.setAttribute("href",projects[i].url),image_project.setAttribute("src",projects[i].image),left_label.innerHTML=projects[i].title)}}document.body.style.backgroundColor=localStorage.getItem("backgroundColor"),colorsources.forEach((e,t)=>{e.addEventListener("click",()=>{document.body.style.transition="background-color linear .25s";var e=colorsources[t].style.backgroundColor;document.body.style.backgroundColor=e,localStorage.setItem("backgroundColor",e)})});