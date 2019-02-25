var left_o = document.getElementById('l');
var right_o = document.getElementById('r');
var center_o = document.getElementById('c');
var open_bg = document.getElementsByClassName('open_bg')
var cto = document.getElementById('click_to_open');
var clicked = false;
cto.addEventListener ("click", open_ses);

function open_ses() {

  if (clicked == false) {
  left_o.style.position = "absolute"
  right_o.style.position = "absolute"
  var pos = 30;
  var id1 = setInterval(frame1, 10);
  var anim_done1 = false;
  function frame1() {
   if (pos < 4) {
     clearInterval(id1);
     anim_done1 = true;
   }
   else {
     pos = pos - 0.7;
     left_o.style.left = pos + "%";
     right_o.style.right = pos + "%";
    }
    var id2 = setInterval(frame2, 1);
    function frame2() {
      if (anim_done1 == true) {
        center_o.style.opacity --;
      }
    }
    clicked = true;
  }
 }
}

cto.addEventListener ("click", open_ses);
