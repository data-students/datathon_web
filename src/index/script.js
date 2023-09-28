import './style.css';
import anime from 'animejs/lib/anime.es.js';

let pathEls = document.querySelectorAll('path');
for (let i = 0; i < pathEls.length; i++) {
  let pathEl = pathEls[i];
  let offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(2000, 4000),
    delay: anime.random(0, 1000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    autoplay: true
  });
}

document.getElementById("page-language").onclick = showLanguages

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showLanguages() {
  document.getElementById("other-languages").classList.toggle("show");
}