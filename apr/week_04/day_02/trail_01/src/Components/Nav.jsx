import {Link} from "react-router-dom";
function Nav (){
    return(
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Link to={"/home"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>LogIn</Link>
            <Link to={"/"}>LogOut</Link>
            <Link to={"/"}>User</Link>
        </div>
    )
}
export default Nav