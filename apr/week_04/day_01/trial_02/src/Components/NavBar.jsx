import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export default function NavBar(){
    const {auth, login, logout} = useContext(AuthContext);
    console.log(auth);
    return(
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2 >Auth : {auth ? "Yes" : "No"}</h2>
            <button onClick={login}>LogIn</button>
            <button onClick={logout}>LogOut</button>
        </div>
    );
}