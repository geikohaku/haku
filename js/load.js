
/*
window.onload = function() {
  const flower = document.getElementById('loading');
  flower.classList.add('loaded');
}

*/

setTimeout('endLoading()', 2100);

function endLoading(){
  const icon = document.getElementById('load');
  icon.classList.add('loaded');
}