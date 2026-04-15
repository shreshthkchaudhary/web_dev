import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
function NavBar(){

    //  Step 3 - Consume
    const theme = useContext(ThemeContext);
    console.log(theme)
    return(
        <div>
            <h1 style={{color : `${theme.theme}`}}>
                Hello i am Developer
            </h1>
        </div>
    )
}
export default NavBar