import React, { useEffect, useRef, useState } from 'react'

// Import Common Components
import Navbar from '../../components/navbar';
import Button from '../../components/button';
import FAQ from "../../components/faq";
import InviteModal from '../../components/invite/InviteModal';


// Import Images
import Meteors from "../../assets/icons/scoreCard/meteors.svg";
import Referral from "../../assets/icons/scoreCard/referral.svg";
import Plane from "../../assets/icons/scoreCard/plane.svg";
import Clock from "../../assets/icons/scoreCard/clock.svg";
import Cross from "../../assets/icons/scoreCard/cross.svg";
import HomeHowitworks from './howItsWork';
import ReferralTimeline from '../../components/ReferalTimeline/ReferalTimeline';

// Import Json
const ScoreCardData = [
    {
        score: 1900,
        title: "Meteors",
        image: Meteors,
    },
    {
        score: 2000,
        title: "Referrals",
        image: Referral,
    },
    {
        score: 300,
        title: "Approved",
        image: Plane,
    },
    {
        score: 500,
        title: "Pending",
        image: Clock,
    },
    {
        score: 1000,
        title: "Rejected",
        image: Cross,
    },
];

const faqData = [
    {
        question: "What is Wealth Elite’s Reward & Referral Program?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "What is Wealth Elite’s Reward & Referral Program?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "What is Wealth Elite’s Reward & Referral Program?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Footer Planet animation
    const footerRef = useRef(null);
    const [showFooterPlanet, setShowFooterPlanet] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // add delay before showing
                    setTimeout(() => setShowFooterPlanet(true), 500);
                } else {
                    setShowFooterPlanet(false);
                }
            },
            {
                root: null,
                threshold: 0.3,
            },
        );

        if (footerRef.current) observer.observe(footerRef.current);
        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className='bg-gradient-color vh-100 position-relative d-flex flex-column align-items-center justify-content-center'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-12 text-center'>
                        <p className='font-40 montserrat-bold text-blue mb-0 lh-sm'>Share the Love, Get <br /> Rewarded – The More You <br /> Invite, the More You Earn!</p>
                        <p className='font-20 montserrat-medium text-gray'>Invite → Earn → Repeat. Let your knows be your gains.</p>
                        <div>
                            <button
                                className="bg-blue text-white border-0 rounded-pill px-5 py-2 jura-semibold"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Invite a MFD
                            </button>

                            <InviteModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                            />                      </div>
                    </div>

                </div>
                <div className='hero-bottom-text text-center'>
                    <p className='font-40 montserrat-bold text-blue mb-0 lh-sm'>Score - That will excite You</p>
                    <p className='font-20 montserrat-medium text-gray'>Your metrics are here to track your progress </p>
                </div>
            </div>
            {/* ScoreCards Start Here */}
            <div className='container my-5'>
                <div className='row pt-5 gap-lg-3 gap-5 justify-content-center'>
                    {ScoreCardData?.map((item, index) => (
                        <div className='col-10 col-md-4 col-lg' key={index}>
                            <div className='score-card position-relative border-radius-12 d-flex flex-column align-items-center justify-content-center p-3'>
                                <img src={item.image} className='position-absolute start-100 top-0 translate-middle' alt="Loading" />
                                <p className='font-40 montserrat-bold text-blue mb-0'>{item?.score}</p>
                                <p className='text-blue font-32 montserrat-medium'>{item?.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Referral Time Line */}
            {/* <ReferralTimeline /> */}

            {/* How Its Work Start Here */}
            <HomeHowitworks />

            {/* FAQ Section Start here */}
            <div className="mb-5">
                {/* {ContextFaqsDataAPI?.referrals_faqs?.length > 0 && ( */}
                <FAQ items={faqData} />
                {/* )} */}
            </div>
            {/* FOOTER SECTION */}
            < div ref={footerRef} className="offer-footer position-relative overflow-hidden mt-5" >
                <div className="offer-footer-section position-relative d-flex justify-content-center text-center">
                    <p className="width-lg-26 width-80 width-lg-26 font-32 space-grotesk-medium mb-5 text-white align-self-end">
                        The more you refer, the brighter your rewards shine!
                    </p>
                </div>
                <div
                    className={`position-absolute footer-semi-planet ${showFooterPlanet ? 'fade-in-up' : 'invisible'}`}
                >

                </div>
            </div >


        </>
    );
};

export default Home;