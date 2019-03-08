// DOM Caching
var mainpage = document.getElementById('main');
var casepage = document.getElementById('case');
var left_nav = document.getElementById('nav1');
var right_nav = document.getElementById('nav2');
var case_item = document.getElementsByClassName('case_item');
var case_canvas = document.getElementById('case_canvas')

console.log("test");

for (var i = 0; i < case_item.length; i++) {
  case_item[i].addEventListener('click', openLink);
}

function openLink(){
  var newlink = this.case_item.getAttribute('data-value');
  console.log(`this is: ${newlink}`);
  case_canvas.src = newlink;
}

function teaseCase() {
  mainpage.style.left = "-15%";
  casepage.style.right = "-85%";
  casepage.style.cursor = "pointer";
  mainpage.style.cursor = "pointer";
  right_nav.style.display = "none";
  console.log("teaseCase");
}

function showCase() {
  mainpage.style.left = "-100%";
  casepage.style.right = "0%";
  casepage.style.cursor = "default";
  left_nav.style.display = "block";
  console.log("showCase");
}

function teaseMain() {
  mainpage.style.left = "-85%";
  casepage.style.right = "-15%";
  casepage.style.cursor = "pointer";
  mainpage.style.cursor = "pointer";
  left_nav.style.display = "none";
  console.log("tease");
}

function showMain() {
  mainpage.style.left = "0%";
  casepage.style.right = "-100%";
  mainpage.style.cursor = "default";
  right_nav.style.display = "block";
  console.log("tease");
}
