if(localStorage.getItem("loggedIn")!="true"){

    window.location.href="login.html";

}

const user=JSON.parse(localStorage.getItem("iroUser"));

document.getElementById("name").innerHTML=user.fullname;

document.getElementById("email").innerHTML=user.email;

document.getElementById("community").innerHTML=user.community;

document.getElementById("logout").onclick=function(){

    localStorage.removeItem("loggedIn");

    window.location.href="login.html";

};

const reports=JSON.parse(localStorage.getItem("reports"))||[];
console.log(reports);

document.getElementById("totalReports").innerHTML=reports.length;

const tbody=document.getElementById("reportBody");

reports.forEach(report=>{

    tbody.innerHTML+=`

    <tr>

        <td>${report.title}</td>

        <td>${report.category}</td>

        <td>${report.location}</td>

        <td>${report.status}</td>

        <td>${report.date}</td>

    </tr>

    `;

});