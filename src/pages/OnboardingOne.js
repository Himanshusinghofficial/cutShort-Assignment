import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const OnboardingOne = ({ data, update, onClick }) => {
    const OnboardOneSchema = Yup.object().shape({
        fullName: Yup.string().required("Name field is required"),
        displayName: Yup.string().required("Displayname field is required"),
    });

    return (
        <div className="formWrapper">
            <div className="formWrapper__header mb-3">
                <h1>Welcome! First things first...</h1>
                <p>You can always change them later</p>
            </div>
            <div className="formWrapper__body">
                <div>
                    <Formik
                        initialValues={{
                            fullName: "",
                            displayName: "",
                        }}
                        validationSchema={OnboardOneSchema}
                        onSubmit={(values) => {
                            update("user", values);
                            onClick();
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="d-flex flex-column">
                                <div className="form__group">
                                    <label htmlFor="fullName" className="form__label">
                                        Full Name
                                    </label>
                                    <Field
                                        name="fullName"
                                        placeholder="Full Name"
                                        className="form__input"
                                    />
                                    {errors.fullName && touched.fullName ? (
                                        <div className="form__error">{errors.fullName}</div>
                                    ) : null}
                                </div>

                                <div className="form__group">
                                    <label htmlFor="displayName" className="form__label">
                                        Display Name
                                    </label>
                                    <Field
                                        name="displayName"
                                        placeholder="Display Name"
                                        className="form__input"
                                    />
                                    {errors.displayName && touched.displayName ? (
                                        <div className="form__error">{errors.displayName}</div>
                                    ) : null}
                                </div>
                                <button className="big__btn" type="submit">
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

export default OnboardingOne;