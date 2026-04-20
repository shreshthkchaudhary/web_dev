import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";

function Nav(){
    const theme = useContext(ThemeContext);
    console.log(theme);


    return (
        <h1 style={{color:theme.clr}}>hello</h1>
    )
}
export default Nav