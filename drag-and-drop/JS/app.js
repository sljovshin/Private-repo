var item_panel = document.getElementById('item_panel');
var items = [1,2,3,4,5,6,8,9,10]


/*  Populate Item Panel based on items array*/
for (var i = 0; i < items.length; i++) {
    var item = `<div class="item" draggable="true" ondragstart="drag(event)"> <p> ${items[i]} </p> </div>`
    item_panel.innerHTML = item_panel.innerHTML + item;
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
