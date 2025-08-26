import React from "react";
import "../../App.scss";
import X from '../../assets/Images/invite-modal/X.png';
import declineIcon from '../../assets/Images/acknowledgement/decline-icon.png';
import Button from "../button";

const AcknowledgmentDeclineModal = ({ onClose }) => {
    return (
        <div
            className="modal fade show overlay"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            style={{ display: "block" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content success-modal-auto">
                    {/* Close Button */}
                    <button className="close-btn" onClick={onClose}>
                        <img src={X} alt="close" />
                    </button>

                    {/* Content */}
                    <div className="modal-body text-center p-4">
                        <img src={declineIcon} alt="decline" className="mb-3" />
                        <h1 className="success-title">Invitation Declined</h1>
                        <Button 
                            label="Continue"
                            className="btn-custom"
                            onClick={onClose} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcknowledgmentDeclineModal;
