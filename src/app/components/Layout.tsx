import React from "react";
import Nav_Bar from "./Nav_Bar";
import { Suspense } from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode}>) => {
    return (
        <div id="app" className="content_center">
            <Suspense fallback={<div>Loading...</div>}>
                <Nav_Bar/>
            </Suspense>
            <div id="app_content">
                { children }
            </div>
        </div>
    );
}
 
export default Layout;