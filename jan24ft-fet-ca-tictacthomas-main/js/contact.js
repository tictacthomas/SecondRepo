
            

function myFunction() {


  while (true) {
    var email = prompt ("what is your email adress? must include @ and . ")
    

if (email.includes("@") && email.includes("@")){
  var phone_number = parseInt(prompt("what is your phone number"))

    if (isNaN(phone_number)){
      (alert("oops there has been a mistake, plees try again"))

    }
    else {
      var adress = prompt("what is your adress");

      if (adress.length<5){
        (alert("oops there has been a mistake, plees try again"))
  
      }
      else {
        $( "p:contains('1-123-456-789')" ).text(phone_number);
        $( "p:contains('me@fakemail.com')" ).text(email);
        $( "p:contains('1445 West Norwood Avenue')" ).text(adress);
       
        console.log("From: " + email+ "\n" + "Contact: "+phone_number+ "\n" +"Address: " + adress);
        break;
       }
       
   

}

    }}



  
}



