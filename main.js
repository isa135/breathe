console.log("Chegou no main.js")

var seconds = 0;
var el = document.getElementById('seconds-counter');

// document.querySelector('#app').innerHTML = `
//   <h1>Breathe pause</h1>
// `

const teste = document.querySelector("#circle");
var refreshIntervalId;

document.getElementById("btnStart").addEventListener("click", function( event ) {
  // document.getElementById("btnStart").style.display = "none";
  document.getElementById("btnStart").setAttribute("disabled","disabled");
  console.log("Clicou")
  teste.style.animation = "";
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
      // document.getElementById("btnStart").style.display = "block";
      document.getElementById("btnStart").removeAttribute("disabled");
    }
}

function animacao() {
  teste.style.animation = "hide2 10s ease infinite"
}

