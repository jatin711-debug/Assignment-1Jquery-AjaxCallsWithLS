//start of doc.

const dataURL = "../JSONdata/A1-JSON.json"
const rawProgramData = [
    {term:1,type:"Prog",code:1013,image:"../media/images/Java.jpg"},
    {term:1,type:"Tele",code:1564,image:"../media/images/Java.jpg"},
    {term:2,type:"Comm",code:1654,image:"../media/images/Java.jpg"},
    {term:2,type:"Syst",code:1632,image:"../media/images/Java.jpg"},
    {term:2,type:"DBAs",code:4645,image:"../media/images/Java.jpg"},
    {term:1,type:"Syst",code:1343,image:"../media/images/Java.jpg"},
    {term:3,type:"Info",code:6543,image:"../media/images/Java.jpg"},
    {term:3,type:"Anth",code:7443,image:"../media/images/Java.jpg"},
    {term:3,type:"Maths",code:4543,image:"../media/images/Java.jpg"},
    {term:4,type:"Tele",code:3454,image:"../media/images/Java.jpg"},
    {term:4,type:"Comp",code:4534,image:"../media/images/Java.jpg"},
    {term:4,type:"PMP",code:5432,image:"../media/images/Java.jpg"}
]


$(function(){
    //calling ajax for data retrival
    $.ajax({
        type: "GET",
        url: dataURL,
        dataType: "json",
        success: function (response) {
            useLocalStorage(response.AboutMe);
        }
    });

    $("#main").text(`Assignment for ${localStorage.getItem("studentName")}`);
    $("#myID").text(`StudentID: ${localStorage.getItem("studentId")}`);
    $(".head").css("font-family","cursive");

    displayContent(1);
    loadFooterContent();

    $("#btn-1").on("click", function(evt){
        //$(this).val(); is same as (evt.target.value) //just for reminder

        displayContent(evt.target.value);
    });

    $("#btn-2").on("click", function(evt){
        displayContent(evt.target.value);
    });

    $("#btn-3").on("click", function(evt){
        displayContent(evt.target.value);
    });

    $("#btn-4").on("click", function(evt){
        displayContent(evt.target.value);
    });

    $("#btn-5").on("click", function(evt){
        $(".output").toggleClass("alert");
    });

    $("#btn-6").on("click", function(evt){
        $("td:contains('Prog')").toggleClass("alert");
    });

});


const displayContent = (termVal) => {
    $("#tb").css("background-color", "pink")
    $("#tb").html("")
    for(const data of rawProgramData){
        if(parseInt(termVal) === data.term){
            $("#tb").append(`
                <tr>
                <td>Course: ${data.type} ${data.code} <img src="${data.image}"></td>
                </tr>
            
            `);
        }
    }
};

const loadFooterContent = () => {
    $(".foot > h3").text(`
        ${localStorage.getItem("studentLogin").toUpperCase()} / ${localStorage.getItem("studentProgram")} / ${localStorage.getItem("studentCampus")}
    `);
};

// storing data in local storage
const useLocalStorage = (data)=>{
    localStorage.setItem("studentName",data.myName);
    localStorage.setItem("studentId",data.myID);
    localStorage.setItem("studentLogin",data.myLogin);
    localStorage.setItem("studentCampus",data.myCampus);
    localStorage.setItem("studentProgram",data.myProgram);
};



//Program class
class Program{
    constructor(term,name){
        this.term = term;
        this.name = name;
    }
}

//course class
class Courses{
    constructor(term,type,code,image){
        this.term = term;
        this.type = type;
        this.code = code;
        this.image = image;
    }
}

