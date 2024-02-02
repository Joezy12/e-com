import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="active-ele">
             <i className="bi-chat-dots"></i>
            </div>

            <ul className="nav-link">
                <li><NavLink className="link active-li"><i className="bi-chat-square-dots"></i></NavLink></li>
                <li><NavLink className="link"><i className="bi-telephone"></i></NavLink></li>
                <li><NavLink className="link"><i className="bi-people"></i></NavLink></li>
                <li><NavLink className="link"><i className="bi-person-circle"></i></NavLink></li>
            </ul>
           
        </div>
    )
}

export default Sidebar;