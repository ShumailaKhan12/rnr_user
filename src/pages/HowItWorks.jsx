import React from 'react';
import '../App.scss'
import stepindicator from '../assets/stepindicator.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

const HowItWorks = () => {
    return (
        <div className="referral-program">

            <div className="row justify-content-center">
                <div className="    ">
                    <div className="program-header text-center ">
                        <h1 className="program-title">Referral & Earn program</h1>
                        <p className="program-subtitle">
                            Share the Love, Get Rewarded - The More You Invite,<br />
                            the More You Earn!
                        </p>
                    </div>

                    <div className="referral-journey">

                        <img src={stepindicator} alt=""  className="stepindicator"/>

                        {/* Step 1: Invite */}
                        <div className="step step-1">
                            <div className="step-content">
                                <h3 className="step-title">INVITE</h3>
                                <p className="step-description">
                                    Invite your <br /> friends and take <br /> the first step
                                </p>
                            </div>
                        </div>
                        <img className='one' src={one} alt="" />
                        {/* Step 2: Accept & Purchase */}
                        <div className="step step-2">
                            <div className="step-content">
                                <h3 className="step-title">ACCEPT</h3>
                                <p className="step-description">
                                    Acceptance of <br /> invite is the <br /> second n most <br />   important step
                                </p>
                            </div>
                        </div>
                        <img className='two' src={two} alt="" />
                        {/* Step 3 Purchase */}
                        <div className="step step-3">
                            <div className="step-content">
                                <h3 className="step-title">PURCHASE</h3>
                                <p className="step-description">
                                    With all that <br /> hustle of invite n <br /> accept, its time <br /> to get rewarded
                                </p>
                            </div>
                        </div>
                        <img className='three' src={three} alt="" />
                        {/* Step 4: Earn */}
                        <div className="step step-4">
                            <div className="step-content">
                                <h3 className="step-title">EARN</h3>
                                <p className="step-description">
                                    With all that <br /> hustle of invite n <br /> accept, its time <br /> to get rewarded
                                </p>
                            </div>
                        </div>
                        <img className='four' src={four} alt="" />
                    </div>

                    <div className="text-center mt-5">
                        <button className="btn btn-primary get-started-btn ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HowItWorks;