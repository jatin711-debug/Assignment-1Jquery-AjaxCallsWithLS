

$(function() {
    const studentName = localStorage.getItem("studentName")
    const studentId = localStorage.getItem("studentId")
    const studentProgram = localStorage.getItem("studentProgram")
    const studentCampus = localStorage.getItem("studentCampus")
    const studentLogin = localStorage.getItem("studentLogin")

    $("h1").html(`Name: ${studentName}`);
    $("h2").text(`Studnt ID: ${studentId}`);
    $("h3").text(`Program: ${studentProgram}`);
    $("h4").text(`Campus: ${studentCampus}`);
    $("h5").text(`Login: ${studentLogin}`);
    
    $("#bst-btn").on("click", function(event){
        window.location.href = "../index.html";
    })
});
