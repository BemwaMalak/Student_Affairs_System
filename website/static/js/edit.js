function check(){
    let name = document.getElementById("name");
    let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]+/;
    if(specialCharacter.test(name.value) ){
      alert("ERROR Invalid Name:\nName can contain only letters"); 
      return false;
    }

    let level = document.getElementById("Level");
    let department = document.getElementById("department");
    if(level.value < 3 && department.value != "GE"){
      alert("ERROR Invalid Level:\nLevel must be 3 or higher to register to a department");
      return false;
    }
    let mobileNumber = document.getElementById("Mobile");
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(mobileNumber.value[0] != '0' || mobileNumber.value.length != 11 || special.test(mobileNumber.value)){
      alert("ERROR Invalid Mobile Number:\nMobile Number should begin with a zero and should contain only digits"); 
      return false;
    } 
    let flag = true;
    if(confirm("Are you sure you want to edit?\nPress OK to continue or Cancel")){
      let newID = document.getElementById("ID").value;
      let oldId = window.location.pathname; // edit/2020401
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function(){
        if(xhttp.responseText == "Valid"){
          alert("Student was edited Successfully");
          flag = true;
        }else{
          alert("Invalid ID");
          flag = false;
        }
      }
      xhttp.open("GET", "../editCheck/" + newID + "/" + oldId.substring(6), async = false);
      xhttp.send();
    }else{
      return false;
    }

    return flag;
    
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function deleteStudent(){
    if(confirm("Are you sure you want to delete this student?\nPress OK to continue or Cancel")){
      const xhttp = new XMLHttpRequest();
      xhttp.open("DELETE", `../remove/${ID.value}`);
      csrf = getCookie("csrftoken");
      xhttp.setRequestHeader("X-CSRFToken", csrf);
      xhttp.send();
      alert("Student was deleted Successfully");
      window.location.href = `../search` ;
    }else{
      return false;
    }
}
