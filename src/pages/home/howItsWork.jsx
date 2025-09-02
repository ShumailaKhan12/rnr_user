import React, { useContext, useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Robortgif from '../../assets/icons/home/HowItWorks/gif-hiw.gif';
import Planet1 from '../../assets/Images/HowItsWork/HIW-planet-1.svg';
import Planet2 from '../../assets/Images/HowItsWork/HIW-planet-2.svg';
import Planet3 from '../../assets/Images/HowItsWork/HIW-planet-3.svg';
import Rocketgif from '../../assets/Images/HowItsWork/racketgif.gif';
import { postData } from '../../services/api';
import { DecryptFunction } from '../../utils/decryptFunction';
import { UserContext } from '../../UseContext/useContext';

const HomeHowitworks = ({ isActive, isExiting }) => {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  // const [robotClicked, setRobotClicked] = useState(false);
  const [showSteps, setShowSteps] = useState(true);
  const [showExit, setShowExit] = useState(false);
  const [scrollDir, setScrollDir] = useState('down'); // Local scroll direction
  const Auth = JSON?.parse(localStorage.getItem('Auth') ?? '{}');
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  // const { ContextFaqsDataAPI } = useContext(UserContext);

  // =================================
  //       API FUNCTIONALITY
  // =================================

  const HandleAPI = async () => {
    try {
      const decrypt = await DecryptFunction(Auth)
      const enyptData = await postData('/admin/fetch-custom-data', {
        user_id: decrypt?.part3,
        log_alt: decrypt?.part2,
        mode: decrypt?.part1,
      });
      const Decrpty = await DecryptFunction(enyptData);
    } catch (error) {
    }
  };

  useEffect(() => {
    HandleAPI();
  }, []);

  // AOS init
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Local wheel scroll direction tracking
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setScrollDir('down');
    } else if (e.deltaY < 0) {
      setScrollDir('up');
    }
  };

  // Attach wheel listener only when section is active
  useEffect(() => {
    if (isActive) {
      window.addEventListener('wheel', handleWheel);
    } else {
      window.removeEventListener('wheel', handleWheel);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isActive]);

  // Animation step logic with interval
  useEffect(() => {
    if (showSteps) {
      const interval = setInterval(() => {
        setStep((prev) => {
          if (prev < 6) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 900);

      return () => clearInterval(interval);
    }
  }, [showSteps]);

  // Reset section when active again
  useEffect(() => {
    if (isActive) {
      setShowExit(false);
      // setRobotClicked(false);
      setShowSteps(false);
      setStep(0);
      setTimeout(() => AOS.refreshHard(), 100);

      // ✅ Auto trigger robot exit after 0.5s
      // setTimeout(() => {
      //   setRobotClicked(true);
      // }, 500);

      // ✅ Trigger second step AFTER robot animation is done (1s animation + 0.5s delay)
      // setTimeout(() => {
      //   setShowSteps(true);
      // }, 1500);
    }
  }, [isActive]);

  // Trigger exit animation
  useEffect(() => {
    if (isExiting) {
      setShowExit(true);
    }
  }, [isExiting]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="HowItWorks_Section"
      ref={sectionRef}
      className={`section-howitworks text-center ${showExit ? (scrollDir === 'down' ? 'zoom-down-out' : 'fade-out') : ''
        } ${isActive ? 'aos-animate zoom-in-up-custom start-animation' : 'zoom-down'}`}
    >
      <div className="container position-relative h-100">
        <h2 className="montserrat-bold section-heading font-40 text-blue mb-0 lh-sm">
          Mechanism - Makes your flow clear
        </h2>
        <h4 className='font-20 mostserrat-medium howitswork-title'>Here you will know how this program works.</h4>

        {/* ✅ Removed click handler completely */}
        {/* {!showSteps && (
          <div
            className={`howitwork-first cursor-pointer d-flex h-100 justify-content-center align-items-center ${robotClicked ? 'robot-exit' : ''}`}
          >
            <img
              className="robort-image cursor-pointer"
              src={Robortgif}
              alt="Robot"
            />
          </div>
        )} */}

        {/*  Desktop View (Horizontal Timeline) */}
        {showSteps && !isMobile && (
          <div
            className="howitwork-second h-100 d-flex align-items-center justify-content-center"
            data-aos="zoom-in-up"
          >
            <div className="row text-center position-relative inner-row-index">
              {/* Step 1 */}
              <div className={`col-12 col-md-4 howitworks-step ${step >= 1 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22 text-blue  lh-sm">
                  Launch Your Cosmic Journey
                </h6>
                <p className="montserrat-regular font-18 text-blue  lh-sm">
                  Start your adventure by signing up and setting course for your first galaxy.
                </p>
              </div>

              {/* Planet 2 */}
              <div
                className={`col-12 col-md-4 d-flex align-items-end justify-content-center howitworks-step ${step >= 3 ? 'visible' : ''
                  }`}
              >
                <img src={Planet2} className="planet-width mb-3" alt="Planet 2" />
              </div>

              {/* Step 3 */}
              <div className={`col-12 col-md-4 howitworks-step ${step >= 5 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22 text-blue lh-sm">
                  Discover New Worlds & Unlock Rewards
                </h6>
                <p className="montserrat-regular font-18 text-blue lh-sm">
                  Every galaxy you explore holds new treasures!
                </p>
              </div>

              {/* Timeline */}
              <div className="col-12 my-4 position-relative">
                <div className={`timeline-dot ${step >= 1 ? 'visible' : ''}`} />
                <div className={`timeline-dot ${step >= 3 ? 'visible' : ''}`} />
                <div className={`timeline-dot ${step >= 4 ? 'visible' : ''}`} />
                <div className="timeline-border" />
                <img src={Rocketgif} alt="Rocket" className="rocket-gif" />
              </div>

              {/* Planet 1 */}
              <div className={`col-12 col-md-4 howitworks-step ${step >= 2 ? 'visible' : ''}`}>
                <img src={Planet1} className="planet-width mt-3" alt="Planet 1" />
              </div>

              {/* Step 2 */}
              <div className={`col-12 col-md-4 howitworks-step ${step >= 4 ? 'visible' : ''}`}>
                <h6 className="montserrat-bold font-20 mb-22 text-blue  lh-sm">
                  Invite a Friend & Travel Together
                </h6>
                <p className="montserrat-regular font-18 text-blue  lh-sm">
                  Space expeditions are more thrilling with a co-pilot!
                </p>
              </div>

              {/* Planet 3 */}
              <div className={`col-12 col-md-4 howitworks-step ${step >= 6 ? 'visible' : ''}`}>
                <img src={Planet3} className="planet-width mt-3" alt="Planet 3" />
              </div>
            </div>
          </div>
        )}

        {/* Mobile View (Vertical Timeline) */}
        {showSteps && isMobile && (
          // Mobile View
          <div className="timeline-mobile">
            <div className="timeline-vertical">
              <div className="timeline-line-vertical"></div>

              <div className="rocket-vertical">
                <img src={Rocketgif} alt="Rocket" className="rocket-svg" />
              </div>

              {/* Timeline dots */}
              <div className={`timeline-dot-mobile ${step >= 1 ? 'visible' : ''}`} style={{ top: '15%' }}></div>
              <div className={`timeline-dot-mobile ${step >= 3 ? 'visible' : ''}`} style={{ top: '45%' }}></div>
              <div className={`timeline-dot-mobile ${step >= 5 ? 'visible' : ''}`} style={{ top: '75%' }}></div>

              <div className="timeline-mobile">
                <div className="timeline-line-vertical"></div>

                {/* Step 1 → Left Planet | Right Text */}
                <div className={`step-mobile ${step >= 1 ? 'visible' : ''}`}>
                  <div className="step-box left">
                    <img src={Planet1} className="planet-svg" alt="Planet 1" />
                  </div>
                  <div className="step-box right">
                    <div className="step-text">
                      <h6 className="step-title montserrat-bold font-12 text-blue">Launch Your Cosmic Journey</h6>
                      <p className="step-description montserrat-regular font-12 text-blue pb-5">
                        Start your adventure by signing up and setting course for your first galaxy.
                        Every star you navigate brings you closer to exciting rewards. Ready to explore?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 → Left Text | Right Planet */}
                <div className={`step-mobile ${step >= 2 ? 'visible' : ''}`}>
                  <div className="step-box left">
                    <div className="step-text">
                      <h6 className="step-title text-start  montserrat-bold font-12 text-blue ">Invite a Friend & Travel Together</h6>
                      <p className="step-description text-start  montserrat-regular font-12 text-blue ">
                        Space expeditions are more thrilling with a co-pilot! Invite a friend to join the journey,
                        and you’ll both earn points as you explore the universe together.
                      </p>
                    </div>
                  </div>
                  <div className="step-box right">
                    <img src={Planet2} className="planet-svg" alt="Planet 2" />
                  </div>
                </div>

                {/* Step 3 → Left Planet | Right Text */}
                <div className={`step-mobile ${step >= 3 ? 'visible' : ''}`}>
                  <div className="step-box left">
                    <img src={Planet3} className="planet-svg" alt="Planet 3" />
                  </div>
                  <div className="step-box right p-0">
                    <div className="step-text">
                      <h6 className="step-title  montserrat-bold font-12 text-blue">Discover New Worlds & Unlock Rewards</h6>
                      <p className="step-description  montserrat-regular font-12 text-blue">
                        Every galaxy you explore holds new treasures! Collect points along the way and redeem
                        them for exclusive rewards. The final cosmic gem awaits, keep exploring!
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default HomeHowitworks;
