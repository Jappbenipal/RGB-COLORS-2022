// RGB Colors

document.getElementById("previewBtn").addEventListener("click", previewClicked);

function previewClicked() {
  // input
  var red1 = document.getElementById("red").value;
  var green1 = document.getElementById("green").value;
  var blue1 = document.getElementById("blue").value;

  // process - Create a variable to hold a color:  rgb(255, 255, 255)
  var myColour = `rgb(${red1}, ${green1}, ${blue1})`;

  console.log(myColour);
  // output
  document.getElementById("numbers").innerHTML = myColour;
  document.getElementById("display").style.background = myColour;
}
