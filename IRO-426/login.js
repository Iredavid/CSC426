const form=document.getElementById("loginForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const savedUser=JSON.parse(localStorage.getItem("iroUser"));

if(

savedUser.email===email &&

savedUser.password===password

){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}

else{

alert("Invalid Email or Password");

}

});