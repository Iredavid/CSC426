const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const fullname = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const community = document.getElementById("community").value;
const password = document.getElementById("password").value;
const confirm = document.getElementById("confirmPassword").value;

if(password !== confirm){

alert("Passwords do not match");

return;

}

const user = {

fullname,

email,

community,

password

};

localStorage.setItem("iroUser", JSON.stringify(user));

alert("Registration Successful!");

window.location.href="login.html";

});