import { IoHomeOutline } from "react-icons/io5";
const Login = () => {


    return ( 
        <div className="lawal">
            <div className="login-container">
                    <div className="login-contents">
                        <div className="login-rent">
                            <h3>Rent <span className="newit">it</span></h3> 
                            <IoHomeOutline className="newhome-icon" />
                        </div>
                        <div className="sigin-container">
                            <div className="sigin-contents">
                                <h1>Sign into your account</h1>
                                <p>Sign in to take action</p>
                                <div className="google">
                                    <h6>Sign in with Google Account</h6>
                                </div>
                                <p>or</p>
                            </div>
                            <form className="signin-form">
                               <div className="password">
                                    <label for="email-address">Email address</label>
                                    <input type="email" placeholder="Enter your email address" />
                               </div>
                                <div className="password">
                                    <label for="password">Password</label>
                                    <input type="password" placeholder="Enter your password" />
                                </div>
                                <input type="button" value="Sign in now" className="btn-signin" />
                                <div className="register"> 
                                    <p>New User?</p>
                                    <h6>Register</h6>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Login;