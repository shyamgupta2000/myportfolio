import React from "react";
import { Link } from "@inertiajs/react";

const SkillSection = () => {
    return (
        <section className="skills_section">
            <h2>Skills</h2>
            <div className="skills_section_div">
                <div className="skill_section_item">
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-php"></i>
                    <p>PHP</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-brands fa-laravel"></i>
                    <p>Laravel</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-solid fa-database"></i>
                    <p>MySQL</p>
                </div>
                <div className="skill_section_item">
                    <i className="fa-solid fa-code"></i>
                    <p>Rest API</p>
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
