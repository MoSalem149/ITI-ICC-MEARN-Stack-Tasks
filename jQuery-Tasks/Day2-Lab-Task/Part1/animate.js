$(document).ready(function () {
  // Animate
  $("#car").animate(
    // CSS Prop
    { left: "345px" },
    {
      // Time
      duration: 1500,
      //   Move
      step: function (pos) {
        $("#pos-value").text(Math.round(pos));
      },
    },
  );
});
