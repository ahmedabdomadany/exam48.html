
function getValue() {
  // Get the input element
  var input = document.getElementById("myInput");

  // Get the value of the input
  var value = input.value;

  // Display the value
  console.log(value);
  // or you can use alert(value) to display it in an alert box


// Create a variable and initialize it with a value or element
let myElement = document.getElementById('mmyInput');
document.getElementById("text").innerHTML =myElement;
// Check if the element is not null before adding an event listener
if (myElement !== null) {
  myElement.addEventListener('click', myFunction);
} else {
    document.getElementById("text").innerHTML=myElement;
  console.log("Element not found!");
}

function myFunction() {
    document.getElementById("text").innerHTML =myElement;
  console.log("Element clicked!");
}
}
