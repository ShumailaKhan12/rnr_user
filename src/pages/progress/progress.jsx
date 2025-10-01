import React, { useContext, useEffect, useState } from 'react'

import PlanetProgress from "./progressBar"
// Import Iamges
import tiltship from "../../assets/Images/progress-img/tillship1.svg";
import star from "../../assets/Images/progress-img/star.svg";
import meteor from "../../assets/Images/progress-img/metero.svg";
import borderstar from "../../assets/Images/progress-img/bdrstar.svg";
import centerPlanet1 from "../../assets/Images/progress-img/purple.svg";
import centerPlanet2 from "../../assets/Images/progress-img/yellow.svg";
import centerPlanet3 from "../../assets/Images/progress-img/green.svg";
import centerPlanet4 from "../../assets/Images/progress-img/blue.svg";
import pathway from "../../assets/Images/progress-img/pathway1.svg";
import pathbottom from "../../assets/Images/progress-img/pathbottom.svg";
import pathtop from "../../assets/Images/progress-img/pathtop.svg";
import prgicon from "../../assets/Images/progress-img/prgicon.svg";
import astronot from "../../assets/Images/progress-img/astronot.svg"
import longarrow from "../../assets/Images/progress-img/lngarw.svg"
import { IoIosArrowBack } from 'react-icons/io';
import { data, NavLink } from 'react-router-dom';
import InviteModal from '../../components/invite/InviteModal';
// import dot from '../../assets/Images/progress-img/dot.png'
import Frame from '../../assets/Images/progress-img/Frame.png'
import mobileLine from '../../assets/Images/progress-img/mobile-line.png'
import { UserContext } from '../../UseContext/useContext';
import { postData } from '../../services/api';
// import dot from '../../assets/Images/progress-img/dot.png'
// import Frame from '../../assets/Images/progress-img/Frame.png'
// Array of planet images for rotation display
const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

