// getting the html elements
let decrementBtn = document.querySelector("#decrementBtn");
let incrementBtn = document.querySelector("#incrementBtn");
let resetBtn = document.querySelector("#resetBtn");
let displayValue = document.querySelector("#displayValue");

// for decrement button click
decrementBtn.addEventListener("click", function (){
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    console.log("Negative value not allowed");
  }
});

// for increment button click
incrementBtn.addEventListener("click",function (){
  const value = Number(displayValue.innerText);
  if (value <= 9) {
      displayValue.innerText = value + 1;
} else {
      console.log("10+ values are not allowed");
  }
});

// for reset button click
resetBtn.addEventListener("click",function (){
  displayValue.innerText = 0;
});