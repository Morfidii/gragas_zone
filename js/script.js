function hello(){
	alert("Hekllkiasf0");
}

var elem;
var x;
var i;
var o;

function closeElement() {
	x = document.getElementById("gallery");
	x.className = "closed";
}

function openElement() {
	x = document.getElementById("gallery");
	x.className = "open";
}

function photoGallery(elem){
	x = document.getElementById("gallery");
	i = x.querySelector("img");
	o = x.querySelector("p");
	o.innerHTML = elem.alt;
	i.src = elem.src;
	console.log(o);
	console.log(i.src);
}