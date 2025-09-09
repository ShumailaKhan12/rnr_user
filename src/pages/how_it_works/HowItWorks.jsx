
import React from 'react';
import { NavLink } from 'react-router-dom';
import stepindicator from '../../assets/Images/how-it-work/line.svg'
import one from '../../assets/Images/how-it-work/1.png'
import two from '../../assets/Images/how-it-work/2.png'
import three from '../../assets/Images/how-it-work/3.png'
import four from '../../assets/Images/how-it-work/4.png'
import "../../App.scss";
import stepindicatorMobile from '../../assets/Images/how-it-work/stepindicatorMobile.png'
const HowItWorks = () => {
    return (
        <div className="referral-program bg-white montserrat-medium ">

            <div className="row justify-content-center align-items-center">
                <div className="referal-row">
                    <div className="program-header text-center ">
                        <h1 className="program-title montserrat-bold font-40 ">Referral & Earn program</h1>
                        <p className="program-subtitle montserrat-medium font-20 lh-sm">
                            Share the Love, Get Rewarded - The More You Invite,<br />
                            the More You Earn!
                        </p>
                    </div>

                    <div className="referral-journey">

                        {/* Desktop line */}
                        <img src={stepindicator} alt="" className="stepindicator desktop-line" />
                        {/* Mobile line */}
                        <img src={stepindicatorMobile} alt="" className="stepindicator mobile-line" />
                        {/* <img src={stepindicator} alt="" className="stepindicator" /> */}

                        {/* Step 1: Invite */}
                        <div className="step step-1">
                            <div className="step-content">
                                <h3 className="step-title font-30">INVITE</h3>
                                <p className="step-description font-20">
                                    Invite your <br /> friends and take <br /> the first step
                                </p>
                            </div>
                        </div>
                        <img className='one' src={one} alt="" />
                        {/* Step 2: Accept & Purchase */}
                        <div className="step step-2">
                            <div className="step-content">
                                <h3 className="step-title font-30">ACCEPT</h3>
                                <p className="step-description font-20">
                                    Acceptance of <br /> invite is the <br /> second n most <br />   important step
                                </p>
                            </div>
                        </div>
                        <img className='two' src={two} alt="" />
                        {/* Step 3 Purchase */}
                        <div className="step step-3">
                            <div className="step-content">
                                <h3 className="step-title font-30">PURCHASE</h3>
                                <p className="step-description font-20">
                                    With all that <br /> hustle of invite n <br /> accept, its time <br /> to get rewarded
                                    {/* To get chance of earning You must  purchase the product of your  choice  */}
                                </p>
                            </div>
                        </div>
                        <img className='three' src={three} alt="" />
                        {/* Step 4: Earn */}
                        <div className="step step-4">
                            <div className="step-content">
                                <h3 className="step-title font-30">EARN</h3>
                                <p className="step-description font-20">
                                    With all that <br /> hustle of invite n <br /> accept, its time <br /> to get rewarded
                                </p>
                            </div>
                        </div>
                        <img className='four' src={four} alt="" />
                    </div>

                    <div className="text-center mt-5">
                        <NavLink to={"/home"}>
                            <button className="btn btn-primary get-started-btn ">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HowItWorks;