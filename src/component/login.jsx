import { NavLink } from "react-router-dom";


function Login() {
    return (
        <section className="login">
            <div className="sign-nav">
                <h1>FREE DATING</h1>
                <div className="logger">
                    <p>BRING BUSY PROFESSIONALS TOGETHER</p>
                    <NavLink to="/signUp"><button>Log In</button></NavLink>
                </div>
            </div>


            <div className="overall-sign">
                <div className="main-sign">
                    <ul>
                        <li className="noner">SIGN UP</li>
                        <li>CLICK</li>
                        <li>CONNECT</li>
                    </ul>
                    <h1 className="heading1">MEET FUN SINGLES!</h1>

                    <form className="login-form" >
                        <h1>START NOW</h1>
                        <p>Your perfect match is just a click away</p>
                        <div className="form-info">
                            <div className="info">
                                <select name="" id="">
                                    <option>I am a</option>
                                    <option>Man</option>
                                    <option>Woman</option>
                                </select>
                                <select name="" id="">
                                    <option>Age 18-25</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                </select>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="info">
                                <select name="" id="">
                                    <option>Looking for?</option>
                                    <option>Man</option>
                                    <option>Woman</option>
                                </select>
                                <input type="text" placeholder="City" />
                                <input type="number" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="log-btn">
                            <button>SUBMIT</button>
                        </div>
                        <div className="para">
                            <p>Many singles are searching for relationship, dive in now and</p>
                        </div>
                    </form>
                </div>
                <div className="bottom-links">
                    <NavLink className="btm-link">Contact</NavLink>
                    <NavLink className="btm-link">About Us</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Login;