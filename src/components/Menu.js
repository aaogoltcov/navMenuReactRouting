import shortid from 'shortid';
import NavLink from "./Link";
import {useState} from "react";

export default function Menu() {
    const links =
        {
            "/": "Главная",
            "/drift": "Дрифт-такси",
            "/timeattack": "Time-Attack",
            "/forza": "Forza Karting",
        }

    const [isActive, setActive] = useState("");

    function renderLinks() {
        const renderedLinks = [];
        for (const [to, name] of Object.entries(links)) {
            renderedLinks.push(<NavLink
                key={shortid.generate()}
                to={to}
                name={name}
                className={isActive === to ? "menu__item menu__item-active" : "menu__item"}
                linkClick={linkClick}
            />)
        }
        return renderedLinks;
    }

    function linkClick(to) {
        setActive(to);
    }

    return (
        <div className="menu">
            {renderLinks()}
        </div>
    );
}
