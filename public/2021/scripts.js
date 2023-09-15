particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 137,
      "density": {
        "enable": true,
        "value_area": 1025.8919341219544
      }
    },
    "color": {
      "value": "#14c4c6"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#14c4c6"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#14c4c6",
      "opacity": 0.4,
      "width": 3
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 146.17389821424212,
        "size": 10,
        "duration": 2,
        "opacity": 0.29234779642848424,
        "speed": 3
      },
      "repulse": {
        "distance": 50,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


// setup over-drawing
const ctx = document.querySelector('#particles-js > canvas').getContext('2d');
let grad;
onresize();
addEventListener('resize', onresize);

function onresize() {
  grad= ctx.createLinearGradient(0,0,ctx.canvas.width,0);
  grad.addColorStop(0,'#b20457');
  grad.addColorStop(0.5,'#011286')
  grad.addColorStop(1,'#378ba7');
}

// must be ran after Particles.js' own anim loop has began
// se we are always pushed after their drawings
requestAnimationFrame( anim );
function anim() {
  ctx.fillStyle = grad;
  ctx.globalCompositeOperation = "source-atop";
ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
  ctx.globalCompositeOperation = "source-over";
  requestAnimationFrame( anim );
}