if(localStorage.getItem("loggedIn")!="true"){

    window.location.href="login.html";

}

document.getElementById("logout").onclick=function(){

    localStorage.removeItem("loggedIn");

    window.location.href="login.html";

};

const form=document.getElementById("reportForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const report={

        id:Date.now(),

        title:document.getElementById("title").value,

        category:document.getElementById("category").value,

        location:document.getElementById("location").value,

        description:document.getElementById("description").value,

        status:"Pending",

        date:new Date().toLocaleDateString()

    };

    let reports=JSON.parse(localStorage.getItem("reports"))||[];

    reports.push(report);

    localStorage.setItem("reports",JSON.stringify(reports));

    alert("Issue Report Submitted Successfully.");

    form.reset();

    window.location.href="dashboard.html";

});