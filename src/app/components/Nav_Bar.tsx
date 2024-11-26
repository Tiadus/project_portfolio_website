"use client"

import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import React from "react";
import Nav_Bar_Button from "./Nav_Bar_Button";
import { useEffect, useState } from "react";

const Nav_Bar: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [active, set_active] = useState("/")

    useEffect(() => {
        const url = `${pathname}`
        let directory: string[] = url.split('/')

        if (directory[1] != "") {
            set_active(directory[1])
        }

        if (directory[1] == "") {
            set_active("/")
        }
    }, [pathname, searchParams])

    useEffect(() => {
        /*switch (active) {
            case "/":
                document.body.style.background = 'linear-gradient(45deg, #1A2980, #26D0CE)';
                break;
            case "experience":
                document.body.style.background = 'linear-gradient(45deg, #00C9FF, #1CCD2E)';
                break;
            case "education":
                document.body.style.background = 'linear-gradient(45deg, #FF5F6D, #7BB2D9)';
                break;
        }*/
    }, [active])

    const on_button_click = (button_name: string) => {
        if (button_name == "/") {
            router.replace(`/`) 
        }

        if (button_name != "/") {
            router.replace(`/${button_name.toLowerCase()}`)
        }
    }

    return (
        <nav className="content_center">
            <Nav_Bar_Button button_name="/" destination="" focused_tab={active} on_click={on_button_click}/>
            <Nav_Bar_Button button_name="experience" destination="" focused_tab={active} on_click={on_button_click}/>
            <Nav_Bar_Button button_name="education" destination="" focused_tab={active} on_click={on_button_click}/>
        </nav>
    );
}
 
export default Nav_Bar;