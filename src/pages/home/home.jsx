import React, { useEffect, useRef, useState } from 'react'

// Import Common Components
import Navbar from '../../components/navbar';
import Button from '../../components/button';
import FAQ from "../../components/faq";
import InviteModal from '../../components/invite/InviteModal';


// Import Json
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
            <div className='bg-gradient-color vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-12 text-center'>
                        <p className='font-40 montserrat-bold text-blue mb-0 lh-sm'>Share the Love, Get <br /> Rewarded – The More You <br /> Invite, the More You Earn!</p>
                        <p className='font-20 montserrat-medium text-gray'>Invite → Earn → Repeat. Let your knows be your gains.</p>
                        <div>
                            <button
                                className="bg-blue text-white border-0 rounded-pill px-5 jura-semibold"
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
                <div className='pt-5'>
                    <p className='font-40 montserrat-bold text-blue mb-0 lh-sm'>Score - That will excite You</p>
                    <p>Your metrics are here to track your progress </p>
                </div>
            </div>


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