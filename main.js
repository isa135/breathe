import './style.css'

var seconds = 0;
var el = document.getElementById('seconds-counter');

// document.querySelector('#app').innerHTML = `
//   <h1>Breathe pause</h1>
// `

const teste = document.querySelector("#circle");
var refreshIntervalId;

document.getElementById("circle").addEventListener("click", function( event ) {
  console.log("Clicou no botão");
  // event.target.innerHTML = "Total de cliques: " + event.detail;
  teste.style.animation = "";
  // setTimeout(() => teste.style.animation = "hide2 8s ease infinite", 0);
  setTimeout(animacao(), 0);

  seconds = 0;
  refreshIntervalId = setInterval(incrementSeconds, 1000);
}, false);

function incrementSeconds() {
    seconds += 1;
    // el.innerText = "You have been here for " + seconds + " seconds.";
    if (seconds === 60) {
      console.log("60 segundos")
      teste.style.animation = ""
      clearInterval(refreshIntervalId);
      el.innerText = "";
    }
}

function animacao() {
  teste.style.animation = "hide2 8s ease infinite"
}

