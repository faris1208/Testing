import { IoIosPricetag } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import pharriz from "./images/Rectangle 5687 (12).png";
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import gray from "./images/Rectangle 5687 (6).png";
import tall from "./images/Rectangle 5687 (7).png";
import short from "./images/Rectangle 5687 (8).png";
import medium from "./images/Rectangle 5687 (9).png";
import edge from "./images/Rectangle 5687 (10).png";
import top from "./images/Rectangle 5687 (9).png";
import frame from "./images/Rectangle 5687 (10).png";
import nude from "./images/Rectangle 5687 (9).png";
import fall from "./images/Rectangle 5687 (10).png";
import fallen from "./images/Frame 4078.png";

const Listings = () => {
    return ( 
        <div className="listing-container">
            <div className="listing-sales">
                <div className="price-tag">
                    <IoIosPricetag className="pricetag-icon" />
                    <p>Search by price range, location or apartment type </p>
                </div>
                <div className="prices">
                    <p>For sale</p>
                    <FaChevronDown className="prices-icon" />
                </div>
                <div className="prices">
                    <p><span className="type">Type:</span>Apartment</p>
                    <FaChevronDown className="prices-icon" />
                </div>
                <div className="prices">
                    <p><span className="type">Min Price:</span>N200K</p>
                    <FaChevronDown className="prices-icon" />
                </div>
                <div className="prices">
                    <p><span className="type">Max Price:</span>N200K</p>
                    <FaChevronDown className="prices-icon" />
                </div>
            </div>
            <div className="verified-container">
                <div className="verified-contents">
                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={pharriz} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={gray} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={tall} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={short} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={medium} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={edge} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={top} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={frame} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={nude} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="verified-images">
                        <div className="modified">
                            <h5>verified</h5>
                            <MdVerified className="rogue-verified-color1" />
                        </div>
                        <img src={fall} alt="" className="home-image1" width="100%" />
                        <div className="amount">
                             <h1>N50,732,234.00</h1>
                             <h2>#25, Somewhere in Lagos Avenue. Lagos island</h2>
                            <div className="bathroom">
                                <div className="bathroom1">
                                    <LiaBathSolid className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                                <div className="bathroom1">
                                    <MdOutlineDirectionsCarFilled className="solid2" />
                                    <h3>2 Bathroom</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="listings-map">
                    <div>
                      <img src={fallen} alt="" className="home-image2" width="100%" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Listings;