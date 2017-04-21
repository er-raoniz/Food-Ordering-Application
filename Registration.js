$(document).ready(function() {
	$("#Register").click(function() {
	
		//Assinging variables
		var fName = $("#fname").val();
		var lName = $("#lname").val();
		var eMail = $("#Email").val();
		var mob = $("#Mobile").val();
		var pass = $("#Password").val();
		var cPass = $("#cPassword").val();

		var atpos = eMail.indexOf("@");
    	var dotpos = eMail.lastIndexOf(".");
    	
		//Checking conditions
		if (fName == '' || lName == '' || eMail == '' || pass == '' || cPass == '') {
			alert("Please fill the details in the required fields!");
			return false;
		}
		else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
	    	alert("Not a valid e-mail address!");
	    	return false;
        }
        else if (isNaN(mob)) {
	    	alert("Invalid mobile number!");
	    	return false;
    	}
		else if (pass != /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) {
			alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
			return false;
		}
		else if (!(pass).match(cPass)) {
			alert("Your passwords don't match! Try again?");
			return false;
		} 
		else {
			$("#myForm").reset();
		}
		alert("Successfully submitted!");
	});
});