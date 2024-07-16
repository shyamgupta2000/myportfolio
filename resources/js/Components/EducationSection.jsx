import React from "react";

const EducationSection = () => {
    return(
        <section className="education_section">
            <h2 className="education_section_title">Education</h2>
            <div className="education_div">
                <div className="education_card education_card_1">
                    <div className="education_card_1_img_div">
                        <img src="https://www.dpgitm.ac.in/wp-content/uploads/2022/03/dpgitm.png" alt="Image..." />
                    </div>
                    <div className="education_card_1_info_div">
                        <h2>Bachelor of Computer Applications</h2>
                        <h5>DPGITM, MDU</h5>
                        <h6>August, 2019 - July, 2022</h6>
                        {/* <ul>
                            <li>Designed and Tested the frontend of E-Management Portal of MCG.</li>
                            <li>Conducted code reviews and provided feedback to ensure adherence to coding standards.</li>
                        </ul> */}
                    </div>
                </div>
                {/* <div className="education_line"></div> */}
            </div>
            <div className="education_div">
                <div className="education_card education_card_2">
                    <div className="education_card_1_img_div">
                        <img src="https://gurugramuniversity.ac.in/img/logo.jpg" alt="Image..." />
                    </div>
                    <div className="education_card_1_info_div">
                        <h2>Master of Computer Applications</h2>
                        <h5>Gurugram University</h5>
                        <h6>October, 2022 - May, 2024</h6>
                    </div>
                </div>
                {/* <div className="education_line"></div> */}
            </div>
        </section>
    );
}

export default EducationSection;
