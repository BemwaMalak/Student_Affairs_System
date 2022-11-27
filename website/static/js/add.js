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
  if(level.value >= 3 && department.value == "GE"){
    alert("ERROR Invalid Level:\nLevel 3 or higher students must be assigned a department");
    return false;
  }
  let mobileNumber = document.getElementById("Mobile");
  let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if(mobileNumber.value[0] != '0' || mobileNumber.value.length != 11 || special.test(mobileNumber.value)){
    alert("ERROR Invalid Mobile Number:\nMobile Number should begin with a zero and should contain only 11 digits"); 
    return false;
  }
  let ID = document.getElementById("ID").value;
  const xhttp = new XMLHttpRequest();
  let flag = true;
  xhttp.onload = function(){
    if(xhttp.responseText == "Valid"){
      alert("Student was added Successfully");
      flag = true;
    }else{
      alert("Invalid ID");
      flag = false;
    }
  }
  xhttp.open("GET", "../addCheck/" + ID, async = false);
  xhttp.send();

  return flag;
}
