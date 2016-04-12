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

});
