
function validateSubjects() {
    var selectedSubjects = document.querySelectorAll('input[type="checkbox"]:checked');
    var errorDiv = document.getElementById("erro");

    if (selectedSubjects.length === 4) {
        document.getElementById("sel").style.display = "none";
        document.getElementById("dura").style.display = "block";
        var subjectsArray = [];
        selectedSubjects.forEach(function (subject, index) {
            subjectsArray.push(subject.value);
            switch (index) {
                case 0:
                    subject1 = subject.value;
                    break;
                case 1:
                    subject2 = subject.value;
                    break;
                case 2:
                    subject3 = subject.value;
                    break;
                case 3:
                    subject4 = subject.value;
                    break;
               
            }
        });
      

        console.log("Subject 1: " + subject1);
        console.log("Subject 2: " + subject2);
        console.log("Subject 3: " + subject3);
        console.log("Subject 4: " + subject4);

        document.getElementById("p1").innerHTML=subject1;
        document.getElementById("p2").innerHTML=subject2;
        document.getElementById("p3").innerHTML=subject3;
        document.getElementById("p4").innerHTML=subject4;

        document.getElementById("sub_1").innerHTML=subject1;
        document.getElementById("sub_2").innerHTML=subject2;
        document.getElementById("sub_3").innerHTML=subject3;
        document.getElementById("sub_4").innerHTML=subject4;
    
        var subjectsString = subjectsArray.join(', ');

         console.log("Subjects selected successfully: " + subjectsString);

    } else if (selectedSubjects.length < 3) {
        displayError("Please choose at least 3 subjects.");
    } else {
        displayError("Please choose exactly 4 subjects.");
    }
}

function displayError(message) {
    var errorDiv = document.getElementById("erro");
    errorDiv.innerHTML = message;
    errorDiv.style.display = "block";
    errorDiv.style.border = "1px solid red";
    errorDiv.style.textAlign = "center";
    errorDiv.style.width = "80%";
    errorDiv.style.margin = "auto";
    errorDiv.style.padding = "10px 30px";
    errorDiv.style.backgroundColor = "red";
    errorDiv.style.color = "#333";
    errorDiv.style.textTransform = "uppercase";
    errorDiv.style.borderRadius = "0.5em";
const nav = document.getElementById("diplay__error")

    nav.scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => {
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }, 3000);
}




//custom html erro 100% no try copy the code go and learn

function validateSubject() {
    var selectedSubjects = document.querySelectorAll('input[type="checkbox"]:checked');
    var errorDiv = document.getElementById("erro");

    var subject1, subject2, subject3, subject4;

    if (selectedSubjects.length === 4) {
        document.getElementById("sel").style.display = "none";
        document.getElementById("dura").style.display = "block";

        var subjectsArray = [];

        selectedSubjects.forEach(function (subject, index) {
            subjectsArray.push(subject.value);

            
            switch (index) {
                case 0:
                    subject1 = subject.value;
                    break;
                case 1:
                    subject2 = subject.value;
                    break;
                case 2:
                    subject3 = subject.value;
                    break;
                case 3:
                    subject4 = subject.value;
                    break;
               
            }
        });
      

        console.log("Subject 1: " + subject1);
        console.log("Subject 2: " + subject2);
        console.log("Subject 3: " + subject3);
        console.log("Subject 4: " + subject4);

        document.getElementById("p1").innerHTML=subject1;
        document.getElementById("p2").innerHTML=subject2;
        document.getElementById("p3").innerHTML=subject3;
        document.getElementById("p4").innerHTML=subject4;

        document.getElementById("sub_1").innerHTML=subject1;
         document.getElementById("sub_2").innerHTML=subject2;
         document.getElementById("sub_3").innerHTML=subject3;
         document.getElementById("sub_4").innerHTML=subject4;

        // You can perform further actions here
    } else if (selectedSubjects.length < 3) {
        displayError("Please choose at least 3 subjects.");
    } else {
        displayError("Please choose exactly 4 subjects.");
    }

    


}



function displayError(message) {
    var errorDiv = document.getElementById("erro");
    errorDiv.innerHTML = message;
    errorDiv.style.display = "block";
    errorDiv.style.border = "1px solid red";
    errorDiv.style.textAlign = "center";
    errorDiv.style.width = "80%";
    errorDiv.style.margin = "auto";
    errorDiv.style.padding = "10px 30px";
    errorDiv.style.backgroundColor = "red";
    errorDiv.style.color = "#333";
    errorDiv.style.textTransform = "uppercase";
    errorDiv.style.borderRadius = "0.5em";
const nav = document.getElementById("diplay__error")
    nav.scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => {
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    }, 3000);
}


    // to change selected subject
function change_subject() {
    document.getElementById("sel").style.display="block"
    document.getElementById("dura").style.display="none"
}
function seleted_exit(a,b,object) {
    document.getElementById("seleted_exit").style.display=a
    document.getElementById("dura").style.display=b
    const navber = document.getElementById("nav-topr")

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const time_hrs = (document.getElementById("hrs").value);
    // const time_mins = (document.getElementById("mins").value);
    const exam_type = (document.getElementById("ex_type").value);


    document.getElementById("number_q1").innerHTML = num1;
    document.getElementById("number_q2").innerHTML = num2;
    document.getElementById("number_q3").innerHTML = num3;
    document.getElementById("number_q4").innerHTML = num4;
    document.getElementById("exam_time").innerHTML = time_hrs
    document.getElementById("exam_type").innerHTML = exam_type;
    
    const sum = num1 + num2 + num3 + num4;
    document.getElementById("number_sum").innerHTML = sum;
    
    ex_type
    
    console.log (eval('num1 + num2 + num3 + num4'))

   
    navber.scrollIntoView({
        behavior: 'smooth'
    });

}
function startExam(){
    window.location.assign("config_custom.html")
    // examHall()
}
 
function examHall() {
    const duration = 7200;
    const startTime = new Date().getTime();
  
    const countdown = setInterval(function() {
      const currentTime = new Date().getTime();
      const remainingTime = duration - Math.floor((currentTime - startTime) / 1000);
  
      document.getElementById("timeCount").innerHTML = `Time remaining: ${formatTime(remainingTime)}`;
  
      if (remainingTime <= 0) {
        clearInterval(countdown);
        document.getElementById("timeCount").innerHTML = "Time's up";
      }
    }, 1000);
  
    function formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
  
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }
  }
  
     
  function Examquestion_start() {
 
    const sub_1 = (document.getElementById("sub_1").value);
    const num1 = parseFloat(document.getElementById("number_q1").value);
    const sub_2 = (document.getElementById("sub_2").value);
    const num2 = parseFloat(document.getElementById("number_q2").value);
    const sub_3 = (document.getElementById("sub_3").value);
    const num3 = parseFloat(document.getElementById("number_q3").value);
    const sub_4 = (document.getElementById("sub_4").value);
    const num4 = parseFloat(document.getElementById("number_q4").value);



   
    var subjectData = new FormData();
    subjectData.append('sub_1', sub_1);
    subjectData.append('number_q1', num1);
    subjectData.append('sub_2', sub_2);
    subjectData.append('number_q2', num2);
    subjectData.append('sub_3', sub_3);
    subjectData.append('number_q3', num3);
    subjectData.append('sub_4', sub_4);
    subjectData.append('number_q4', num4);



    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'SubmitQuestion_php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status) {
                    console.response(200)

                   
                } else {
                    console.error(error);
               
                }
            } else {
                console.error('Request failed. Status: ' + xhr.status);
            
            }
        }
    };

    xhr.send(formData);
}
