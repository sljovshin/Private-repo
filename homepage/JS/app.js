var left_o = document.getElementById('l');
var right_o = document.getElementById('r');
var center_o = document.getElementById('c');
var cto = document.getElementById('click_to_open');

cto.addEventListener ("click", open_ses);

function open_ses() {
  left_o.style.position = "absolute"
  right_o.style.position = "absolute"
  var pos = 30;
  var id = setInterval(frame, 5);
  var anim_done = false;
  function frame() {
   if (pos < 4) {
     clearInterval(id);
     anim_done = true;
   } else {
     pos--;
     left_o.style.left = pos + "%";
     right_o.style.right = pos + "%";
    }
  }
  if (anim_done == true) {
    function fadeOut() {
      var fadeEffect = setInterval(fadeEffect, 5);
      function fadeEffect()
         if (center_o.style.opacity > 0) {
             center_o.style.opacity -= 0.1;
         } else {
             clearInterval(fadeEffect);
         }
    }
  }

cto.addEventListener ("click", open_ses);
