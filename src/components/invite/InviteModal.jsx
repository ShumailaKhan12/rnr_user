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
                    <div className="modal-dialog" role="document">
                        <div className="modal-content custom-modal-content">

                            {/* Close btn */}
                            <button className="close-btn" onClick={onClose}>
                                <img src={X} alt="close" />
                            </button>

                            <div className="modal-header">
                                <h2 className="modal-title">Invite a MFD</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Referee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Referee Mobile</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Referrer Firm / ARN</label>
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
                                        <label>
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

                                    <label className="checkbox-label">
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
                                        className="btn-custom"
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
