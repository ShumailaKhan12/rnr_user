import React from 'react'
import '../../App.scss'
import X from '../../assets/Images/invite-modal/X.png'

const InviteSuccessModal = ({ setSuccessModalOpen, onClose }) => {
    const handleClose = () => {
        setSuccessModalOpen(false); // Success modal close
        onClose(); // Outer Invite modal bhi close
    };

    return (
        <div className="modal-overlay">
            <div className="success-modal-content bg-gradient-color">
                <button
                    className="close-btn"
                    onClick={handleClose}
                >
                    <img src={X} alt="close" />
                </button>
                <h2 className='text-primary-color font-24 montserrat-semibold text-center'>Invite Sent Successfully!</h2>
                <p className='space-grotesk-medium font-18 text-primary-color text-center'>
                    Your invitation has been sent. <br />
                    Your friend will receive an Acknowledgement <br /> shortly.
                </p>
                <button
                    className="btn-submit bg-blue font-16 text-white montserrat-medium "
                    onClick={() => setSuccessModalOpen(false)} // Ye sirf success modal band karega
                >
                    Send Another Invite
                </button>
            </div>
        </div>
    )
}

export default InviteSuccessModal
