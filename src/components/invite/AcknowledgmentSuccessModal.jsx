import React from "react";
import "../../App.scss";
import X from '../../assets/Images/invite-modal/X.png';
import submitIcon from '../../assets/Images/acknowledgement/submit-icon.png';
import Button from "../button";
import { NavLink } from "react-router-dom";

const AcknowledgmentSuccessModal = ({ onClose, message }) => {
    return (
        <div
            className="modal fade show overlay"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            style={{ display: "block" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-modal-content success-modal-auto bg-gradient-color">
                    {/* Close Button */}
                    <button className="close-btn" onClick={onClose}>
                        <img src={X} alt="close" />
                    </button>

                    {/* Content */}
                    <div className="modal-body text-center p-4">
                        <img src={submitIcon} alt="success" className="mb-3" />
                        <h1 className="success-title text-primary-color font-20">{message}</h1>
                        <NavLink to={"/"}>
                            <Button 
                            label="Continue"
                            className="btn-custom bg-blue text-white font-20"
                        />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcknowledgmentSuccessModal;
