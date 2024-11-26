import React from "react";

const Experience: React.FC = () => {
    return (
        <div className="container">
            <div className="project_holder">
                <span className="project_media_holder">
                    <span className="media_holder_outer_type_img">
                        <span className="media_holder_inner_type_img">
                            <img src="/data_annotation_tech_logo.png" alt="/data_annotation_tech_logo.png" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
                        </span>
                    </span>
                </span>
                <span className="project_description_holder">
                    <div className="custom_header_1">Data Annotation Tech</div>
                    <div className="custom_header_2">Freelance & Casual Work</div>
                    <div className="custom_text_1"><b>Duration:</b> April 2024 - Now</div>
                    <div className="custom_text_1"><b>Location:</b> Remote (United State of America)</div>
                    <div className="custom_text_1"><b>Roles:</b></div>
                    <ul className="project_description_list">
                        <li className="custom_text_2">
                            Artificial Intelligence Models Responses Tester and Reviewer: Write custom prompt to test and evaluate the models' capabilities 
                            in responding to the user query in normal and coding context with languages such as Python and Javascript.
                        </li>
                    </ul>
                </span>
            </div>
            <div className="project_holder">
                <span className="project_media_holder">
                    <span className="media_holder_outer_type_video">
                        <span className="media_holder_inner_type_video">
                            <iframe 
                                width="100%" 
                                height="100%"
                                src="https://www.youtube.com/embed/bqfiaWY1sGQ" 
                                title="SALOS - Deepfake Detection Integrated Audio Call Mobile Application [UoW-CSIT321-Tradeshow]" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </span>
                    </span>
                </span>
                <span className="project_description_holder">
                    <div className="custom_header_1">Deepfake Warning Application (Capstone Project)</div>
                    <div className="custom_header_2">Software Engineer</div>
                    <div className="custom_text_1"><b>Duration:</b> March 2024 - October 2024</div>
                    <div className="custom_text_1"><b>Location:</b> University of Wollongong (Australia)</div>
                    <div className="custom_text_1">
                        <b>Description:</b> Deepfake Warning Application is a university capstone project which aim to design 
                        and implement a proof of concept of an architecture to detect deepfake in real time audio call.
                    </div>
                    <div className="custom_text_1"><b>Roles:</b></div>
                    <ul className="project_description_list">
                        <li className="custom_text_2">
                            Backend Engineer: Develop a backend system capable of integrating a machine learning model to carry 
                            out deepfake analysis in real time call with Python, Javascript, NodeJS and WebSocket. 
                        </li>
                        <li className="custom_text_2">
                            Frontend Engineer: Design and implement a reactive and user-friendly frontend of the mobile application 
                            for the calling, deepfake audio file detection and account management functionalities with Javascript, 
                            React Native and NativeWind.  
                        </li>
                        <li className="custom_text_2">
                            Data Analyzer: Design and establish a testing system that simulates a real-time calling environment, 
                            enabling data scientists to collect data for training the machine learning model. 
                        </li>
                        <li className="custom_text_2">
                            Team Leader: Oversee and lead a team of six members from Vietnam and Egypt including assigning tasks, 
                            hosting meeting, working in collaboration with two doctorate supervisors from Vietnam and China.
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
}
 
export default Experience;