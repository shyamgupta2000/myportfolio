import React from "react";
import { Link } from "@inertiajs/react";
import Profile_Component from "../../utilities/ProfilePhoto";

const HomeSection = () => {
    return (
        <section className="home_section">
            <div className="home_section_div home_section_info">
                <h1>Shyam Gupta</h1>
                <h6>Full Stack Developer</h6>
                <p>Hello! I am Shyam Gupta, a professional and passionate Full Stack Developer. A quick learner with a self-learning attitude. I love to learn and explore new technologies.</p>
                <div className="social_icons">
                    <Link><i className="fa-brands fa-github"></i></Link>
                    <Link><i className="fa-brands fa-linkedin"></i></Link>
                    <Link><i className="fa-brands fa-twitter"></i></Link>
                </div>
            </div>
            <div className="home_section_div home_section_img">
                <div>
                    <Profile_Component />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;