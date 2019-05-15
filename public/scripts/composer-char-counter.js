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
    console.log("chars");
  })

});  

$(document).ready(function() {
  $("textarea").keyup(function() {
  	let Characters = 0;
    Characters = $("textarea").val().length;
   	if (Characters > 140) {
      $(".counter").text(140 - Characters).css({color: "red"});
		} else {
	  $(".counter").text(140 - Characters).css({color: "black"});
		}
  });
});