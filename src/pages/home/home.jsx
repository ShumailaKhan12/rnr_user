import React, { useContext, useEffect, useRef, useState } from 'react'

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
import { NavLink, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../UseContext/useContext';
import { getData, postData } from '../../services/api';
import { UserContext } from '../../UseContext/useContext';


const faqData = [
    {
        question: "Q1. What is this platform about?",
        answer: "This is a kind of Loyalty Program in which if you refer a MFD then you'll get meteors and stars that will give you benefit if you further purchase a product and also to the one you've referrred to."
    },
    {
        question: "Q2. How do I get started?",
        answer: "Simply click on Invite a MFD and fill the details of MFD to whom you want to refer and earn the meteors"
    },
    {
        question: "Q3. Is my data secure here?",
        answer: "Yes, we use industry-standard encryption and secure servers to keep your data safe."
    },
  {
        question: "Q4. Do I need to pay to join?",
        answer: "No, joining is completely free. You can explore features and earn rewards without any upfront cost."
    },
];


const Home = () => {

    const { accessToken, sessionId, ContextHomeDataAPI, setContextHomeDataAPI } = useContext(UserContext)
    console.log('ContextHomeDataAPI: ', ContextHomeDataAPI);

    // const [scoreData, setScoreData] = useState([]);


    useEffect(() => {
        const fetchScoreData = async () => {
            try {
                const data = await postData(`/referral_program/dashboard?token=${accessToken}&session_id=${sessionId}`, { dummy: true });
                console.log('data: ', data);

                setContextHomeDataAPI(data);
            } catch (error) {
                console.error("Error fetching score data:", error);
            }
        };

        if (accessToken && sessionId) {
            fetchScoreData();
        }
    }, [accessToken, sessionId]);


    // ScoreCard Data Showed Here
    const ScoreCard = [
        {
            score: ContextHomeDataAPI?.rewards?.current_meteors || 0,
            title: "Meteors",
            image: Meteors,
        },
        {
            score: ContextHomeDataAPI?.referrals?.total_referrals || 0,
            title: "Referrals",
            image: Referral,
        },
        {
            score: ContextHomeDataAPI?.referrals?.successful_referrals || 0,
            title: "Approved",
            image: Plane,
        },
        {
            score: ContextHomeDataAPI?.referrals?.pending_referrals || 0,
            title: "Pending",
            image: Clock,
        },
        {
            score:
                (ContextHomeDataAPI?.referrals?.total_referrals || 0) -
                (ContextHomeDataAPI?.referrals?.pending_referrals || 0) -
                (ContextHomeDataAPI?.referrals?.successful_referrals || 0),
            title: "Rejected",
            image: Cross,
        },
    ];

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
            <div className='bg-gradient-color  position-relative d-flex flex-column align-items-center justify-content-center hero-body'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-12 text-center text-body'>
                        <p className='font-40 montserrat-bold text-blue mb-0 lh-sm heading'>Share the Love, Get <br /> Rewarded – The More You <br /> Invite, the More You Earn!</p>
                        <p className='font-20 montserrat-medium text-gray px-4'>Invite → Earn → Repeat. Let your knows be your gains.</p>
                        <div>
                            <button
                                className="bg-blue text-white border-0 rounded-pill px-5 py-2 jura-semibold invite-btn"
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
                    <p className='font-40 montserrat-bold text-blue mb-0 lh-sm score-text'>Score - That will excite You</p>
                    <p className='font-20 montserrat-medium text-gray '>Your metrics are here to track your progress </p>
                </div>
            </div>
            {/* ScoreCards Start Here */}
            <div className='container my-5'>
                <div className='row pt-5 g-lg-5 g-4 justify-content-center mx-1'>
                    {ScoreCard?.map((item, index) => (
                        <div className='col-6 col-md col-lg' key={index}>
                            <NavLink to={"/myreferral"} className={"text-decoration-none"}>
                                <div className='score-card position-relative border-radius-12 d-flex flex-column align-items-center justify-content-center p-3'>
                                    <img src={item.image} className='score-img position-absolute start-100 top-0 translate-middle' alt="Loading" />
                                    <p className='score-number font-40 montserrat-bold text-blue mb-0 lh-1'>{item?.score}</p>
                                    <p className='score-text text-blue font-32 montserrat-medium mb-0'>{item?.title}</p>
                                </div>
                            </NavLink>

                        </div>
                    ))}
                </div>
            </div>

            {/* Referral Time Line */}
            <ReferralTimeline />

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