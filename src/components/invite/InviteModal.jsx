import React, { useState, useContext } from "react";
import "../../App.scss";
import X from "../../assets/Images/invite-modal/X.png";
import Button from "../button";
import InviteSuccessModal from "./InviteSuccessModal";
import { postData } from "../../services/api";
import { UserContext } from '../../UseContext/useContext';

// Toast Messages
import { toastError, toastSuccess } from '../../utils/toster';
import { useForm } from "react-hook-form";


const InviteModal = ({ isOpen, onClose }) => {
    // useForm setup
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // UseStates
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const [messageApiHeading, setApiMessageHeading] = useState("")
    // UseContext
    const { accessToken, sessionId } = useContext(UserContext);
    const { userData } = useContext(UserContext);
    console.log('userData Inviteeeeeeeeeee: ', userData);

    // API Functions
    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const payload = {
                referrer_id: userData.Id,
                refree_name: formData.name, // Or actual referrer_id if you have it
                arn: formData.arn,
                mobile_number: formData.mobile,
                product: formData.product || null,
                permission: formData.permission,
            };

            console.log("Payload:", payload);

            const response = await postData(`/referral_program/referral/send_invitation?token=${accessToken}&session_id=${sessionId}`, payload);

            setApiMessageHeading(response?.success)
            setApiMessage(response?.message || "Invitation sent successfully!");
            setSuccessModalOpen(true);
            reset();
            console.log("Response:", response);
        } catch (error) {
            console.error(error);
            if (error?.message) {
                toastError(error.message);
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

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <span className="text-danger">{errors.name.message}</span>}

                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referee Mobile</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("mobile", { required: "Mobile is required" })}
                                        />
                                        {errors.mobile && <span className="text-danger">{errors.mobile.message}</span>}

                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="font-16 montserrat-medium text-primary-color">Referrer Firm / ARN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("arn", { required: "ARN is required" })}
                                        />
                                        {errors.arn && <span className="text-danger">{errors.arn.message}</span>}

                                    </div>

                                    <div className="form-group mt-2 mb-1">
                                        <label className="font-16 montserrat-medium text-primary-color">
                                            Product of Interest (Optional)
                                            <select
                                                className="form-select"
                                                {...register("product")}
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
                                            {...register("permission", { required: true })}

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
                <InviteSuccessModal setSuccessModalOpen={setSuccessModalOpen} onClose={onClose}
                    messageHeading={messageApiHeading === true ? "Invitation Sent Successfully!!" : "Invitataion Failed!!"} message={apiMessage} />

            )}
        </>
    );
};

export default InviteModal;
