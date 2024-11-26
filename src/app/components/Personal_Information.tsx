import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Personal_Information: React.FC = () => {
    return (
        <div id='personal_information'>
            <span id="information_holder">
                <div id="name_holder">Hi, my name is Viet Thai.</div>
                <div style={{width: "100%", display: "flex"}}>
                    <span id="qualification_holder">
                        <div>English Proficiency: 7.0 IELTS Equivalent</div>
                        <div>Year of Birth: 2003</div>
                        <div>Current Location: Hanoi</div>
                        <div id="network_holder">
                            <Link href={"https://www.linkedin.com/in/viet-thai-nguyen-606160299/"} target="_blank" rel="noopener noreferrer">
                                <Image className="responsive_network_icon" src="/linkedin_logo.png" alt="LinkedIn Profile" width={50} height={50}/>
                            </Link>
                            <Link href={"https://github.com/Tiadus?tab=repositories"} target="_blank" rel="noopener noreferrer">
                                <Image className="responsive_network_icon" src="/github_logo.png" alt="GitHub Profile" width={50} height={50}/>
                            </Link>
                        </div>
                    </span>
                    <span style={{display: "flex", flexGrow: "1", alignItems: "center", justifyContent: "center"}}>
                        <Image className="hide_in_mobile" src="/star.png" alt="star.png" style={{width: "90px", height: "90px"}} width={90} height={90}/>
                    </span>
                </div>
            </span>
            <span id="avartar_holder">
                <div className="content_center" style={{width: "60%", height: "100%", position: "relative"}}>
                    <div className="fade_in_out" style={{width: "100%", height: "100%", background: "#E0E0E0", overflow: "hidden", borderRadius: "50%"}}></div>
                    <div className="color_rotate" style={{width: "97%", height: "95%", overflow: "hidden", borderRadius: "50%", position: "absolute"}}></div>
                    <div style={{width: "88%", height: "88%", overflow: "hidden", borderRadius: "50%", position: "absolute"}}>
                        <Image src="/linkedin_photo.jpg" alt="LinkedIn Photo" fill/>
                    </div>
                </div>
            </span>
        </div>
    );
}
 
export default Personal_Information;