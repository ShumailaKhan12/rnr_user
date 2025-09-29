import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { UserContext } from '../../UseContext/useContext';
// Images
import ReferralUfo from '../../assets/Images/MyReferral/UFO-LEFT.svg';
import HoverUfo from '../../assets/Images/MyReferral/referral-ufo.svg';
import LeftArrowIcon from '../../assets/Images/MyReferral/right-arrow.svg';


const ReferralCards = ({ RefralDataAPI }) => {
  const [isHovered, setIsHovered] = useState(null);
  // const [isTablet, setIsTablet] = useState(window.innerWidth < 992);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth < 992 ? 1 : 3);


  const { ContextHomeDataAPI } = useContext(UserContext);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 992 ? 1 : window.innerWidth < 1200 ? 2 : 3);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // useEffect(() => {
  //   const handleResize = () => {
  //     setSlidesToShow(window.innerWidth < 992 ? 1 : window.innerWidth < 1200 ? 2 : 3);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const cardsData = [
    {
      id: 1,
      count: `${ContextHomeDataAPI?.referrals?.total_referrals}`,
      title: 'Total Referrals',
      subtitle: "People You've Referred",
      image: ReferralUfo,
      hoverImage: HoverUfo,
    },
    {
      id: 2,
      count: `${ContextHomeDataAPI?.referrals?.successful_referrals}`,
      title: 'Converted Referrals',
      subtitle: "Earning's by Referrals",
      image: ReferralUfo,
      hoverImage: HoverUfo,
    },
    {
      id: 3,
      count: `${ContextHomeDataAPI?.referrals?.pending_referrals}`,
      title: 'Pending Referrals',
      subtitle: 'No of Invites Waiting to Join',
      image: ReferralUfo,
      hoverImage: HoverUfo,
    },
  ];

  //  const sliderSettings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 768, // mobile
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const Card = ({ card }) => (
    <div
      className="referral-card mx-md-3 mt-5 position-relative text-center ufo-light-img"
      onMouseEnter={() => setIsHovered(card.id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <img
        src={isHovered === card.id ? card.hoverImage : card.image}
        alt="UFO"
        className="card-ufo-img"
      />
      <p className="font-size-28 referral-txt montserrat-bold text-white pt-5">{card.count}</p>
      <p className="font-26 referral-txt montserrat-semibold text-blue mb-0">{card.title}</p>
      <p className="font-size-14 montserrat-semibold referred-card-subtitle">{card.subtitle}</p>
      {/* <button className="border-0 text-white rounded background-text-blue px-4 py-2 mt-3">
        View
      </button> */}
    </div>

  );

  return (
    <div className="">
      <Slider {...sliderSettings} className="referral-slider">
        {cardsData.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReferralCards;
