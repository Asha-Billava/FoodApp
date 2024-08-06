import React from "react";
import "./style.css";
function Sidebar() {
  return (
    <React.Fragment> 
    <div className="SideBarDiv ">
      <div className="home"> <i class="bi bi-microsoft"></i></div>
      <div style={{display:"flex",justifyContent:"space-between", flexDirection:"column", height:"87vh"}}>
      <ul class="sidebar-Ul">
        
       
        <li class="sidebar-item">
          <div className="divline"> <i class="bi bi-house-door"></i> </div>
         
        </li>
        <li class="sidebar-item">
          <div className="divline"><i class="bi bi-file-bar-graph"></i></div>
          
        </li>
        <li class="sidebar-item">
           <div className="divline"> <i class="bi bi-clipboard-check"></i></div>
         
        </li>
        <li class="sidebar-item">
           <div className="divline"> <i class="bi bi-wallet"></i></div>
         
        </li>
        <li class="sidebar-item">
           <div className="divline"><i class="bi bi-bag-check"></i></div>
          
        </li>
      </ul>

       <ul class="sidebar-Ul">
       <li class="sidebar-item">
           <div className="divline"><i class="bi bi-box-arrow-right"></i></div>
          
        </li>
        
       </ul>
    </div>
    </div>
    
     </React.Fragment>
    
  );
}

export default Sidebar;
