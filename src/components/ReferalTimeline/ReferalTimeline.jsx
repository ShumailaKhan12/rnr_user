import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.scss";
import InActiveIcon from "../../assets/Images/referel-timeline/InActive-dot.png";
import ActiveDot from "../../assets/Images/referel-timeline/acitve-dot.png";
import rocket from "../../assets/Images/referel-timeline/rocket.png";
import star from "../../assets/Images/referel-timeline/star.png";

const ReferralTimeline = () => {
    const steps = [
        { id: 1, text: <>Great! You<br />have started<br />your journey<br />with your 1st<br />referral.</>, icon: star },
        { id: 2, text: <>Set the board by <br /> referring your <br /> 2nd friend.</>, icon: star },
        { id: 3, text: <>Close to your <br /> Star. Buckle <br /> up and shoot.</>, icon: star },
        { id: 4, text: <>Last step left. <br />Just one <br /> referral and <br /> you got a star</>, icon: star },
        { id: 5, text: <>Congrats !! <br />Happy-go-lucky.</>, icon: star },
    ];

    const [activeStep, setActiveStep] = useState(3);
    const [rocketPos, setRocketPos] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const stepRefs = useRef([]);


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const safeStep = Math.min(activeStep, steps.length - 1);


    useEffect(() => {
        if (stepRefs.current[safeStep]) {
            const el = stepRefs.current[safeStep];
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement.getBoundingClientRect();

            if (!isMobile) {
                // Horizontal (Desktop)
                setRocketPos(rect.left - parentRect.left + rect.width / 2);
            } else {
                // Vertical (Mobile)
                setRocketPos(rect.top - parentRect.top + rect.height / 2);
            }
        } else {
            setRocketPos(0);
        }
    }, [safeStep, isMobile]);

    let progress = safeStep === 0 ? 0 : (safeStep / (steps.length - 1)) * 100;

    return (
        <div className={`referral-timeline montserrat-medium pt-5 ${isMobile ? "mobile" : ""}`}>
            <div className={`progress-line position-relative ${!isMobile ? "d-flex" : ""}`}>
                <div className="line-bg"></div>
                <div
                    className="line-active bg-blue"
                    style={!isMobile ? { width: `${progress}%` } : { height: `${progress}%` }}
                ></div>
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`step ${index <= safeStep ? "active" : ""}`}
                        ref={(el) => (stepRefs.current[index] = el)}
                    >
                        <div className="step-icon">
                            {index === steps.length - 1 ? (
                                <img src={star} alt="star" className="star" />
                            ) : (
                                index !== safeStep && (
                                    <span className="dot">
                                        {index < safeStep ? (
                                            <img src={ActiveDot} alt="active" />
                                        ) : (
                                            <img src={InActiveIcon} alt="inactive" className="inactive" />
                                        )}
                                    </span>
                                )
                            )}
                        </div>
                        <p className="mt-3 font-20 montserrat-medium lh-sm">{step.text}</p>
                    </div>
                ))}

                <img
                    src={rocket}
                    alt="rocket"
                    className="rocket"
                    style={!isMobile ? { left: `${rocketPos}px` } : { top: `${rocketPos}px` }}
                />
            </div>


            <div className=" d-flex justify-content-end mr-40 ">
                <button className="btn custom-btn bg-white">
                    View More
                </button>
            </div>
        </div>
    );
};

export default ReferralTimeline;
