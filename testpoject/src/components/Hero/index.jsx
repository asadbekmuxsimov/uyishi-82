import React from 'react'
import "./style.css"
import logo from "../../assets/logo.svg";
import hero from "../../assets/base.png";
import put from "../../assets/put.png";
import put2 from "../../assets/put2.png";
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
        </>
    )
}

export default Hero;