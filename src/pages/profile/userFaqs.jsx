import React, { useContext } from 'react';

// import Common Component
import FAQ from '../../components/faq';

// UseContext
import { UserContext } from '../../UseContext/useContext';

// Import Thort Party components
// React-Icons
import { IoIosArrowBack } from 'react-icons/io';
// Navigation
import { NavLink } from 'react-router-dom';

const UserFaqs = () => {
  // Global context
  // const { ContextFaqsDataAPI } = useContext(UserContext);

  // Josn
  const FaqData = [
    {
      question: "Q1. How do I report a bug or technical issue?",
      answer: "You can submit a bug report from the Help and support section via call or mail or you can also send through Send Support, including screenshots and a short description of the issue."
    },
    {
      question: "Q2. Do rewards expire?",
      answer: "Some rewards may have an expiry date like coupons but not meteors and stars."
    },
    {
      question: "Q3. How can I change my registered email or phone number?",
      answer: "You can not update them from here you can only view."
    },
    {
      question: "Q4. My rewards are not showing. What should I do?",
      answer: "Refresh your dashboard. If the issue persists, contact support with your user ID."
    },
    {
      question: "Q5. How long does it take to resolve issues?",
      answer: "Most issues are resolved within 24–48 hours, depending on the complexity."
    },
  ];

  return (
    <section className="pt-5 pb-5">
      <div className='container'>
        <NavLink to={"/profile"} className={"text-decoration-none"}>
          <div className='back text-blue my-3 d-flex align-items-center font-14 montserrat-medium'>
            <IoIosArrowBack />Back
          </div>

        </NavLink>
        <div className="pt-5 mt-5 pb-5 bg-white rounded-4">
          {/* Faq Section */}
          <FAQ
            items={FaqData}
            // items={ContextFaqsDataAPI?.help_and_support}
            classes={'mt-0'} />
        </div>
      </div>
    </section >
  );
};

export default UserFaqs;
