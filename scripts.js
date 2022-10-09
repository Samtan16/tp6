// JavaScript for tp6

// function to load a file from the URL "fromFile" into the object indentified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

window.onload = function() {
  
  document.querySelector("#header h1").classList.add("tp");
  
  document.querySelector("#header h1").onclick = function() {
    this.classList.toggle("orange");
  } 
  
  document.querySelector("#displayfunc #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #directions ol").innerHTML += "<li>375 degrees F</li>";
  
  loadFileInto("ingredients.html", "#ingredients ul");
  
}

// end window.onload 