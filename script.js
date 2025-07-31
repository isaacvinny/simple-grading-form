function calculateGrade(){
    let name = document.getElementById("formInput1").value;
    let score = parseInt(document.getElementById("formInput2").value);

    
    if(score>=75 && score<=100){
        window.alert("Hello " + name + ". Your Grade is 'A' ");
    }
    else if(score>=60 && score <=75){
        window.alert("Hello " + name + ". Your Grade is 'B' ");
    }
    else if(score>=50 && score<=59){
        window.alert("Hello " + name + ". Your Grade is 'C' ");
    }
    else if(score>=40 && score<=49){
        window.alert("Hello " + name + ". Your Grade is 'D' ");
    }
    else if(score>=0 && score<40){
        window.alert("Hello " + name + ". Your Grade is 'F' ");
    }else{
        window.alert("Input your correct score betwwen 0 to 100");
    }
}