import React, { useState } from "react";
import "../../App.scss";
import X from "../../assets/Images/invite-modal/X.png";
import Button from "../button";
import InviteSuccessModal from "./InviteSuccessModal";
import { postData } from "../../services/api";

// Toast Messages
import { toastError, toastSuccess } from '../../utils/toster';


const InviteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        arn: "",
        product: "",
        permission: false,
    });

    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Data:", formData);

    //     // Open Success Modal
    //     setSuccessModalOpen(true);
    // };

    // const handleSubmit = async (e) => {
    //       e.preventDefault();
    //     setLoading(true);
    //     setSuccessModalOpen(true);

    //     try {
    //         // Login API call
    //         const response = await postData(' /referral_program/referral/send_invitation', {
    //             password: data?.password,
    //             email: data?.email,
    //         });
    //         console.log('response: ', response);
    //     } catch (error) {
    //         console.log(error)
    //         if (error?.error) {
    //             toastError(error?.error);
    //         } else {
    //             // toastError(error?.error || 'Login failed');
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop page refresh
        setLoading(true);

        try {
            const payload = {
                referrer_id: formData.id,
                refree_name: formData.name, // Or actual referrer_id if you have it
                arn: formData.arn,
                mobile_number: formData.mobile,
                product: formData.product || null,
                permission: formData.permission,
            };

            console.log("Payload:", payload);

            const response = await postData('/referral_program/referral/send_invitation', payload);

            toastSuccess("Invitation sent successfully!");
            setSuccessModalOpen(true);
            console.log("Response:", response);
        } catch (error) {
            console.error(error);
            if (error?.error) {
                toastError(error.error);
            } else {
                toastError("Failed to send invitation");
            }
        } finally {
            setLoading(false);
        }
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
                                                className="form-select"
                                                name="product"
                                                value={formData.product}
                                                onChange={handleChange}
                                            >
                                                <option value="Select">Select</option>
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
                                        label={!loading ? "Send Invite" : "Loading"}
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
