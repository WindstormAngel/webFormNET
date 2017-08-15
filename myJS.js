
//This function checks that all inputs are filled in and if so, sends to AJAX
function validate() {
    //pull over form element's values'
    var check = true;
    var name = document.getElementById("nameIn").value;
    var phone = document.getElementById("phoneIn").value;
    var email = document.getElementById("emailIn").value;
    var user = document.getElementById("userIn").value;
    var pass = document.getElementById("passIn").value;

    console.log(document.getElementById("nameIn").value);

    //check for blanks and make a message or remove if filled in
    if ((name==null) || (name=="")) {
        document.getElementById("nameBox").innerHTML = "Name is blank";
        check = false;
    }
    else{
        document.getElementById("nameBox").innerHTML = "";
    }

    if ((phone == null) || (phone == "")) {
        document.getElementById("phoneBox").innerHTML = "Phone number is blank";
        check = false;
    }
    else{
        document.getElementById("phoneBox").innerHTML = "";
    }

    if ((email == null) || (email == "")) {
        document.getElementById("emailBox").innerHTML = "Email is blank";
        check = false;
    }
    else{
        document.getElementById("emailBox").innerHTML = "";
    }

    if ((user == null) || (user == "")) {
        document.getElementById("userBox").innerHTML = "Username is blank";
        check = false;
    }
    else{
        document.getElementById("userBox").innerHTML = "";
    }

    if ((pass == null) || (pass == "")) {
        document.getElementById("passBox").innerHTML = "Password is blank";
        check = false;
    }
    else{
        document.getElementById("passBox").innerHTML = "";
    }
  
    if (check == false) {
        alert("Try again with all fields filled in.");
    }
    //If all are filled in, send to AJAX to update backend.
    else {
       // goAJAX(name, phone, email, user, pass);
    }

    return;
}
/*
function goAJAX(name, phone, email, user, pass) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            
        }
    };
    xhttp.open("POST", "ajax.aspx", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&phone=" + phone + "&email=" + email + "&user=" + user + "&pass=" + pass); 
    
}*/