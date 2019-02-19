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
  function frame() {
   if (pos < 4) {
     clearInterval(id);
   } else {
     pos--;
     left_o.style.left = pos + "%";
     right_o.style.right = pos + "%";
    }
  }
  function fadeOut() {
    var fadeEffect = setInterval(fadeEffect, 5);

    function fadeEffect()
       if (center_o.style. > 0) {
           center_o.style.opacity -= 0.1;
       } else {
           clearInterval(fadeEffect);
       }
  }


/*  left_o.classList.add("l_o");
  right_o.classList.add("r_o");
  center_o.classList.add("c_o"); */
}

cto.addEventListener ("click", open_ses);
