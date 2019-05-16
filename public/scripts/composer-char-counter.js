$(document).ready(function() {
  let chars = 0;
  // const form = document.querySelector("textarea[name=text]");
  $("textarea").keyup(function() {
    chars = $("textarea").val().length;
    if (chars > 140) {
      $(".counter").text(140 - chars).css({color: "red"});
    } else {
      $(".counter").text(140 - chars).css({color: "black"});
    }
  })

});  

