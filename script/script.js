// Get elements
var popup = document.getElementById("popup");
var popupDay = document.getElementById("popupDay");
var opneButton = document.getElementById("openWindow");
var opneButtonDay = document.getElementById("openWindowDay");
var closeButton = document.getElementsByClassName("close")[0];
var closeButtonDay = document.getElementsByClassName("closeDay")[0];

// Open popup at click
opneButton.onclick = function() {
  popup.style.display = "block";
}

// Open popup at click for small view
opneButtonDay.onclick = function() {
  popupDay.style.display = "block";
}

// Close popup at click on X
closeButton.onclick = function() {
  popup.style.display = "none";
}

// Close popup at click on X for small view
closeButtonDay.onclick = function() {
  popupDay.style.display = "none";
}

// Close popup at click outside the popup
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

// Close popup at click outside the popup
window.onclick = function(event) {
  if (event.target == popupDay) {
    popupDay.style.display = "none";
  }
}