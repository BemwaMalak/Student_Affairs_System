const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    document.getElementById("table-body").innerHTML = xhttp.responseText;
    //Select row behaviour
    let elements = document.querySelectorAll(".content-table tbody tr");
    let lastSelect = null;
    addOnClick.apply(this, elements);
    function addOnClick(){
        for(let i = 0; i < elements.length; i++){
            elements[i].addEventListener("click", function(){
                if(lastSelect != null){
                    deactivate.apply(this, lastSelect);
                }
                if(lastSelect != elements[i]){
                    elements[i].classList.add("active-row");
                    elements[i].classList.add("nohover");
                    lastSelect = elements[i];
                }else{
                    lastSelect = null;
                }
            });
        }
    }
    function deactivate(){
        lastSelect.classList.remove("active-row");
        lastSelect.classList.remove("nohover");
    }
}
xhttp.open("GET", "show/getall");
xhttp.send();
