import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
    return (
        <div className="container">
            <div className="project_holder">
                <span className="project_media_holder">
                    <span className="media_holder_outer_type_video">
                        <span className="media_holder_inner_type_video">
                            <Image src="/dean_award.jpg" alt="/dean_award.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} width={500} height={500}/>
                        </span>
                    </span>
                </span>
                <span className="project_description_holder">
                    <div className="custom_header_1">Bachelor of Computer Science</div>
                    <div className="custom_header_2">University of Wollongong</div>
                    <div className="custom_text_1"><b>Duration:</b> 2022 - 2025</div>
                    <div className="custom_text_1"><b>Location:</b> Australia</div>
                    <div className="custom_text_1"><b>Prizes & Achievement:</b></div>
                    <ul className="degree_description_list">
                        <li className="custom_text_2">
                            UoW Dean Merit Award 2023 & 2024 Faculty of Engineering and Information Science (Top 5% Faculty Student)
                        </li>
                        <li className="custom_text_2">
                            UoW Computing and IT Discipline 2nd Year Prize Sponsored by SCIT Head of School
                        </li>
                        <li className="custom_text_2">
                            Golden Key Award (Top 15% College and University Honor Society)
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
}
 
export default Education;