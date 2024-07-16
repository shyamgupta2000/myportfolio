import { Link } from "@inertiajs/react";
import Logo_Component from "../../utilities/LogoUrl";

export default function Header(){
    return(
        <header className="header_section">
            <div className="header_div header_logo">
                <Logo_Component />
                <p>Shyam Gupta</p>
            </div>
            <div className="header_div header_menu">
                <ul className="header_menu_items">
                    <li><Link>Skills</Link></li>
                    <li><Link>Experience</Link></li>
                    <li><Link>Education</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div className="header_div header_search">
                <button className="search_btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </header>
    );
}