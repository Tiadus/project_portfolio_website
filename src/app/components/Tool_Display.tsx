import React from "react";

const Tool_Display: React.FC = () => {
    return (
        <div className="scroll-container">
            <div className="carousel-primary">
            <img src="/python_logo.png" alt="cat1" />
            <img src="/javascript_logo.png" alt="cat2" />
            <img src="/react_logo.png" alt="cat3" />
            <img src="/css_logo.png" alt="cat4" />
            </div>
            <div className="carousel-primary carousel-secondary">
            <img src="/nodejs_logo.png" alt="cat5" />
            <img src="/mysql_logo.png" alt="cat6" />
            <img src="/ai_logo.png" alt="cat7" />
            <img src="/cybersec_logo.png" alt="cat8" />
            </div>
        </div>
    );
}
 
export default Tool_Display;