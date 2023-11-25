import { IoHomeOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return ( 
        <div>
            <div className="navbar">
                <div className="navbar-rent">
                    <h3>Rent <span>it</span></h3> 
                    <IoHomeOutline className="home-icon" />
                </div>
                <IoMenu className="menu-icon" />
                <div className="login">
                    <ul>
                        <li className="blogs">Blogs</li>
                        <li className="blogs">Listens</li>
                        <li className="log">Log in</li>
                        <li className="make">Make a posting</li>
                    </ul>
                </div>
            </div>
            <div className="navbar-contents">
                <h1>Discover Your Next Home:</h1>
                <p>Welcome to our apartment rental website! 
                    We are dedicated to helping you find the 
                    perfect place to call home. Our selection
                    of properties includes a wide range 
                    of options to suit every need and budget.
                </p>
            </div>
        </div>
     );
}
 
export default Navbar;