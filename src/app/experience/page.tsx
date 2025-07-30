import React from "react";
import Image from "next/image";
import Link from "next/link";

const Experience: React.FC = () => {
    return (
        <div className="container">
            <div className="project_holder">
                <span className="project_media_holder">
                    <span className="media_holder_outer_type_img">
                        <span className="media_holder_inner_type_img">
                            <Image src="/meowu_gacha.jpg" alt="/meowu_gacha.jpg" style={{width: "100%", height: "100%", objectFit: "contain"}} width={500} height={500}/>
                        </span>
                    </span>
                </span>
                <span className="project_description_holder">
                    <div className="custom_header_1">
                        Meowu Gacha (Gacha Simulator - <Link href="https://meowu-gacha-web.vercel.app/" target="_blank" rel="noopener noreferrer">Website</Link>)
                    </div>
                    <div className="custom_text_1">Tech Stack: [NextJS – Typescript, NestJS – Typescript, MySQL – SQL]</div>
                    <div className="custom_text_1">
                        <b>Description:</b> Meowu Gacha is an web application that can simulate the gacha systems of multiple games in a single application. 
                        The application was designed and made to help gacha games' player understand more about the probability of winning in their games.
                    </div>
                    <div className="custom_text_1">
                        <b>Github: </b> 
                        <Link href="https://github.com/Tiadus/meowu_gacha" target="_blank" rel="noopener noreferrer">
                            Repository Link
                        </Link>
                    </div>
                    <div className="custom_text_1"><b>Roles:</b></div>
                    <ul className="project_description_list">
                        <li className="custom_text_2">
                            Full Stack Developer: Design and implement a database schema and a system that can simulate multiple gacha games’ systems 
                            in a single application as well as a responsive user interface to present the product on both desktop and mobile phone.
                        </li>
                    </ul>
                </span>
            </div>
            <div className="project_holder">
                <span className="project_media_holder">
                    <span className="media_holder_outer_type_img">
                        <span className="media_holder_inner_type_img">
                            <Image src="/data_annotation_tech_logo.png" alt="/data_annotation_tech_logo.png" style={{width: "100%", height: "100%", objectFit: "contain"}} width={500} height={500}/>
                        </span>
                    </span>
                </span>
                <span className="project_description_holder">
                    <div className="custom_header_1">Data Annotation Tech (AI Training Company)</div>
                    <div className="custom_text_1"><b>Duration:</b> April 2024 - Now</div>
                    <div className="custom_text_1"><b>Location:</b> Remote</div>
                    <div className="custom_text_1"><b>Roles:</b></div>
                    <ul className="project_description_list">
                        <li className="custom_text_2">
                            AI Trainer (Freelancer):
                            Analyze and refine AI models’ Python and Javascript code to match the desired result of other trainers’ prompts and criteria. 
                            Design and curate complex prompts to expose failure modes in AI models in programming tasks, as well as natural language conversations.
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
                    <div className="custom_header_1">Deepfake Warning Application (Graduation Project)</div>
                    <div className="custom_text_1"><b>Tech Stack:</b> [React Native – Javascript, NodeJS+Express – Javascript, MySQL - SQL]</div>
                    <div className="custom_text_1"><b>Duration:</b> March 2024 - October 2024</div>
                    <div className="custom_text_1"><b>Location:</b> University of Wollongong (Australia)</div>
                    <div className="custom_text_1">
                        <b>Description:</b> Deepfake Warning Application is a university capstone project, with a goal of designing 
                        and implementing an architecture to detect deepfake in real time audio call.
                    </div>
                    <div className="custom_text_1">
                        <b>Github: </b> 
                        <Link href="https://github.com/Tiadus/academy_csit321_deepfake_warning_integrated_audio_call_application" target="_blank" rel="noopener noreferrer">
                            Repository Link
                        </Link>
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