import { IoHomeOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <footer>
        <div className="footer-container">
            <div className="footer-contents">
                <div className="footer-rent">
                    <div className="rent-new">
                        <h3>Rent <span className="pan">it</span></h3> 
                        <IoHomeOutline className="home-icon2" />
                    </div>
                    <div className="info">
                        <h6>info@rentit.com</h6>
                        <h6>+234 (0) 805555 555</h6>
                    </div>
                </div>
                <div className="footer-blogs">
                    <div className="footer-sell">
                        <h5>Buy,Rent & Sell</h5>
                        <h6>Buy & Sell Properties</h6>
                        <h6>Rent home</h6>
                        <h6>Finance</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>About</h5>
                        <h6>How it works</h6>
                        <h6>Contact</h6>
                        <h6>Company</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>Terms & Privacy</h5>
                        <h6>Terms odf use</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Trust & Security</h6>
                    </div>
                    <div className="footer-sell">
                        <h5>Resources</h5>
                        <h6>FAQ</h6>
                        <h6>Blogs</h6>
                        <h6>Guide</h6>
                    </div>
                </div>
            </div>
            <div className="reserved">
                <p>© 2023 RentIt. All Rights Reserved.</p>
               <div className="far">
                    <FaFacebookSquare className="facebook" />
                    <FaLinkedin  className="linkedin" />
                    <FaSquareInstagram className="instagram" />
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;