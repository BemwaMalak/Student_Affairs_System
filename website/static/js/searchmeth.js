
  function selectDepartment(){
    if(document.getElementsByClassName("active-row")[0] == undefined){
      alert("ERROR:\nPlease select a student first");
      return false;
    }
    let selected = document.getElementsByClassName("active-row")[0];
    let selectedStudentLevel = selected.childNodes[7].innerHTML;
    if(Number(selectedStudentLevel) < 3){
      alert("ERROR:\nPlease select a student with level higher than 3");
      return false;
    }else{
      val = Number( document.getElementsByClassName("active-row")[0].getElementsByClassName("ID")[0].textContent ) ;
      window.location.href = `../select/${val}`;
      return true;
    }
  }

  function editOrDelete(){
    if(document.getElementsByClassName("active-row")[0] == undefined){
      alert("ERROR:\nPlease select a student first");
      return false;
    }
    else{
      val = Number( document.getElementsByClassName("active-row")[0].getElementsByClassName("ID")[0].textContent ) ;
      window.location.href = `edit/${val}`;
    }
    return true;
  }
