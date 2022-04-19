import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const OnboardingTwo = ({ data, update, onClick }) => {
    const OnboardTwoSchema = Yup.object().shape({
        workspaceName: Yup.string()
            .required("Workspace Name is required"),
        workspaceUrl: Yup.string(),
    });

    return (
        <div className="formWrapper">
            <div className="formWrapper__header mb-3">
                <h1>Let's set up a home for all your work</h1>
                <p>You can always create another workspace later.</p>
            </div>
            <div className="formWrapper__body">
                <div>
                    <Formik
                        initialValues={{
                            workspaceName: "",
                            workspaceUrl: "",
                        }}
                        validationSchema={OnboardTwoSchema}
                        onSubmit={(values) => {
                            update("workspace", values);
                            onClick();
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="d-flex flex-column">
                                <div className="form__group">
                                    <label htmlFor="workspaceName" className="form__label">
                                        Workspace Name
                                    </label>
                                    <Field
                                        name="workspaceName"
                                        placeholder="Eden"
                                        className="form__input"
                                    />
                                    {errors.workspaceName && touched.workspaceName ? (
                                        <div className="form__error">{errors.workspaceName}</div>
                                    ) : null}
                                </div>

                                <div className="form__group ">
                                    <label htmlFor="workspaceUrl" className="form__label">
                                        Workspace URL <span>(Optional)</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon3">
                                            www.eden.com/
                                        </span>
                                        <Field
                                            name="workspaceUrl"
                                            placeholder="Example"
                                            className="form-control form__input"
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                        />
                                    </div>
                                    {errors.workspaceUrl && touched.workspaceUrl ? (
                                        <div className="form__error">{errors.workspaceUrl}</div>
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

export default OnboardingTwo;