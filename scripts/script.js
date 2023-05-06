// JavaScript Document
console.log("Howdy!");

// VARIABELEN

var deMain = document.querySelector("main");
var button1992 = document.querySelector("ul li:nth-of-type(1) button");
var button1996 = document.querySelector("ul li:nth-of-type(2) button");
var button1996 = document.querySelector("ul li:nth-of-type(2) button");
var button2001 = document.querySelector("ul li:nth-of-type(3) button");
var button2003 = document.querySelector("ul li:nth-of-type(4) button");
var button2005 = document.querySelector("ul li:nth-of-type(5) button");
var button2008 = document.querySelector("ul li:nth-of-type(6) button");





// FUNCTIES
function goTo1992() {
    deMain.className = "go1992";
}
function goTo1996() {
    deMain.className = "go1996";
}
function goTo2001() {
    deMain.className = "go2001";
}
function goTo2003() {
    deMain.className = "go2003";
}
function goTo2005() {
    deMain.className = "go2005";
}
function goTo2008() {
    deMain.className = "go2008";
}




// EVENTLISTENER

button1992.addEventListener("click", goTo1992);
button1996.addEventListener("click", goTo1996);
button2001.addEventListener("click", goTo2001);
button2003.addEventListener("click", goTo2003);
button2005.addEventListener("click", goTo2005);
button2008.addEventListener("click", goTo2008);