/* Show login form on button click */
 
$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();
    /* border bottom on button click */
    $('.loginBtn').css({'border-bottom' : '2px solid #98002E'});
    /* remove border after click */
    $('.signUpBtn').css({'border-style' : 'none'});
  });
 
   
  /* Show sign Up form on button click */
   
  $('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();
    /* border bottom on button click */
    $('.signUpBtn').css({'border-bottom' : '2px solid #98002E'});
     /* remove border after click */
     $('.loginBtn').css({'border-style' : 'none'});
  });



   
  function validateEmail(email) {  
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email); 
  }
     
  
    $("#signup-Button").click (function() {
  
    //take variables to assign after checking empty values or false values
    var emailMissing = "";
    var emailErrorMessage = "";
    var passwordMissing = "";
   var passwordConfirmError = "";
 

   
    /* Checking email validation */
    if ($("#email").val() == "") {
      emailMissing = "Email address is empty!";  
      $("#emailMissing").html(emailMissing); 


      //use focusin() method in jquery to remove validation message
      $( "#email" ).focusin(function() {
        emailMissing = "";  
        $("#emailMissing").html(emailMissing); 
  
      });
      
      
  }
   
   if (validateEmail($("#email").val()) == false)

   {    
    emailErrorMessage = "Your email address is not valid";
      $("#emailError").html(emailErrorMessage);

      $( "#email" ).focusin(function() {
        emailErrorMessage  = "";  
        $("#emailError").html(emailErrorMessage); 
  
      });
   
  }
   else if(validateEmail($("#email").val()) == true)
   {
    emailErrorMessage = "";
   
   }
   /* Displaying email Error messages */
   if (emailMissing != "") {         
    $("#emailError").hide(); 
    $("#emailMissing").show();
  } else if (emailErrorMessage != "") {                   
    $("#emailError").show(); 
    $("#emailMissing").hide();
  } else{
    $("#emailError").hide(); 
    $("#emailMissing").hide();

  }
   

 
  /* Password validation */
  if ($("#password").val() == "") {
    passwordMissing = "Password field is required!";
    $("#passwordMissing").html(passwordMissing);

     //use focusin() method in jquery to remove validation message
     $("#password").focusin(function() {
      passwordMissing= "";  
      $("#passwordMissing").html( passwordMissing); 

    });
  }
   
    if ($("#password").val() != $("#passwordConfirm").val()) {                  
      passwordConfirmError = "Your passwords dont match";
      $("#passwordConfirmError").html(passwordConfirmError);

    
    }
   
  /* Display password error message */
  if (passwordMissing != "") 
  {                   
    $("#passwordMissing").show(); 
    $("#passwordConfirmError").hide(); 
  } 
   else if(passwordConfirmError != "")
    {                 
    $("#passwordConfirmError").show();
    $("#passwordMissing").hide(); 
   }
   else
    {
    $("#passwordConfirmError").hide();
    $("#passwordMissing").hide(); 
   }
   
 
   
  /* Display success message for signup button if there is no error */
  if ((emailErrorMessage == "")  && (passwordConfirmError == "")  )
   {
   $("#successMessage").show();
    $("#errorMessage").hide();
   }
   else
    {
    $("#successMessage").hide ();
    $("#errorMessage").show();
  }
     
  });


  //validation for login button
  $("#login-button").click (function() {
    var emailMissing1 = "";
    var emailErrorMessage1 = "";
    var passwordMissing1 = "";
    

    /* Checking email validation */
    if ($("#login-email").val() == "") {
      emailMissing1 = "Email address is empty!";  
      $("#emailMissing1").html(emailMissing1); 
      
    //use focusin() method in jquery to remove validation message
    $("#login-email").focusin(function() {
      emailMissing1 = "";  
      $("#emailMissing1").html( emailMissing1); 

    });

  }
   
   if (validateEmail($("#login-email").val()) == false)

   {    
    emailErrorMessage1 = "Your email address is not valid";
      $("#emailError1").html(emailErrorMessage1);

      $("#login-email").focusin(function() {
        emailErrorMessage1 = "";  
        $("#emailError1").html(emailErrorMessage1); 
  
      }); 

   }

  
   else if(validateEmail($("#login-email").val()) == true)
   {
    emailErrorMessage1 = "";
   
   }
   
   /* Displaying email Error messages */
   if (emailMissing1 != "") {         
    $("#emailError1").hide(); 
    $("#emailMissing1").show();
  } else if (emailErrorMessage1 != "") {                   
    $("#emailError1").show(); 
    $("#emailMissing1").hide();
  } else{
    $("#emailError1").hide(); 
    $("#emailMissing1").hide();

  }
  
  /* login-Password validation */
  if ($("#login-password").val() == "") {
    passwordMissing1 = "Password field is required!";
    $("#passwordMissing1").html(passwordMissing1);

   //use focusin() method in jquery to remove validation message
   $( "#login-password" ).focusin(function() {
    passwordMissing1= "";  
    $("#passwordMissing1").html( passwordMissing1); 

  });

  }
   
    
  /* Display login-password error message */
  if (passwordMissing1 != "") 
  {                   
    $("#passwordMissing1").show(); 
  }
   else
    {
     $("#passwordMissing1").hide(); 
   }
  
  
  /* Display success message for login  button if there is no error */
  if ((emailErrorMessage1 == "")  && (passwordMissing1 == "")  )
   {
   $("#loginsuccessMessage").show();
    $("#loginerrorMessage").hide();

     $('#signupBtn').click(function()
     {
     $("#loginsuccessMessage").hide();
      $("#loginerrorMessage").hide();

     //  $("#loginsuccessMessage").css("display","none" )
   
         });
        }

         else
    {
    $("#loginsuccessMessage").hide ();
    $("#loginerrorMessage").show();
     }
  
     
  });
   