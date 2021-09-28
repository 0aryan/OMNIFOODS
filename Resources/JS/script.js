$(document).ready(function () {
  var waypoint = new Waypoint({
    element: $(".js--section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "60px;",
  });

  // jump to plans
});

// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

// $(".js--section-features").waypoints(function (direction) {
//   if (direction === "down") {
//     $("nav").addClass(".sticky");
//   } else {
//     $("nav").removeClass(".sticky");
//   }
// });
