$(document).ready(function(){

   $('#submit').click(function(){
   	var x = $("#input").val()
   	if (x.length === 10) {
   		console.log("Valid input");
   	}
   	else {
   		console.log("Invalid input");
   	};

   	var y = $("#username").val()
   	if (y.length > 0) {
   		console.log("Valid input");
   	}
   	else {
   		console.log("Invalid input");
   	};

   	var z = $("#password").val()
   	if (z === "12345") {
   		console.log("Valid input");
   	}
   	else {
   		console.log("Invalid input");
   	};
   });

   $(document).keypress(function(e){
      if (e.keyCode >= 48 && e.keyCode <= 57){
         $("#text").text("Number");
      } else if (e.keyCode >= 58 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122){
         $("#text").text("Letter");
      } else{
         $("#text").text("");
      }
   });
   
});
