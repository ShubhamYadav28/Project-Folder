//keypress


let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(input){
    display.innerText ="you have Pressed : " + input.key
})