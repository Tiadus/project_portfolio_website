import React from "react";
import Image from "next/image";

const Tool_Display: React.FC = () => {
    return (
        <div className="scroll-container">
            <div className="carousel-primary">
            <Image src="/python_logo.png" alt="python_logo.png" width={100} height={100}/>
            <Image src="/javascript_logo.png" alt="javascript_logo.png" width={100} height={100}/>
            <Image src="/react_logo.png" alt="react_logo.png" width={100} height={100}/>
            <Image src="/css_logo.png" alt="css_logo.png" width={100} height={100}/>
            </div>
            <div className="carousel-primary carousel-secondary">
            <Image src="/nodejs_logo.png" alt="nodejs_logo.png" width={100} height={100}/>
            <Image src="/mysql_logo.png" alt="mysql_logo.png" width={100} height={100}/>
            <Image src="/ts.png" alt="ts.png" width={100} height={100}/>
            <Image src="/nestjs.png" alt="nestjs.png" width={100} height={100} style={{backgroundColor: 'white'}}/>
            </div>
        </div>
    );
}
 
export default Tool_Display;