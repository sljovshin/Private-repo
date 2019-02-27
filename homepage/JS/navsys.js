var nav_left = document.getElementById('nav_left');
var nav_top = document.getElementById('nav_top');
var nav_right = document.getElementById('nav_right');
var nav_bottom = document.getElementById('nav_bottom');
var sec1x1 = document.getElementById('sec1x1');
var sec1x2 = document.getElementById('sec1x2');
var sec1x3 = document.getElementById('sec1x3');
var sec2x1 = document.getElementById('sec2x1');
var sec2x2 = document.getElementById('sec2x2');
var sec2x3 = document.getElementById('sec2x3');
var x = 1;
var y = 1;

console.log(`x=${x}  y=${y} xy=${x+y}`);
change_blade()


//    Handles the increase of the x
nav_right.addEventListener ("click", xinc);
function xinc (){
  if (x >= 3) {
    x=3;
  } else {
    x++;
  }
  console.log(`x=${x}  y=${y} xy=${x+y}`);
  change_blade();
}

//    Handles the decrease of the x
nav_left.addEventListener ("click", xdec);
function xdec (){
  if (x <= 1) {
    x=1;
  } else {
    x--;
  }
  console.log(`x=${x}  y=${y} xy=${x+y}`);
  change_blade();
}

//    Handles the increase of the y
nav_bottom.addEventListener ("click", yinc);
function yinc (){
  if (y >= 10) {
    y = 10;
  } else {
    y = y+9;
  }
  console.log(`x=${x}  y=${y} xy=${x+y}`);
  change_blade();
}

//    Handles the decrease of the y
nav_top.addEventListener ("click", ydec);
function ydec (){
  if (y <= 1) {
    y = 1;
  } else {
    y = y-9;
  }
  console.log(`x=${x}  y=${y} xy=${x+y}`);
  change_blade();
}

//    Handles "moving" the viewport
function change_blade() {
  switch (y+x) {
    case 2:
      sec1x1.style.height = "100%"
      sec1x1.style.width = "100%"
      sec1x2.style.height = "0"
      sec1x2.style.width = "0"
      sec2x1.style.height = "0"
      sec2x1.style.width = "0"
      blade = "1x1";
      console.log(blade);
      break;
    case 3:
      sec1x1.style.height = "0"
      sec1x1.style.width = "0"
      sec1x2.style.height = "100%"
      sec1x2.style.width = "100%"
      sec1x3.style.height = "0"
      sec1x3.style.width = "0"
      sec2x2.style.height = "0"
      sec2x2.style.width = "0"
      blade = "1x2";
      console.log(blade);
      break;
    case 4:
      sec1x2.style.height = "0"
      sec1x2.style.width = "0"
      sec1x3.style.height = "100%"
      sec1x3.style.width = "100%"
      sec2x3.style.height = "0"
      sec2x3.style.width = "0"
       blade = "1x3";
       console.log(blade);
      break;
    case 11:
      sec2x1.style.height = "100%"
      sec2x1.style.width = "100%"
      sec1x1.style.height = "0"
      sec1x1.style.width = "0"
      sec2x2.style.height = "0"
      sec2x2.style.width = "0"

      blade = "2x1";
      console.log(blade);
      break;
    case 12:
      sec2x1.style.height = "0"
      sec2x1.style.width = "0"
      sec2x2.style.height = "100%"
      sec2x2.style.width = "100%"
      sec2x3.style.height = "0"
      sec2x3.style.width = "0"
      sec1x2.style.height = "0"
      sec1x2.style.width = "0"
      blade = "2x2";
      console.log(blade);
      break;
    case 13:
      sec2x2.style.height = "0"
      sec2x2.style.width = "0"
      sec2x3.style.height = "100%"
      sec2x3.style.width = "100%"
      sec1x3.style.height = "0"
      sec1x3.style.width = "0"
      blade = "2x3";
      console.log(blade);
  }

}
