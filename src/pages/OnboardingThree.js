import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import people from "../assets/img/people-fill.svg";
import person from "../assets/img/person-fill.svg";

const OnboardingThree = ({ data, update, onClick }) => {
    const OnboardThreeSchema = Yup.object().shape({
        picked: Yup.string()
            .required("Please select at one option"),
    });
    return (
        <div className="formWrapper">
            <div className="formWrapper__header mb-3">
                <h1>How are you planning to use Eden?</h1>
                <p>We'll streamline your setup experience accordingly.</p>
            </div>
            <div className="formWrapper__body">
                <div>
                    <Formik
                        initialValues={{
                            picked: "",
                        }}
                        validationSchema={OnboardThreeSchema}
                        onSubmit={(values) => {
                            console.log("packed", values);
                            if (values) {
                                update("setup", values);
                                onClick();
                            }
                        }}
                    >
                        {({ values, errors, touched }) => (
                            <Form className="d-flex flex-column form">
                                <div className="d-flex flex-row justify-content-between">
                                    {/* First Card */}
                                    <div className="form__card">
                                        <label>
                                            <Field
                                                name="picked"
                                                className="form__radio"
                                                type="radio"
                                                value="myself"
                                            />

                                            <span className="plan__details">
                                                <img src={person} alt="person" className="plan__type" />
                                                <span className="plan__title">For myself</span>
                                                <span className="plan__text">
                                                    Write better. Think more clearly. Stay organized
                                                </span>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Second Card */}
                                    <div className="form__card">
                                        <label>
                                            <Field
                                                name="picked"
                                                className="form__radio"
                                                type="radio"
                                                value="team"
                                            />

                                            <span className="plan__details" aria-hidden="true">
                                                <img src={people} alt="people" className="plan__type" />
                                                <span className="plan__title">With my team</span>
                                                <span className="plan__text">
                                                    Wikis, docs, tasks & projects, all in one place.
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                {errors.picked && touched.picked ? (
                                    <div className="form__error">{errors.picked}</div>
                                ) : null}

                                <button className="big__btn mt-4" type="submit">
                                    Create Workspace
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default OnboardingThree;