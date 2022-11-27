const xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    document.getElementById("data").innerHTML = xhttp.responseText;

    // main script 
    let elements = document.getElementsByTagName("tr");
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
function searchfilter(){
  var input, filter, table, tr, td, i, text;
  input=document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  table= document.getElementsByClassName("content-table")[0];
  tr=table.getElementsByTagName("tr");

  for(i = 0; i<tr.length ; i++){
    td = tr[i].getElementsByTagName("td")[1];
    if(td){
      text = td.textContent || td.innerHTML || td.innerText;
      if(text.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }
      else{
        tr[i].style.display = "none";
      }
    }
  }
  }

xhttp.open("GET", "search/getall");
xhttp.send();