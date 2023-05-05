// JavaScript Document
console.log("Howdy!");

var deMain = document.querySelector("main");


var button1992 = document.querySelector("ul li:nth-of-type(1) button");

button1992.addEventListener("click", goTo1992);

function goTo1992() {
    deMain.className = "go1992";
}


var button1996 = document.querySelector("ul li:nth-of-type(2) button");

button1996.addEventListener("click", goTo1996);

function goTo1996() {
    deMain.className = "go1996";
}

var button2001 = document.querySelector("ul li:nth-of-type(3) button");

button2001.addEventListener("click", goTo2001);

function goTo2001() {
    deMain.className = "go2001";
}

var button2003 = document.querySelector("ul li:nth-of-type(4) button");

button2003.addEventListener("click", goTo2003);

function goTo2003() {
    deMain.className = "go2003";
}

var button2005 = document.querySelector("ul li:nth-of-type(5) button");

button2005.addEventListener("click", goTo2005);

function goTo2005() {
    deMain.className = "go2005";
}

var button2008 = document.querySelector("ul li:nth-of-type(6) button");

button2008.addEventListener("click", goTo2008);

function goTo2008() {
    deMain.className = "go2008";
}