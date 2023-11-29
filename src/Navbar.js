import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const navigate = useNavigate()


    return ( 
        <div>
            <div className="navbar">
                <div className="navbar-rent" onClick={() => {navigate("/")}}>
                    <h3>Rent <span>it</span></h3> 
                    <IoHomeOutline className="home-icon" />
                </div>
                    <div className="trigger">
                        <IoMenu className="menu-icon" onClick={toggleMenu} />
                        <div className={`login ${isOpen ? "is-open" : ""}`}>
                            <ul>
                                <li className="blogs" onClick={() => {navigate("/blog")}}>Blogs</li>
                                <li className="blogs" onClick={() => {navigate("/listings")}}>Listings</li>
                                <li className="log">Log in</li>
                                <li className="make">Make a posting</li>
                            </ul>
                        </div>
                    </div>
            </div>
        
        </div>
     );
}
 
export default Navbar;