function validate(){
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var country_region = document.getElementById("countryregion").value
    var message = document.getElementById("message").value
    var agree = document.getElementById("agreement")

    if(fullname.length < 5){
        alert("Name must at least 5 characters long!")
    }
    else if(email.endsWith("@gmail.com") == false){
        alert("Email must be end with @gmail.com!")
    }
    else if(country_region == "blank"){
        alert("Please choose your country!")
    }
    else if(message.length == 0){
        alert("Message can't be empty!")
    }
    else if(!agree.checked){
        alert("You have to agree with our term and condition to submit!")
    }
}