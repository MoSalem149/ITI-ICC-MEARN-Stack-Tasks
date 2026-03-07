$(document).ready(function () {
  // Draggable
  $("#rabbit").draggable();
  // Droppable
  $("#black-hole").droppable({
    // Drop
    drop: function (e, ui) {
      // Disappear
      ui.draggable.fadeOut(600);
    },
  });
});
