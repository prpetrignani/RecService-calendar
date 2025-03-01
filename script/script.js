// Ottieni gli elementi
var finestraModale = document.getElementById("finestraModale");
var bottoneApri = document.getElementById("apriFinestra");
var bottoneChiudi = document.getElementsByClassName("chiudi")[0];

// Quando l'utente clicca sul pulsante, apri la finestra modale
bottoneApri.onclick = function() {
  finestraModale.style.display = "block";
}

// Quando l'utente clicca sulla X, chiudi la finestra modale
bottoneChiudi.onclick = function() {
  finestraModale.style.display = "none";
}

// Quando l'utente clicca al di fuori della finestra modale, chiudila
window.onclick = function(event) {
  if (event.target == finestraModale) {
    finestraModale.style.display = "none";
  }
}