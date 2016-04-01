$(function(){
  //tested jQuery functionality
  //console.log("jQuery here");
  //click event for generate button
   var count = 0;
  $("#generate").on("click", function(){

    $("body").append("<div class= newButtons><button id= delete>DELETE</button><button class= change>CHANGE</button></div>");
     count++;
     console.log(count);
     $("span").text("You clicked generate button \"" + count + "\" times!");
    //alert("You clicked the generate button " + count + " time(s)!");
    //click event for change button
      $(".change").on("click", function(){
        $(this).toggleClass("red");
        //$(this).css("background-color", "yellow);
        console.log("where's the red?");
      });
  //click event for delete button
      $("#delete").on("click", function(){
        $(this).parent().remove();
        console.log("we should delete this");
      });

  });

  

});
