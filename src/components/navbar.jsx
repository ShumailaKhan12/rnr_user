import React, { useEffect, useState } from 'react'

// Import Images
import Logo from "../assets/Images/Logo/LOGO (1).svg";
import { Link, NavLink } from 'react-router-dom';
import List from '../assets/Images/Logo/List.png'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const firstSectionHeight = window.innerHeight * 0.2; // 80% of viewport height
            if (window.scrollY > firstSectionHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-md navbar-light ${scrolled ? "nav-bg shadow-sm" : "bg-transparent"
                }`}>
                <div className="container-fluid">
                    <Link className="navbar-brand nav-logo-bg d-flex align-items-center justify-content-center" href="#">
                        <img src={Logo} className='mb-4' alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler ms-auto border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <img src={List} alt="menu" width={48} height={48} />
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/home"} 
                                className="nav-link active font-22 text-decoration-none text-white pe-5 jura-semibold" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/myreferral"} 
                                className="nav-link font-22 text-white text-decoration-none pe-5 jura-semibold" href="#">Referrals</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to={"/progress"} className="nav-link font-22 text-decoration-none text-white pe-5 jura-semibold" href="#">Progress</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/profile"} className="nav-link font-22 text-decoration-none text-white pe-5 jura-semibold" href="#">Profile</NavLink>

                                {/* <div className="dropdown  position-relative">
                                    <button className="nav-link font-22 text-blue bg-white rounded-pill px-5 py-1 jura-semibold"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profie</button>

                                    <ul className="dropdown-menu nav-profile-drop position-absolute">

                                        <li className='py-1'>
                                            <NavLink to={"/profile"} className={"text-decoration-none"}>
                                                <span className='nav-link mx-3 cursor-pointer text-center font-16 jura-semibold text-blue'>
                                                    Profile Setting
                                                </span>
                                            </NavLink>
                                        </li>
                                        <hr className=' my-2 mx-3' />
                                        <li className='text-center py-1'>
                                            <button
                                                // onClick={() => HandleLogout()} 
                                                type="button" className="border-0 bg-blue text-white rounded-pill font-16 jura-semibold px-5 py-2">Logout</button>
                                        </li>
                                    </ul>
                                </div> */}
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;