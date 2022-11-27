//Check all button
function checkAll(){
    let checkBoxes = ["ID", "Name", "GPA", "Level", "Department", "Date Of Birth", "Gender", "Status", "Email", "Mobile Number"];
    let isAllChecked = true;
    for(let i = 0; i < checkBoxes.length; i++){
        if(!document.getElementById(checkBoxes[i]).checked){
            isAllChecked = false;
            break;
        }
    }
    if(isAllChecked){
        for(let i = 0; i < checkBoxes.length; i++){
            document.getElementById(checkBoxes[i]).checked = false;
        }
    }else{
        for(let i = 0; i < checkBoxes.length; i++){
            document.getElementById(checkBoxes[i]).checked = true;
        }
    }
}

//Apply filter
function applyFilters(){
    let checkBoxes = ["ID", "Name", "GPA", "Level", "Department", "Date Of Birth", "Gender", "Status", "Email", "Mobile Number"];
    for(let i = 0; i < checkBoxes.length; i++){
        let childs = document.getElementsByClassName(checkBoxes[i]);
        if(!(document.getElementById(checkBoxes[i]).checked)){
            for(let j = 0; j < childs.length; j++){
                childs[j].classList.add("hidden");
            }
        }else{
            for(let j = 0; j < childs.length; j++){
                childs[j].classList.remove("hidden");
            }
        }
    }
}
function changeStatus(id){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        alert(xhttp.responseText);
    };
    xhttp.open("PATCH", "deactivate/" + id);
    csrf = getCookie("csrftoken");
    xhttp.setRequestHeader("X-CSRFToken", csrf);
    xhttp.send();
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}