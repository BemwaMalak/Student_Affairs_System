let header = `
<ul id="header" >
    <li style="float: left;" id="facultyName"><label id= "facultyName-label"  >Faculty of computers and artificial intelligence</label></li>
    <li id="dark_mode">
    <input type="checkbox" id="toggle" class="toggle--checkbox" oninput="mode()">
    <label for="toggle" class="toggle--label">
      <span class="toggle--label-background"></span>
    </label>
    </li>
    <li><a href = "../about">  <span class = "layout-text" > ABOUT </span>  </a></li>
    <li class="dropdown">
        <a class="dropbtn"> <span class = "layout-text" > MENU </span>  </a>
        <div class="dropdown-content">
        <a href="../add">ADD STUDENT</a>
        <a href="../search">SEARCH/UPDATE/DELETE</a>
        <a href="../show" >SHOW ALL</a>
        </div>
    </li>
    <li><a href="../home"> <span class = "layout-text" > HOME </span> </a></li>
    
</ul>
`;

document.getElementById('app-header').innerHTML = header;


// N.B :::

// onclick = " window.location.assign( 'http://' + window.location.hostname + ':' + window.location.port + '/about' ) "
// META 


// deafult case mode is false 
// means light mode
// local mode variable 

let case_mode = false ;

// get from the local storage 

if ( localStorage.getItem( 'mode' ) != null ) {

    // case already created 
    case_mode = localStorage.getItem( 'mode' );

}
else {

    // case not setted yet
    // set it with deafult value 
    localStorage.setItem( 'mode' , case_mode ) ; 

}

// css file paths 
let light_drc = '/static/css/' , dark_drc = '/static/css/d-style/' ;
let arr  = [ 'layout.css' , 'home.css'    , 'main.css' , 'add.css'    , 'search.css'  , 'edit.css' , 'dept.css'   , 'about.css'   , 'show.css' ] ;

// button toogle function 
function mode () {


    if ( case_mode ) {

        // light mode 
        toggle_mode ( dark_drc , light_drc ) ;

    }

    else {

        // dark mode 
        toggle_mode ( light_drc , dark_drc  ) ;

    }

    // toggle 
    case_mode ^= 1 ;
    localStorage.setItem( 'mode', case_mode ) ; 

    
}

// switching modes 
function toggle_mode ( _from , _to ) {

    // traversing list of css file to switch 
    for ( let i = 0 ; i < arr.length ; i++ ) {

        
        let link_element =  document.querySelector(`link[href='${_from}${arr[i]}']`) ; // avoid access .href of null 

        // case founded toogle it :)
        if (link_element != null ) link_element.href = `${_to}${arr[i]}` ;


    }

}


// automatic - toogle [ every page load with the last selected theme ]
let current_mode = localStorage.getItem( 'mode' ) ;

// case already found previous configuration 
if ( current_mode != null ) {
    if ( current_mode == 1  ) {

        // set 
        case_mode = 1 ;

        
        // toogle 
        toggle_mode ( light_drc , dark_drc  ) ;
        document.getElementById("toggle").checked = true;


    }
    else {

        // set
        case_mode = 0 ;
        
        
        // toogle 
        toggle_mode ( dark_drc , light_drc ) ;
        document.getElementById("toggle").checked = false;
    }
}
// else no need to do anything it's already setted to light mode by deafult 