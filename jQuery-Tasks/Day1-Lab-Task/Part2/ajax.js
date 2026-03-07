$(document).ready(function () {
  $("#load-btn").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        $("#result").html(
          "<strong>Title:</strong> " +
            data.title +
            "<br><strong>Body:</strong> " +
            data.body,
        );
      })
      .fail(function () {
        $("#result").text("Something went wrong.");
      });
  });
});
