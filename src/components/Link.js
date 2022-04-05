import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavLink(props){
    function linkClickHandler() {
        props.linkClick(props.to);
    }

    return (
        <Link
            to={props.to}
            className={props.className}
            onClick={linkClickHandler}
        >{props.name}</Link>
    )
}