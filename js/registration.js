const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        var firstName = $("#firstName").value;
        var lastName = $("#lastName").value;
        var email = $("#email").value;
        var password =$("#password").value;
        var confirmPassword = $("#confirmPassword").value;
    
        let errorMessage = "";
 
        if (firstName == "") { 
            errorMessage += "First name is required.\n";
        }
        if (lastName == "") { 
            errorMessage += "Last Name is required.\n";
        }
        if (email == "") { 
            errorMessage += "Email is required.\n";
        }
        if (password == "") { 
            errorMessage += "Password is required.\n";
        }
        if (confirmPassword == "") { 
            errorMessage += "Confirmation Password is required.\n";
        }

        if (password != confirmPassword) { 
            errorMessage += "Both passwords must match.\n";
        }
       
        if (errorMessage != "") {         
            alert(errorMessage);
            evt.preventDefault();
        } 
    });
 
    $("#clear").addEventListener("click", () => {
        $("#firstName").value = "";
        $("#lastName").value = "";
        $("#email").value = "";
        $("#password").value = "";
        $("#confirmPassword").value = "";
 
        $("#firstName").focus();
    });
    
});





