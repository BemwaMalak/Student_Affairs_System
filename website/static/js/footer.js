let footer = `
<ul id="footer">
    <li style="float: left;"><img src = "..\\static\\img\\logos\\facultyLogo.webp"  id="facultyLogo"></li>
    <li style="float: left;"><img src = "..\\static\\img\\logos\\universityLogo.webp" id="universityLogo"></li>
      <table id="footerNav">
        <tr>
          <td style="float: left;" colspan="3">
            <span class = "layout-text" > NAVIGATE </span>
          </td>
        </tr>
        <tr>
          <td>
            <a href="../home"> <span class = "layout-text" > HOME  </span> </a>
          </td>
          <td>
            <a href="../add"> <span class = "layout-text" > ADD STUDENT  </span> </a>
          </td>
          <td>
            <a href="../about"> <span class = "layout-text" > ABOUT  </span> </a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <a href="../search"> <span class = "layout-text" > SEARCH/UPDATE/DELETE  </span> </a>
          </td>
          <td>
            <a href="../show"> <span class = "layout-text" > SHOW ALL </span>  </a>
          </td>
        </tr>
      </table>
    </ul>
    <div id="copyright"><label class = "layout-text" >All rights reserved &copy; cairo university 2021-2022</label></div>
`;

document.getElementById('app-footer').innerHTML = footer;