const Progress = () => {

  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const openInviteModal = () => setIsInviteOpen(true);
  const closeInviteModal = () => setIsInviteOpen(false);

  const { ContextHomeDataAPI } = useContext(UserContext);
  console.log('ContextHomeDataAPI progresss: ', ContextHomeDataAPI);


  const [progressData, setProgressData] = useState(null);

  // console.log(progressData)

  // useEffect(() => {
  //   const fetchUserProgress = async () => {
  //     try {
  //       if (userData?.Id) {
  //         const response = await postData(`referral_program/progress/${userData.Id}`, {});
  //         console.log("API Response:", response);

  //         setProgressData(response);
  //       }
  //     } catch (error) {
  //       console.error("API Error:", error);
  //     }
  //   };

  //   fetchUserProgress();
  // }, [userData]);


  // Context data from UserContext
  // const {
  //   AuthLocal,
  //   ContextFaqsDataAPI, // FAQ data containing galaxy milestones
  //   ContextHomeDataAPI, // Home page data
  //   setContextHomeDataAPI,
  //   MeterUpdateData,
  //   setMeterUpdateData,
  // } = useContext(UserContext);

  // UseState
  // const [isVisible, setIsVisible] = useState(true);

  // Planet carousel states
  const [currentIndex, setCurrentIndex] = useState(
    // ContextHomeDataAPI?.part4?.length - 1 ||
    0
  ); // Set initial planet based on user progress


  const planets = [
    {
      name: 'Planet A',
      // range: [
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[0]
      //     ?.meteors_required_to_unlock,
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[1]
      //     ?.meteors_required_to_unlock - 1,
      // ],
    },
    {
      name: 'Planet B',
      // range: [
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[1]
      //     ?.meteors_required_to_unlock,
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[2]
      //     ?.meteors_required_to_unlock - 1,
      // ],
    },
    {
      name: 'Planet C',
      // range: [
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[2]
      //     ?.meteors_required_to_unlock,
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[3]
      //     ?.meteors_required_to_unlock,
      // ],
    },
    {
      name: 'Planet D',
      // range: [
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[3]
      //     ?.meteors_required_to_unlock,
      //   ContextFaqsDataAPI?.galaxy_data?.milestones[4]
      //     ?.meteors_required_to_unlock,
      // ],
    },
  ];

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const filteredImages = images.filter(
    (_, index) =>
      index !== prevIndex && index !== nextIndex && index !== currentIndex,
  );

  // Get the indices (numbers) of the filtered images
  const imageNumbers = filteredImages.map((image) => images.indexOf(image));


  // const MobileVerticalLayout = () => (
  //   <div className="mobile-vertical-layout d-flex  justify-content-center align-items-center  d-block d-md-none">
  //     {/* Left side: Dashed line + dots */}
  //     <div className="mobile-path-container">
  //       <div className="mobile-vertical-line"></div>

  //       <div className="mobile-dot dot-0"><img src={Frame} alt="dot" /></div>
  //       <div className="mobile-dot dot-25"><img src={Frame} alt="dot" /></div>
  //       <div className="mobile-dot dot-50"><img src={Frame} alt="dot" /></div>
  //       <div className="mobile-dot dot-75"><img src={Frame} alt="dot" /></div>
  //       {/* <div className="mobile-dot dot-100"><img src={Frame} alt="dot" /></div> */}
  //     </div>

  //     {/* Right side: Planets */}
  //     <div className="mobile-planet-main">
  //       {/* Planet A */}
  //       <div className="mobile-planet-section planet-0">
  //         <img className="mobile-planet-img planet-purple" src={images[0]} alt="Planet A" />
  //         <div className="mobile-planet-info">
  //           <h4 className='font-22 space-grotesk-medium text-dark-blue'>{progressData?.current_galaxy?.[0]?.galaxy_name}</h4>
  //           <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>Complete the level and earn <br />  <span className='space-grotesk-medium'>1000 Meteors</span></p>

  //         </div>
  //       </div>

  //       {/* Planet B */}
  //       <div className="mobile-planet-section planet-25">
  //         <img className="mobile-planet-img planet-yellow blurred" src={images[1]} alt="Planet B" />
  //         <div className="mobile-planet-info">
  //           <h4 className='font-22 space-grotesk-medium text-dark-blue'>{progressData?.current_galaxy?.[0]?.galaxy_name}</h4>
  //           <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>You are just  <span className='space-grotesk-medium'>1850 Meteors</span> <br />  away to reach to this planet</p>
  //         </div>
  //       </div>

  //       {/* Planet C */}
  //       <div className="mobile-planet-section planet-50">
  //         <img className="mobile-planet-img planet-green blurred" src={images[2]} alt="Planet C" />
  //         <div className="mobile-planet-info">
  //           <h4 className='font-22 space-grotesk-medium text-dark-blue'>{progressData?.current_galaxy?.[0]?.galaxy_name}</h4>
  //           <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>Little more consistency and <br /> you will earn  <span className='space-grotesk-medium'> 2080 Meteors</span></p>

  //         </div>
  //       </div>

  //       {/* Planet D */}
  //       <div className="mobile-planet-section planet-75">
  //         <img className="mobile-planet-img planet-blue blurred" src={images[3]} alt="Planet D" />
  //         <div className="mobile-planet-info">
  //           <h4 className='font-22 space-grotesk-medium text-dark-blue'>{progressData?.current_galaxy?.[0]?.galaxy_name} </h4>
  //           <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'> <span className='space-grotesk-medium'>3080 Meteors</span> to go and <br /> your exclusive reward awaits!!!</p>

  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

const MobileVerticalLayout = () => {
  const dotPositions = [0, 25, 50, 75]; 

  const planetData = [
    {
      name: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[0]?.milestone_name || "Planet A",
      message: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[0]?.milestone_description,
      highlight: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[0]?.milestone_reward_meteors,
    },
    {
      name: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[1]?.milestone_name || "Planet A",
      message: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[1]?.milestone_description,
      highlight: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[1]?.milestone_reward_meteors,
    },
    {
      name: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[2]?.milestone_name || "Planet A",
      message: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[2]?.milestone_description,
      highlight:ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[2]?.milestone_reward_meteors,
    },
    {
      name: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[3]?.milestone_name || "Planet A",
      message: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[3]?.milestone_description,
      highlight: ContextHomeDataAPI?.admin_galaxies?.[0]?.milestones?.[3]?.milestone_reward_meteors,
    },
  ];

  const colorClasses = ['purple', 'yellow', 'green', 'blue'];

  return (
    <div className="mobile-vertical-layout d-flex justify-content-center align-items-center d-block d-md-none">
      {/* Left side: Dashed line + dots */}
      <div className="mobile-path-container">
        <div className="mobile-vertical-line"></div>
        {dotPositions.map((pos) => (
          <div className={`mobile-dot dot-${pos}`} key={pos}>
            <img src={Frame} alt="dot" />
          </div>
        ))}
      </div>

      {/* Right side: Planets */}
      <div className="mobile-planet-main">
        {planetData.map((planet, index) => (
          <div className={`mobile-planet-section planet-${dotPositions[index]}`} key={index}>
            <img
              className={`mobile-planet-img planet-${colorClasses[index]} ${index !== 0 ? 'blurred' : ''}`}
              src={images[index]}
              alt={`Planet ${index}`}
            />
            <div className="mobile-planet-info">
              <h4 className="font-22 space-grotesk-medium text-dark-blue">{planet.name}</h4>
              <p className="lh-sm text-blue font-16 space-grotesk-regular text-center planet-text">
                {planet.message && (
                  <>
                    {planet.message}
                    <br />
                  </>
                )}
                <span className="space-grotesk-medium">{planet.highlight}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

  return (
    <>
      <section
        id="Heome_Section"
        className={`hero-section position-relative min-vh-100 bg-secondscreen`}
      >
        <div className='container'>
          {/* Header section Start */}
          <div
            className="row justify-content-between align-items-center mt-5 mb-md-5 mb-lg-0"
            style={{
              animation: 'moveDownFade 0.7s forwards'
            }}
          // onAnimationEnd={SecScrAnimt ? handleAnimationEnd : undefined}
          >
            <div className="col-lg-3 col-3">
              <NavLink to={"/home"} className={"text-decoration-none"}>
                <p className='text-white font-14 montserrat-medium mb-0 mt-md-5 mt-lg-0 '> <IoIosArrowBack className='font-18 back-text' /> Back</p>
              </NavLink>
            </div>
            <div className="col-lg-5 col-9 d-flex  justify-content-end px-0 mb-lg-2 pe-3">
              <div className="till-ship w-75 position-relative tilte-shadow rounded-3 mt-lg-0  mb-2 mt-md-5">
                <img
                  className="position-absolute till-ship-img"
                  src={tiltship}
                  alt="tiltship"
                />
                <div className="py-lg-2 py-1 offset-2 text-white d-flex justify-content-evenly align-items-center">
                  <span className="montserrat-bold  header-text font-14 till-ship-border-color pe-3 z-1 position-relative">
                    {/* {ContextHomeDataAPI?.part2} */}
                    {progressData?.total_meteors ?? 0}
                    <img
                      className="my-1 mx-2 header-meteors"
                      src={meteor}
                      alt="metero"
                    />
                    <span className="header-text font-14 montserrat-medium">
                      Meteors
                    </span>
                  </span>
                  <span className="header-text font-14 montserrat-semibold">
                    {/* {ContextHomeDataAPI?.part1} */}
                    {progressData?.total_stars ?? 0}
                    <img className="mx-1 header-star" src={star} alt="star" />
                    <span className="space-grotesk-medium header-text">star</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`row justify-content-between second-screen-xl pt-2 gap-5`}
          >
            <div className={`col-lg-2 col-md-12 col-12 px-0 d-flex flex-column justify-content-between `}>
              <div className={`left-sidebar-main-div mx-lg-0 mx-3`}>
                <p className="text-dark-blue space-grotesk-medium font-16 mb-3">
                  Your Progress So far
                </p>
                <div className="progress-sect rounded-4">
                  {/* Progress bar */}

                  <PlanetProgress
                    Pnt={100}
                    progressData={progressData}
                    //  Pnt={progressData?.total_meteors ?? 0}
                    // Pnt={MeterUpdateData?.total_meteors}
                    planets={planets}
                    data={data}
                    prgicon={prgicon}
                    borderstar={borderstar}
                    ContextHomeDataAPI={ContextHomeDataAPI}
                  />

                  <div className="text-center mt-34 pb-3 d-none d-lg-block">
                    <img
                      className="w-25"
                      src={borderstar}
                      alt="borderstar"
                    />
                    <h4 className="my-0 mt-2 text-blue-2  font-18 space-grotesk-medium">
                      Galaxy Complete
                    </h4>
                  </div>
                </div>


              </div>
            </div>

            <div className="col-lg-9 desktop-horizontal-layout col-md-12 col-12 pt-4 planet-section overflow-auto hidden-scrollbar">

              <div className="d-flex mb-0">
                <div className="col-lg-3 col-5 text-center">
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 planet-shadow-${currentIndex === 0 ? 'purple' : currentIndex === 1 ? 'yellow' : currentIndex === 2 ? 'green' : 'blue'}     ${0 !== currentIndex ? "blurred" : ""}       `}
                    src={images[currentIndex]}
                    alt="purple"
                  />
                  <div className='text-center text-dark-blue'>
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1 pt-md-2">
                      {ContextHomeDataAPI?.admin_galaxies?.[0]?.milestone_name || "Planet A"}
                    </h4>
                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text mb-0'>{ContextHomeDataAPI?.admin_galaxies?.[0]?.milestone_description} <br /> <span className='space-grotesk-medium'>{ContextHomeDataAPI?.admin_galaxies?.[0]?.milestone_reward_meteors} Meteors</span></p>
                  </div>
                </div>
                <div className="col-lg-3 col-5"></div>
                <div className="col-lg-3 col-5 text-center">
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 blurred planet-shadow-${imageNumbers[0] === 0 ? 'purple' : imageNumbers[0] === 1 ? 'yellow' : imageNumbers[0] === 2 ? 'green' : 'blue'}`}
                    src={images[imageNumbers]}
                    alt="yellow"
                  />
                  <div className='text-center text-dark-blue'>
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1 pt-md-2">
                      {ContextHomeDataAPI?.admin_galaxies?.[2]?.milestone_name || "Planet C"}
                    </h4>
                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text mb-0'>{ContextHomeDataAPI?.admin_galaxies[2]?.milestone_description} <br /> <span className='space-grotesk-medium'>{ContextHomeDataAPI?.admin_galaxies?.[2]?.milestone_reward_meteors} Meteors</span></p>
                  </div>
                </div>
                <div className="col-lg-3 col-5"></div>
                <div
                  className={`col-lg-3 col-5 text-center
                ` }
                >
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 blurred planet-shadow-${currentIndex === 0 ? 'purple' : currentIndex[0] === 1 ? 'yellow' : currentIndex[0] === 2 ? 'green' : 'blue'} ${0 !== currentIndex ? "blurred" : ""}`}
                    src={images[currentIndex]}
                    alt="yellow"
                  />
                  <div className='text-center text-dark-blue'>
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1 pt-md-2">
                      {ContextHomeDataAPI?.admin_galaxies?.[4]?.milestone_name || "Planet E"}
                    </h4>

                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text mb-0'>{ContextHomeDataAPI?.admin_galaxies?.[4]?.milestone_description} <br /> <span className='space-grotesk-medium'>{ContextHomeDataAPI?.admin_galaxies[4]?.milestone_reward_meteors} Meteors</span></p>
                  </div>
                </div>
              </div>
              <div className="d-flex position-relative pb-5">
                <img
                  className="position-absolute second-screen-pathway px-0"
                  src={pathway}
                  alt="pathway"
                />

                <div
                  className={`col-lg-4 col-6`}
                >
                  <img
                    className="position-absolute a scrol-path-0 px-0"
                    src={pathbottom}
                    alt="pathway"
                  />
                </div>


                <div
                  className={`col-lg-4 col-6`}
                >
                  <img
                    className="position-absolute a scrol-path-1 px-0"
                    src={pathtop}
                    alt="pathway"
                  />
                </div>

                {/* <div
                  className={`col-lg-3 col-6`}
                >
                  <img
                    className="position-absolute b scrol-path-2 px-0"
                    src={pathbottom}
                    alt="pathway"
                  />
                </div> */}

              </div>
              <div className="d-flex mt-5 pt-5">
                <div className="col-lg-3 col-5"></div>
                <div className="col-lg-3 col-5 text-center text-dark-blue second-scrn-padding">
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 planet-shadow-${nextIndex === 0 ? 'purple' : nextIndex === 1 ? 'yellow' : nextIndex === 2 ? 'green' : 'blue'} ${nextIndex !== currentIndex ? "blurred" : ""}`}
                    src={images[nextIndex]}
                    alt="greenplnt"
                  />
                  <div className=" text-center text-dark-blue">
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1">
                      {ContextHomeDataAPI?.admin_galaxies[1]?.milestone_name || "Planet B"}
                    </h4>
                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>{ContextHomeDataAPI?.admin_galaxies[1]?.milestone_description}<br /> <span className='space-grotesk-medium'>{ContextHomeDataAPI?.admin_galaxies[1]?.milestone_reward_meteors} Meteors</span></p>
                  </div>
                </div>
                <div className="col-lg-3 col-5"></div>
                <div
                  className={`col-lg-3 col-5 text-center text-dark-blue`}
                >
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 planet-shadow-${prevIndex === 0 ? 'purple' : prevIndex === 1 ? 'yellow' : prevIndex === 2 ? 'green' : 'blue'} ${prevIndex !== currentIndex ? "blurred" : ""} `}
                    src={images[prevIndex]}
                    alt="blueplnt"
                  />
                  <div className=" text-center text-dark-blue">
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1">
                      {ContextHomeDataAPI?.admin_galaxies[3]?.milestone_name || "Planet D"}
                    </h4>
                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>{ContextHomeDataAPI?.admin_galaxies[3]?.milestone_description} <br /> <span className='space-grotesk-medium'>{ContextHomeDataAPI?.admin_galaxies[3]?.milestone_reward_meteors} Meteors</span></p>
                  </div>
                </div>
                <div className="col-lg-3 col-5"></div>
                {/* <div
                  className={`col-lg-3 col-5 text-center text-dark-blue`}
                >
                  <img
                    className={`width-35 width-md-35 width-lg-40 width-xl-70 planet-shadow-${nextIndex === 0 ? 'purple' : nextIndex === 1 ? 'yellow' : nextIndex === 2 ? 'green' : 'blue'} ${nextIndex !== currentIndex ? "blurred" : ""}`}
                    src={images[nextIndex]}
                    alt="blueplnt"
                  />
                  <div className=" text-center text-dark-blue">
                    <h4 className="mb-lg-2 mb-0 space-grotesk-medium font-24 planet-heading lh-sm-1">
                      {progressData?.current_galaxy?.[0]?.galaxy_name || "Planet F"}
                    </h4>

                    <p className='lh-sm text-blue font-16 space-grotesk-regular text-center planet-text'>Complete the level and earn <br /> <span className='space-grotesk-medium'>1000 Meteors</span></p>
                  </div>
                </div> */}


              </div>

            </div>
          </div>
          <MobileVerticalLayout />

          <div className='col-lg-4  col-md-5 mb-lg-0  mb-4 d-flex justify-content-md-start justify-content-cente '>
            <div
              className={`w-60 d-flex justify-content-evenly background-dark-pink mt-5 rounded-2 position-relative py-2 px-5 left-box `}
              id="leftBox"
              onClick={openInviteModal}
            >
              <img
                className="progress-sect-astronot position-absolute me-1"
                src={astronot}
                alt="astronot"
              />
              <span className="text-white font-14 montserrat-semibold py-2 pe-1">
                Invite & Earn
              </span>
              <img src={longarrow} alt="longarrow" />
            </div>
          </div>

        </div>
      </section >
      <InviteModal isOpen={isInviteOpen} onClose={closeInviteModal} />
    </>
  );
};

export default Progress;