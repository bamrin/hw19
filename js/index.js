console.log("index.js is working");

$("h1").css("color", "red");

$( "h1" ).on( "click", function() {
    $("h1").css("color", "purple");
    console.log("you just clicked an h1");
  });
 