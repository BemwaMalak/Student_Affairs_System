function showSuccess(){
    let studentName = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let choice = confirm(department + " Department\nHas been selected\nFor student: " + studentName + "\nPress OK if you want to continue or Cancel");
    return choice;
}