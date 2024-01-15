import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ShowUserList from "./ShowUserList";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const CreateUser = () => {
  const [showForm, setShowForm] = useState(false);
  const handleAddUserClick = () => {
    setShowForm(true);
  };
  const handleFormClose = () => {
    setShowForm(false);
  };
  const formContent = (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setShowForm(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Field
            type="email"
            name="email"
            className="border rounded-md p-2 w-full"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm"
          />
          <Field
            type="password"
            name="password"
            className="border rounded-md p-2 w-full"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm"
          />
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleFormClose}
              className="mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );

  return (
    <>
      {!showForm ? (
        <ShowUserList handleAddUserClick={handleAddUserClick} />
      ) : (
        <div
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-lg shadow-xl sm:max-w-lg w-full p-4   ">
            <h3
              className="text-base font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              Deactivate account
            </h3>
            {formContent}
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUser;
