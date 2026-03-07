$(document).ready(function () {
  // Hide Section
  $("section").hide();
  $("#services-menu").hide();
  $("#complain-preview").hide();

  // Gallery
  $(".gallery-img").hide();
  $(".gallery-img").eq(0).show();
  let currImg = 0;

  // Nav Links
  $(".nav-link").on("click", function () {
    let target = $(this).attr("href");

    // Services
    if (target === "#services") {
      $("section").hide();
      $("#services-menu").slideToggle();
    } else {
      $("#services-menu").hide();
      $("section").hide();
      $(target).show();
    }
  });

  // Next
  $("#next").on("click", function () {
    $(".gallery-img").eq(currImg).hide();
    currImg++;
    if (currImg >= $(".gallery-img").length) currImg = 0;
    $(".gallery-img").eq(currImg).show();
  });

  // Prev
  $("#prev").on("click", function () {
    $(".gallery-img").eq(currImg).hide();
    currImg--;
    if (currImg < 0) currImg = $(".gallery-img").length - 1;
    $(".gallery-img").eq(currImg).show();
  });

  // Send
  $("#send-btn").on("click", function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let msg = $("#complain-msg").val();

    $("#preview-name").text(name);
    $("#preview-email").text(email);
    $("#preview-phone").text(phone);
    $("#preview-complain").text(msg);

    $("#complain-form").hide();
    $("#complain-preview").show();
  });

  // Back
  $("#edit-btn").on("click", function () {
    $("#complain-preview").hide();
    $("#complain-form").show();

    $("#name").val($("#preview-name").text());
    $("#email").val($("#preview-email").text());
    $("#phone").val($("#preview-phone").text());
    $("#complain-msg").val($("#preview-complain").text());
  });
});
