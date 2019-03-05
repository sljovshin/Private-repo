var item_panel = document.getElementById('item_panel');
var main_view = document.getElementById('main_view');
var items_in_panel = [1,2,3,4,5,6,]
var items_in_view = [7,8,9,10,11,12]


/*  Populate Item Panel based on items array*/
for (var i = 0; i < items_in_panel.length; i++) {
    var item_in_panel = `<div class="item_in_panel" draggable="true" ondragstart="drag(event)"> <p> ${items_in_panel[i]} </p> </div>`;
    item_panel.innerHTML = item_panel.innerHTML + item_in_panel;
}
for (var i = 0; i < items_in_view.length; i++) {
    var item_in_view = `<div class="item_in_view" draggable="true" ondragstart="drag(event)"> <p> ${items_in_view[i]} </p> </div>`;
    main_view.innerHTML = main_view.innerHTML + item_in_view;
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
