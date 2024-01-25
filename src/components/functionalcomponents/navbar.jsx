import "../../css/navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return(
        // <nav>
        <ol>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ol>
// </nav>
    );

}
export default Navbar;