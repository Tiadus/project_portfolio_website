import React from "react";

interface Nav_Bar_Button_Props {
    button_name: string
    focused_tab: string
    on_click: (button_name: string) => void
}

const capitalizeFirstLetter = (button_name: string) => {
    if (button_name.length <= 1) return button_name;
    return button_name.charAt(0).toUpperCase() + button_name.slice(1);
};

const Nav_Bar_Button: React.FC<Nav_Bar_Button_Props> = ({button_name, focused_tab, on_click}) => {
    return (
        <span onClick={() => {on_click(button_name)}} className={`nav_bar_button ${focused_tab == button_name ? "button_focused" : ""}`}>
            {button_name == "/" ? "Introduction" : capitalizeFirstLetter(button_name)}
        </span>
    );
}
 
export default Nav_Bar_Button;