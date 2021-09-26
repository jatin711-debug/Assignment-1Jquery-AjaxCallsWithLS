//start of doc.
const dataURL = "../JSONdata/A1-JSON.json"

// const rawProgramData = [

// ]


$(document).ready(function(){
    

    //calling ajax for data retrival
    $.ajax({
        type: "GET",
        url: dataURL,
        dataType: "json",
        success: function (response) {
            useLocalStorage(response.AboutMe);
        }
    });
});



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

