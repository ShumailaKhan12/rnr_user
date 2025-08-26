import React from 'react'

// Import Images
import Logo from "../assets/Images/Logo/LOGO (1).svg";
const Navbar = () => {
    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse container" id="navbarTogglerDemo01">
                        <a class="navbar-brand nav-logo-bg d-flex align-items-center justify-content-center" href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active font-22 text-white pe-5 jura-semibold" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link font-22 text-white pe-5 jura-semibold" href="#">Referrals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link font-22 text-white pe-5 jura-semibold" href="#">Progress</a>
                            </li>
                            <li class="nav-item">
                                <div className="dropdown position-relative">
                                    <button class="nav-link font-22 text-blue bg-white rounded-pill px-5 py-1 jura-semibold"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profie</button>

                                    <ul className="dropdown-menu nav-profile-drop position-absolute">

                                        <li className='py-1'>
                                            {/* <Link className='montserrat-semibold text-blue'> */}
                                            <span className='nav-link mx-3 cursor-pointer text-center font-16 jura-semibold text-blue'>
                                                Profile Setting
                                            </span>
                                            {/* </Link> */}
                                        </li>
                                        <hr className=' my-2' />
                                        <li className='text-center py-1'>
                                            <button
                                                // onClick={() => HandleLogout()} 
                                                type="button" className="border-0 bg-blue text-white rounded-pill font-16 jura-semibold px-5 py-2">Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;