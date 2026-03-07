$(document).ready(function () {
  // Counter
  let angle = 0;
  let scale = 1;
  // Animate
  const interval = setInterval(function () {
    // Increment
    angle += 10;
    scale += 0.05;
    // Transform
    $("#flower").css({
      transform: `rotate(${angle}deg) scale(${scale})`,
    });
    // Stop
    if (scale >= 3) {
      clearInterval(interval);
    }
  }, 50);
});
