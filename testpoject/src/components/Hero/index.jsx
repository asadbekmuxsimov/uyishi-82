import React from 'react'
import "./style.css"
import logo from "../../assets/logo.svg";
import hero from "../../assets/base.png";
import put from "../../assets/put.png";
import put2 from "../../assets/put2.png";
import rec1 from "../../assets/Rectangle1.png";
import rec2 from "../../assets/Rectangle2.png";
import rec3 from "../../assets/Rectangle3.png";
import rec4 from "../../assets/Rectangle4.png";
import rec5 from "../../assets/Rectangle5.png";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import frame from "../../assets/frame27.png";
import frame2 from "../../assets/frame28.png";
import group1 from "../../assets/Group (6).png";
import group2 from "../../assets/Group (7).png";
import group3 from "../../assets/Group (8).png";
import frame3 from "../../assets/Frame (29).png";
import frame4 from "../../assets/Frame (30).png";
import frame5 from "../../assets/Frame (31).png";
import frame6 from "../../assets/Frame (32).png";
import frame7 from "../../assets/Frame (33).png";
import frame8 from "../../assets/Frame (34).png";
import frame9 from "../../assets/Frame (35).png";
import frame10 from "../../assets/Frame (36).png";

function Hero() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className='navv'>
                        <img src={logo} alt="" />
                        <div className='nav-div'>
                            <ul>
                                <li><a href=""></a>Log In</li>
                                <li><a href="">844-332-6440</a></li>
                            </ul>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="hero">
                    <div className="container">
                        <div className="asosiy">
                            <div className="hero-div">
                                <h1>Running the show has never been so easy.</h1>
                                <p>Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</p>
                            </div>
                            <div className='hero-img'>
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main>

                <div className="container">
                    <div className="put">
                        <div className='put-img'>
                            <img src={put} alt="" />
                        </div>
                        <div className='put-text'>
                            <h2>Put the human back in HR.</h2>
                            <p>Your employees are the real stars. Show the love and help them perform!</p>
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="container">
                    <div className="put put1">
                        <div className='put-text'>
                            <h2>You don’t have to play all the parts.</h2>
                            <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
                        </div>
                        <div className='put-img'>
                            <img src={put2} alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="container">
                    <div className="rec-div">
                        <div className='rec-txt'>
                            <h1>We partner with the best</h1>
                        </div>
                        <div className='recc'>
                            <div className='rec-img'>
                                <img src={rec1} alt="" />
                                <img src={rec2} alt="" />
                                <img src={rec3} alt="" />
                                <img src={rec4} alt="" />
                                <img src={rec5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="product">
                    <div className="container">
                        <div className='product-txt rec-txt'>
                            <h1>HR Production of the Highest Quality</h1>
                        </div>
                        <div className='recc'>
                            <div className='product-img rec-img'>
                                <div>
                                    <img src={f1} alt="" />
                                    <p>Educates & Informs</p>
                                    <p>Employee Expectations</p>
                                </div>
                                <div>
                                    <img src={f2} alt="" />
                                    <p>Protects Your Business</p>
                                    <p>Just in Case</p>
                                </div>
                                <div>
                                    <img src={f3} alt="" />
                                    <p>Manages & Stores</p>
                                    <p>Important Documents</p>
                                </div>
                                <div>
                                    <img src={f4} alt="" />
                                    <p>Create a Healthy</p>
                                    <p>Work Environment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className='size'>
                <div className="container">
                    <div className="size-asosiy">
                        <div className="size-txt">
                            <h2>Employees come in all shapes and sizes. Find the right fit.</h2>
                            <p>Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.</p>
                        </div>
                        <div>
                            <img src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <main className='howw'>
                <div className="container">
                    <div className="how">
                        <div className="how-txt">
                            <h2>How the scenes fit together</h2>
                            <p>Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
                        </div>
                        <div className='how-img'>
                            <img src={frame2} alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <main>
                <div className="container">
                    <div className="consider">
                        <div className='c-div'>
                            <h2>Consider everyone's best interest</h2>
                            <p>HR is for everyone. Clerksy can help you.</p>
                        </div>
                        <div className='c-txt'>
                            <div className='consider-txt'>
                                <img src={group1} alt="" />
                                <h2>Protect Your Company</h2>
                                <ul>
                                    <li><a href="">Compliance Audits & Training</a></li>
                                    <li><a href="">Employee Data Storage</a></li>
                                    <li><a href="">Policy Drafting</a></li>
                                </ul>
                            </div>
                            <div className='consider-txt'>
                                <img src={group2} alt="" />
                                <h2>Set Your Employees Up For Success</h2>
                                <ul>
                                    <li><a href="">Learning & Development</a></li>
                                    <li><a href="">Employee Relations</a></li>
                                    <li><a href="">Employee Performance</a></li>
                                    <li><a href="">Employee Performance</a></li>
                                </ul>
                            </div>
                            <div className='consider-txt'>
                                <img src={group3} alt="" />
                                <h2>Know Your Industry's Legal Landscape</h2>
                                <ul>
                                    <li><a href="">Work Place Investigations</a></li>
                                    <li><a href="">Employee Mediations</a></li>
                                    <li><a href="">Performance Tracking</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <main className='its'>
                <div className="container">
                    <div className='its-div'>
                        <div className='c-div'>
                            <h2>It's easy as 1, 2, 3</h2>
                            <p>Clerksy can help use your unique business needs. Here's how:</p>
                        </div>
                        <div className='itss-div'>
                            <div>
                                <p>Fill out a form and tell us what you're looking for:</p>
                                <p></p>
                                <h2>5 minutes</h2>
                            </div>
                            <div>
                                <p>Time it will take a Clerksy rep to follow up:</p>
                                <h2>24 hours</h2>
                            </div>
                            <div>
                                <p>Take advantage of our monthly plans starting at:</p>
                                <h2>$969 USD</h2>
                            </div>
                        </div>
                        <button>Book Free Discovery Call</button>
                    </div>
                </div>
            </main>
            <main>
                <div className="container">
                    <div className="not">
                        <div className="not-txt">
                            <h2>Not just another HR resource.</h2>
                            <p>Simple. Entertaining. Informative.</p>
                            <button>Download E-book</button>
                        </div>
                        <div className="not-img">
                            <img src={frame3} alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <div className="container">
                <main className='gett'>
                    <div className="get">
                        <div>
                            <img src={frame4} alt="" />
                        </div>
                        <div>
                            <h2>Get Started With Clerksy</h2>
                            <p>Make sure your business puts people first.</p>
                            <button className='btn'>Book a Free Discovery Call</button>
                        </div>
                        <div>
                            <img src={frame5} alt="" />
                        </div>
                    </div>
                </main>
            </div>
            <div className="submit-content">
                <div className="container">
                    <div className="submit-textContent">
                        <h2 className="title">
                            Stay up to date!
                        </h2>
                        <p>
                            Sign up for the latest Clerksy news.
                        </p>
                    </div>
                    <div className="submit-inputContent">
                        <form>
                            <input type="text" />
                            <button className="hero-btn">
                                Sign Up
                            </button>
                        </form>
                        <p>
                            By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <span>Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <div className="container">
                    <div className="footer-card">
                        <img src={frame6} alt="" />
                        <h3 className='title'>
                            A people company
                        </h3>
                        <div className="icons-card">
                            <img src={frame7} alt="" />
                            <img src={frame8} alt="" />
                            <img src={frame9} alt="" />
                            <img src={frame10} alt="" />
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="footer-card">
                        <p>
                            © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.
                        </p>
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">GDPR</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Press Kit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;