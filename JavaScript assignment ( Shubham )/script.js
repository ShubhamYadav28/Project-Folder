// Move the Image
const image = document.getElementById("my-image");
let x = 0;
let y = 0;

function moveImage(event) {
  switch (event.keyCode) {
    case 37: // left arrow key
      x -= 10;
      break;
    case 38: // up arrow key
      y -= 10;
      break;
    case 39: // right arrow key
      x += 10;
      break;
    case 40: // down arrow key
      y += 10;
      break;
  }
  
  image.style.left = x + "px";
  image.style.top = y + "px";
}

document.addEventListener("keydown", moveImage);
