import React from "react";
import Nav_Bar from "./Nav_Bar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode}>) => {
    return (
        <div id="app" className="content_center">
            <Nav_Bar/>
            <div id="app_content">
                { children }
            </div>
        </div>
    );
}
 
export default Layout;