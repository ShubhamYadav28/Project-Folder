// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  // Get the document height and viewport height
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  
  // Set the width of the progress bar to the percentage scrolled
  document.getElementById("myBar").style.width = scrolled + "%";
}
