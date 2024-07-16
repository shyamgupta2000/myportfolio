import React from "react";

const ExperienceSection = () => {
    return (
        <section className="experience_section">
            <h2 className="experience_section_title">Experience</h2>
            <div className="experience_div">
                <div className="experience_card experience_card_1">
                    <div className="experience_card_1_img_div">
                        <img src="https://hipaco.in/public/hipa/images/HIPA2.png" alt="HIPA" />
                    </div>
                    <div className="experience_card_1_info_div">
                        <h2>Haryana Institute of Public Administration</h2>
                        <h5>Web Developer Trainee</h5>
                        <h6>Feb, 2022 - July, 2022</h6>
                        {/* <ul>
                            <li>Designed and Tested the frontend of E-Management Portal of MCG.</li>
                            <li>Conducted code reviews and provided feedback to ensure adherence to coding standards.</li>
                        </ul> */}
                    </div>
                </div>
                {/* <div className="experience_line"></div> */}
            </div>
            <div className="experience_div">
                <div className="experience_card experience_card_2">
                    <div className="experience_card_1_img_div">
                        <img src="https://hipaco.in/public/hipa/images/HIPA2.png" alt="HIPA" />
                    </div>
                    <div className="experience_card_1_info_div">
                        <h2>Haryana Institute of Public Administration</h2>
                        <h5>Junior Web Developer</h5>
                        <h6>August, 2022 - Jan, 2022</h6>
                    </div>
                </div>
                {/* <div className="experience_line"></div> */}
            </div>
            <div className="experience_div">
                <div className="experience_card experience_card_3">
                    <div id="uptop_card_img" className="experience_card_1_img_div">
                        <img id="uptop_logo" src="	https://uptopcareers.com/assets/images/new_home_page_images/uptop_header_logo.webp" alt="Img..." />
                    </div>
                    <div id="uptop_card_info" className="experience_card_1_info_div">
                        <h2>Uptop Careers Institute Pvt Ltd</h2>
                        <h5>Full Stack Developer</h5>
                        <h6>March, 2022 - June, 2022</h6>
                    </div>
                </div>
                {/* <div className="experience_line"></div> */}
            </div>
        </section>
    );
}

export default ExperienceSection;
