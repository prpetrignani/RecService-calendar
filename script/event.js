const eventExpand = document.getElementById('eventExpand');

eventExpand.addEventListener('click', function() {
  this.classList.toggle('basicEvent');
  this.classList.toggle('largeEvent');
});