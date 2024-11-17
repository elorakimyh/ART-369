// when the slider changes value...
document.getElementById("slider").onchange = function() {

  // first get its value and store that in a variable called size.
  var size = this.value;

  // then, update the circle's height to be equal to the size variable
  document.getElementById("circle").style.height = size + "px";

  // then, update the circle's width to be equal to the size variable
  document.getElementById("circle").style.width = size + "px";

}
