import React, { useContext, useEffect, useRef, useState } from 'react'

// Import Third PArty Components
import { IoIosArrowBack } from "react-icons/io";

// Import Common Components
import ReferralCards from './referralCards';
import FAQ from "../../components/faq";
import TrackModal from './trackModal';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UseContext/useContext';


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

const referralData = [
  {
    name: "Aakriti Soni",
    email: "akritixyz@gmail.com",
    referredOn: "9th April 2025",
    status: "Pending",
    points: "@1234 Meteors",
    referral_status: "completed",
  },
  {
    name: "Aakriti Soni",
    email: "akritixyz@gmail.com",
    referredOn: "9th April 2025",
    status: "Joined",
    points: "@1234 Meteors",
    referral_status: "completed",
  },
  {
    name: "Aakriti Soni",
    email: "akritixyz@gmail.com",
    referredOn: "9th April 2025",
    status: "Pending",
    points: "@1234 Meteors",
    referral_status: "completed",
  },
  {
    name: "Aakriti Soni",
    email: "akritixyz@gmail.com",
    referredOn: "9th April 2025",
    status: "Pending",
    points: "@1234 Meteors",
    referral_status: "completed",
  }
];
const MyReferral = () => {

     const {ContextHomeDataAPI } = useContext(UserContext);
      console.log('ContextHomeeeeeeeeeeeeee: ', ContextHomeDataAPI);

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

      <div className='bg-gradient-color pt-5'>
        <div className='container'>
          <NavLink to={"/home"} className={"text-decoration-none"}>
            <p className='text-white font-14 montserrat-medium'> <IoIosArrowBack className='font-18' /> Back</p>
          </NavLink>
          {/* Referral Cards Start Here */}
          <div className='py-5'>
            <ReferralCards />
          </div>

          {/* /* Referral /Table Start Here */}
          <div className='pt-5'>
            <p className='font-32 space-grotesk-bold text-dark-blue'>My Referrals</p>
            <div className='referral-table table-responsive mt-5'>
              <table className="table align-middle text-nowrap">
                <thead className='referral-table-header text-center'>
                  <tr>
                    <th scope="col" className='font-size-20 montserrat-medium text-start ps-5 py-3'>Name</th>
                    <th scope="col" className='font-size-20 montserrat-medium py-3'>Reffered On</th>
                    <th scope="col" className='font-size-20 montserrat-medium py-3'>Status</th>
                    <th scope="col" className='font-size-20 montserrat-medium py-3'>Earned Points</th>
                    <th scope="col" className='font-size-20 montserrat-medium py-3'>Action</th>
                  </tr>
                </thead>
                <tbody className='referral-table-body text-center'>
                  {ContextHomeDataAPI?.referrals?.all_referrals?.map((item, index) => (
                    <tr key={index}>
                      <td scope="row" className='text-start ps-5 d-flex'>
                        <span className='referral-table-user rounded-circle me-3'></span>
                        <div>
                          <p className='font-size-16 montserrat-semibold mb-0'>{item?.name}</p>
                          <p className='font-size-14 montserrat-medium mb-0'>{item?.mobile_number}</p>
                        </div>
                      </td>
                      <td className='font-size-16 montserrat-semibold'>{item?.date}</td>
                      <td className='font-size-16 montserrat-semibold'>{item?.acknowledgement_status}</td>
                      <td className='font-size-16 montserrat-semibold'>{item?.earning || "-" }</td>
                      <td className='font-size-24 montserrat-medium'>
                        {/* {item?.referral_status !== "completed" ? ( */}
                          <>
                            <TrackModal />
                          </>
                        {/* ) : (
                          "-"
                        )} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div >
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
      </div>
    </>
  );
};

export default MyReferral;