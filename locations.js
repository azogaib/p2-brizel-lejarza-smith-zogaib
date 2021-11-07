// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

	// Get the parent of <span class="closebtn"> (<div class="alert">)
	var div = this.parentElement;

	// Set the opacity of div to 0 (transparent)
	div.style.opacity = "0";

	// Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
	setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var locationEl = document.getElementById('location')
console.log (formEl, inputEl, locationEl)

// attach submit to form event
// fetch weather data if there is a query
// call render weather function
formEl.onsubmit = function(e) {
  e.preventDefault()
  var locationQuery = inputEl.value.trim()
  if (!locationQuery) return
  fetch('https://dev.virtualearth.net/REST/v1/LocalSearch/?key=AsCUWWBo1QXafzTuhNUA0bI_1XJe1suHmn1_LdIjPlAYZhsb5VN8FBRbH2kOssMY&q=' + locationQuery)
  .then(function(res) {
    return res.json()
  })
  .then(function(res) {
    console.log(res)
    renderLocation(res)
    inputEl.value = ""
  })
  .catch(function(err) {
    console.log(err)
  })
}
