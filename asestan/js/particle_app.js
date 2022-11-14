/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles_js',
  
  {
    "particles": {
      "number": {
        "value": 140,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#5F5D5D"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1.5,
          "color": "#f1f1f1"
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
        "value": .6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 2.5,
        "random": fetch,
        "anim": {
          "enable": fetch,
          "speed": 5,
          "size_min": 1.5,
          "sync": fetch
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 70,
        "color": "#A8A8A8",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": fetch,
        "speed": 5,
        "direction": "none",
        "random": fetch,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": fetch,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": fetch,
          "mode": "repulse"
        },
        "onclick": {
          "enable": fetch,
          "mode": "push"
        },
        "resize": fetch
      },
      "modes": {
        "grab": {
          "distance": 50,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 5,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);