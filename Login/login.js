document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const message =
        document.getElementById("message");

    if(username === "" || password === ""){
        message.style.color = "red";
        message.textContent =
            "All fields are required!";
        return;
    }

    // Demo authentication
    const validUser = "admin";
    const validPass = "12345";

    if(username === validUser &&
       password === validPass){

        message.style.color = "green";
        message.textContent =
            "Login Successful!";
    }
    else{
        message.style.color = "red";
        message.textContent =
            "Invalid Username or Password!";
    }
});