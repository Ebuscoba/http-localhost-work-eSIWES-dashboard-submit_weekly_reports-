

document.addEventListener("DOMContentLoaded",() =>{
    const loginform = document.querySelector("#login");
    const createAccountform =document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
        loginform.classList.add("form--hidden");
        createAccountform.classList.remove("form--hidden");
    });
 
    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createAccountform.classList.add("form--hidden");
    });



});



window.onload=function(){captchat()}
function captchat(){
    const result= document.getElementById("cap_number").value
    const ans = document.getElementById("ans").value

const a=       Math.floor(Math.random() * 11);
            
const b=        Math.floor(Math.random() * 33);
document.getElementById("display_cap").value=a +'+'+b
const d = a + b
document.getElementById("cap_number").value=d



   
    
}

function ans(){
    const result= document.getElementById("cap_number").value
    const ans = document.getElementById("ans").value

    if(ans==result){
        document.getElementById("demo").innerHTML="Correct"
          document.getElementById("demo").style.color="Green"
        }else{
          document.getElementById("demo").innerHTML="Wrong!"
          document.getElementById("demo").style.color="red"
            setTimeout(() => {
                captchat()
                    }, 300);
            }
            

}
function isSubmit(obj) {
    var username = $('#username').innerHTML;  
    var email = $('#email').innerHTML;
    var password = $('#password').innerHTML;
    var cpassword = $('#cpassword').innerHTML;
    var cap_result = $('#cap_number').innerHTML;
    var cap_ans = $('#ans').innerHTML;
  
    if (!username || username === '') {
        alert('Please enter first name.');
        $('#username').focus();
        return false;
    } else if (email.indexOf(" ") >= 0) {
        alert('Whitespace is not allowed in email address.');
        $('#email').focus();
        return false;
    } else if (password !== cpassword) {
        alert("Confirm password does not match.");
        $('#cpassword').focus();
        return false;
    } else if (cap_result !== cap_ans) {
        alert("CAPTCHA answer does not match.");
        $('#ans').focus();
        return false;
    } else {
        alert("Submission successful.");
        return true;  
    }
}
