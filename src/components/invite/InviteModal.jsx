import React, { useState } from "react";
import "../../App.scss";
import X from "../../assets/Images/invite-modal/X.png";
import Button from "../button";
import InviteSuccessModal from "./InviteSuccessModal";

const InviteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        arn: "",
        product: "",
        permission: false,
    });

    const [successModalOpen, setSuccessModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        // Open Success Modal
        setSuccessModalOpen(true);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Invite Modal */}
            {!successModalOpen && (
                <div className="modal fade show overlay modal-overlay" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content custom-modal-content bg-gradient-color px-2">

                            {/* Close btn */}
                            <button className="close-btn" onClick={onClose}>
                                <img src={X} alt="close" />
                            </button>

                            <div className="modal-header">
                                <h2 className="modal-title font-30 montserrat-semibold text-primary-color">Invite a MFD</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referee Mobile</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referrer Firm / ARN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="arn"
                                            value={formData.arn}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group mt-2 mb-1">
                                        <label className="font-16 montserrat-medium text-primary-color">
                                            Product of Interest (Optional)
                                            <select
                                                name="product"
                                                value={formData.product}
                                                onChange={handleChange}
                                            >
                                                <option value=""></option>
                                                <option value="product1">Product 1</option>
                                                <option value="product2">Product 2</option>
                                            </select>
                                        </label>
                                    </div>

                                    <label className="checkbox-label font-16 montserrat-medium text-primary-color">
                                        <input
                                            type="checkbox"
                                            name="permission"
                                            checked={formData.permission}
                                            onChange={handleChange}
                                            required
                                        />
                                        I Confirm I Have Permission To Share Referee Details
                                    </label>
                                </div>

                                <div className="modal-footer">
                                    <Button
                                        label="Send Invite"
                                        type="submit"
                                        className="btn-custom bg-blue text-white font-16 montserrat-semibold"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {successModalOpen && (
                <InviteSuccessModal setSuccessModalOpen={setSuccessModalOpen} onClose={onClose} />
                
            )}
        </>
    );
};

export default InviteModal;
