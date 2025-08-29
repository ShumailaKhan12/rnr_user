import React, { useState } from "react";
import "../../App.scss";
import contract from "../../assets/Images/acknowledgement/contract.png";
import X from "../../assets/Images/invite-modal/X.png";
import AcknowledgmentSuccessModal from "./AcknowledgmentSuccessModal";
import AcknowledgmentDeclineModal from "./AcknowledgmentDeclineModal";

const AcknowlegmentModal = ({ onClose }) => {
  const [step, setStep] = useState("ack"); 
  // "ack" = main acknowledgement, "success" = accepted, "decline" = declined

  if (step === "success") {
    return (
      <AcknowledgmentSuccessModal 
        onClose={onClose} 
        onContinue={onClose} 
      />
    );
  }

  if (step === "decline") {
    return (
      <AcknowledgmentDeclineModal 
        onClose={onClose} 
      />
    );
  }

  return (
    <div
      className="modal fade show overlay"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered my-custom-dialog bg-gradient-color text-primary-color" role="document">
        <div className="modal-content custom-modal-content">
          {/* Close */}
          <button className="close-btn" onClick={onClose}>
            <img src={X} alt="close" />
          </button>

          {/* Top image */}
          <div className="text-center mt-3">
            <img src={contract} alt="contract" />
          </div>

          {/* Header */}
          <div className="modal-header justify-content-center border-0">
            <h5 className="modal-title montserrat-semibold font-24 text-primary-color">Acknowledgement</h5>
          </div>

          {/* Body */}
          <div className="modal-body text-start  montserrat text-primary-color">
            <p className="font-14"><strong>Referral ID -</strong> SAK123</p>
            <p className="font-14"><strong>Date -</strong> dd-mm-yyyy</p>

            <p className="fw-bold mb-1 font-14">Details of Referrer -</p>
            <p className="font-14">
              The invite has been sent by <strong>Sakshee</strong>, holding
              mobile number{" "}
              <strong><a href="tel:9685492401">9685492401</a></strong>{" "}
              and email ID{" "}
              <strong><a href="mailto:sak123@gmail.com">sak123@gmail.com</a></strong>{" "}
              with referral code <strong>WESAK11</strong>.
            </p>

            <p className="fw-bold font-14">Purpose of Invitation -</p>
            <p className="mb-0 font-14">This invitation has been sent for:</p>
            <p className="mb-0 font-14">→ Inviting the Referred Person to join</p>
            <p className="mb-0 font-14">→ Availing referral rewards</p>
            <p className="font-14">→ Accessing offers and discounts.</p>

            <label className="checkbox-label">
              <input type="checkbox" name="permission" required />
              <span className="montserrat-bold font-14 text-primary-color">
                I hereby acknowledge that I have joined/registered through the
                referral of the above individual.
              </span>
            </label>
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center border-0">
            <button
              type="button"
              className="btn btn-decline btn-secondary me-2 "
              onClick={() => setStep("decline")}
            >
              Decline
            </button>
            <button
              type="button"
              className="btn btn-primary bg-blue"
              onClick={() => setStep("success")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcknowlegmentModal;
