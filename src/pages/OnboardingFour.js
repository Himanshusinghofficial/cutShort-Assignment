import React from "react";
import check from "../assets/img/check-lg.svg";

const OnboardingFour = ({ data }) => {
    return (
        <div className="formWrapper">
            <div className="formWrapper__header mb-3">
                <div className="formWrapper__header-icon mb-5">
                    <img src={check} alt="check" />
                </div>
                <h1>Congratulations, {data.user.fullName}</h1>
                <p>You have completed onboarding, you can start using the Eden!</p>
            </div>
        </div>
    );
};

export default OnboardingFour;