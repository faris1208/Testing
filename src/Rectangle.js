import hi from "./images/image3.svg";
import hey from "./images/image 5.svg";
import hello from "./images/image 9.svg";
import he from "./images/image 13.svg";
import him from "./images/image 15.svg";
import her from "./images/Rectangle 5686 (3).png";
import hers from "./images/Rectangle 5686 (4).png";
import mean from "./images/Rectangle 5686 (1).png";
import { MdVerified } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import faris from "./images/Rectangle 5687 (1).png";
import fahey from "./images/Plenty dot.png";
import { IoIosPricetag } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import pharris from "./images/Rectangle 5686 (2).png";
import faheys from "./images/Plenty dot (1).png";
import { IoHomeOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Rectangle = () => {
  return (
    <div>
      <div className="home-new">
        <div className="form1">
          <form className="form2">
            <div className="form-label">
              <label>
                <IoIosPricetag className="form-icon" /> Price Range
              </label>
              <input
                type="text"
                placeholder="Select price range"
                className="input1"
              />
              <FaChevronDown className="input1-icon" />
            </div>
            <div className="form-label">
              <label>
                <CiLocationOn className="form-icon" /> Location
              </label>
              <div className="new">
                <input
                  type="text"
                  placeholder="Search location"
                  className="input1"
                />
                <FaChevronDown className="input-icon" />
              </div>
            </div>
            <div className="search">
              <input type="submit" value="Search" className="Search-button" />
            </div>
          </form>
        </div>
        <div className="home">
          <img src={her} alt="" className="home-image" width="100%" />
        </div>
      </div>

      <div className="home-heading">
        <h3>Trusted by:</h3>
      </div>
      <div className="home-images">
        <img src={hi} alt="" className="red1" width="100%" />
        <img src={hey} alt="" className="red1" width="100%" />
        <img src={hello} alt="" className="red1" width="100%" />
        <img src={he} alt="" className="red1" width="100%" />
        <img src={him} alt="" className="red1" width="100%" />
      </div>
      <div className="explore-content">
        <h5>EXPLORE OUR PLATFORM</h5>
        <h1>How it works</h1>
        <p>
          Welcome to our apartment rental website! We are dedicated to helping
          you find the perfect place to call home. Our selection of properties
          includes a wide range of options to suit every need and budget.
        </p>
      </div>
      <div className="hers-image">
        <img src={hers} alt="" className="hers-image1" width="100%" />
      </div>
      <div className="item1">
        <div className="list-items">
          <h5>1.</h5>
          <h4>Search For Property</h4>
          <h6>.</h6>
        </div>
        <div className="list-items">
          <h5>2.</h5>
          <h4>Select Wanted Apartment</h4>
          <h6>.</h6>
        </div>
        <div className="list-items">
          <h5>3.</h5>
          <h4>Schedule A Tour</h4>
          <h6>.</h6>
        </div>
        <div className="list-items">
          <h5>4.</h5>
          <h4>Book Your Apartment</h4>
          <h6>.</h6>
        </div>
      </div>

      <div className="home-rent">
        <div className="home-rent1">
          <h3>FEATURED PROPERTIES</h3>
          <h2>We provide you</h2>
          <h1>Affordable Living In The Heart of the Country</h1>
        </div>
        <div className="home-rent-list">
          <div className="home-rent-list1">
            <h3>Houses</h3>
            <h2> </h2>
            <h3>Apartment</h3>
            <h2> </h2>
            <h3>Land</h3>
          </div>
        </div>
      </div>

      <div className="frame-work">
        <div className="own">
          <div className="own-text">
            <h3>Family</h3>
            <h3>Pet Friendly</h3>
          </div>
          <img src={mean} alt="" className="own-image" width="100%" />
          <img src={pharris} alt="" className="own-image2" width="100%" />

          <div className="rogue">
            <div className="rogue1">
              <div className="rogue-contents">
                <div className="rogue-verified">
                  <h5>verified</h5>
                  <MdVerified className="rogue-verified-color" />
                </div>
                <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                <div className="rogue-bathroom">
                  <div className="rogue-bathroom1">
                    <LiaBathSolid className="solid" />
                    <h3>2 Bathroom</h3>
                  </div>
                  <div className="rogue-bathroom2">
                    <MdOutlineDirectionsCarFilled className="solid" />
                    <h3>2 Bathroom</h3>
                  </div>
                </div>
                <h1>N50,732,234.00</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="own4">
          <div className="middle">
            <p>
              Welcome to our apartment rental website! We are dedicated to
              helping you find the perfect place to call home. Our selection of
              properties includes a wide range of options to suit every need and
              budget.
            </p>
          </div>

          <div className="faris-image">
            <img src={faris} alt="" className="hers-image1" width="100%" />
            <div className="double-right1">
              <FaAnglesRight className="double-right" />
            </div>
          </div>
        </div>
      </div>

      <div className="coming">
            <div className="coming-soon">
            <h6>Coming soon</h6>
            <h5>This feature is now available on beta testing</h5>
            </div>
            <h1>Local Area View</h1>
            <p>
            Welcome to our apartment rental website! We are dedicated to helping
            you find the perfect place to call home. Our selection of properties
            includes a wide range of options to suit every need and budget.
            </p>
      </div>

      <div className="fahey-image">
        <img src={fahey} alt="" className="hers-image2" width="100%" />
        <img src={faheys} alt="" className="hers-image3" width="100%" />
      </div>

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
    </div>
  );
};

export default Rectangle;
