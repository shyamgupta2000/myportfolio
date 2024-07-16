import React from "react";
import { Link } from "@inertiajs/react";

const ContactSection = () => {
    return (
        <section className="contact_section">
            <h2 className="contact_section_title">Reach out to me</h2>
            <div className="contact_section_div">
                <div className="contact_section_form_div">
                    <form>
                        <fieldset className="form_legend">
                            <legend>Name</legend>
                            <input type="text" className="form-input" placeholder="Enter Your Name" />
                        </fieldset>
                        <fieldset className="form_legend">
                            <legend>Email</legend>
                            <input type="email" className="form-input" placeholder="Enter Your Email" />
                        </fieldset>
                        <fieldset className="form_legend">
                            <legend>Message</legend>
                            <textarea id="form-input" className="form-input" rows="3" cols="50" placeholder="Type your message...">
                            </textarea>
                        </fieldset>
                        <button className="form_btn">Send&nbsp;&nbsp;<i className="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
                <div className="contact_section_info_div">
                    <div className="social_links">
                        <Link><i className="fa-regular fa-envelope"></i>&nbsp;&nbsp;gupta.shyam2308@gmail.com</Link>
                        <br />
                        <Link><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Gurgaon, Haryana, India</Link>
                    </div>
                    <div className="social_icons">
                        <Link><i className="fa-brands fa-github"></i></Link>
                        <Link><i className="fa-brands fa-linkedin"></i></Link>
                        <Link><i className="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;