function valid() {

    var name = document.getElementById("name");
    var email = document.getElementById("Emailaddress");
    var phonenumber = document.getElementById("Phonenumber");
    var  arrival=document.getElementById("arival");
    var depart= document.getElementById("departure");
    console.log(name.value)
    if (name.value.trim() === "") {
        document.getElementById("namerror").innerHTML = "It can't be empty";
        name.style.border = "3px solid red";

        document.getElementById("name-fails").style.visibility = "visible";
        return false;
    } else {
        if (name.value.trim().match(/^[A-Za-z0-9]+$/g)) {
            name.style.border = "3px solid green";


            document.getElementById("name-check").style.visibility = "visible";

        } else {
            name.style.border = "3px solid red";
            document.getElementById("namerror").innerHTML = "Only lower case and number's allowed.";
            document.getElementById("name-fails").style.visibility = "visible";

            return false;
        }

    }

    if (email.value.trim() === "") {
        document.getElementById("emerror").innerHTML = "It can't be empty";
        email.style.border = "3px solid red";
        document.getElementById("email-fails").style.visibility = "visible";
        return false;
    } else {
        if (email.value.trim().match(/^([A-Za-z0-9\.-]+)@([a-z]+)\.([a-z]){2,3}$/g)) {
            email.style.border = "3px solid green";


            document.getElementById("email-check").style.visibility = "visible";

        } else {
            email.style.border = "3px solid red";
            document.getElementById("emerror").innerHTML = "Format is invalid";
            document.getElementById("email-fails").style.visibility = "visible";

            return false;
        }


    }


    if (phonenumber.value.trim() === "") {
        document.getElementById("pherror").innerHTML = "It can't be empty";
        phonenumber.style.border = "3px solid red";
        document.getElementById("pherror-fails").style.visibility = "visible";
        return false;
    }

    else {
        if (phonenumber.value.trim().match(/^[6789]\d{9}$/g)) {
            phonenumber.style.border = "3px solid green";


            document.getElementById("ph-check").style.visibility = "visible";

        } else {
            phonenumber.style.border = "3px solid red";
            document.getElementById("pherror").innerHTML = "Format is invalid";
            document.getElementById("ph-fails").style.visibility = "visible";

            return false;
        }


    }


    if(depart.value === arrival.value){
        alert("depart and arrival should not be same");
        return false;
    }
    else {
        if(depart.value<arrival.value){
            alert("depart must after arrival ")
            return false
        }
    }



alert("Sucessfully register. We will contact soon!")
    return true;


}
