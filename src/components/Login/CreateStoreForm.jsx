import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
// import styled from "@emotion/styled";
// import { Link } from "react-router-dom";
import * as Yup from "yup";

const style = {
  wrapper: ` flex flex-col w-full mx-auto mt-8 justify-center place-items-center`,
  input:`p-4 w-5/6 md:w-2/3 text-[#000000] md:text[rgba(0, 0, 0, 0.5)]  border-[none] md:border md:border-[rgba(0, 0, 0, 0.5)] md:border-[rgba(0, 0, 0, 0.5)] my-3 md:my-5 bg-[#E5CDE680] md:bg-white`,
  button: `w-5/6 md:w-2/3 p-2 bg-purple text-white rounded-[5px] md:rounded-[15px] text-[16px] md:text-[24px] font-bold`,
  textarea: `pt-2 px-4 pb-10 w-5/6 md:w-2/3 text-[#000000] md:text[rgba(0, 0, 0, 0.5)]  border-[none] md:border md:border-[rgba(0, 0, 0, 0.5)] md:border-[rgba(0, 0, 0, 0.5)] my-3 md:my-5 bg-[#E5CDE680] md:bg-white`
}

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-right text-red-600 ">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-right text-red-600 ">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};



  
  // const StyledErrorMessage = styled.div`
  //   font-size: 12px;
  //   color: var(--red-600);
  //   width: 400px;
  //   margin-top: 0.25rem;
  //   &:before {
  //     content: "❌ ";
  //     font-size: 10px;
  //   }
  //   @media (prefers-color-scheme: dark) {
  //     color: var(--red-300);
  //   }
  // `;


const SignUpForm = () => {
    return (
        <>
      <Formik
        initialValues={{
          storename: "",
          country: "",
          phone: "",
          checkbox: false,
          description: ""
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(30, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          phone: Yup.number()
            .max(11, "Must be 11 characters or more")
            .required("Required"),
          password: Yup.number()
            .max(20, "Must be 8 characters or more")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'Is this number same as your phone number?'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form className={style.wrapper}>
          <MyTextInput
            name="storename"
            className={style.input}
            type="text"
            placeholder="Store name"
          />
          <MyTextInput
            className={style.input}
            name="country"
            type="text"
            placeholder="Where is this store based(country)"
          />
          <MyTextInput
            className={style.input}
            name="phone"
            type="phone"
            placeholder="Phone number Whatsapp"
          />
          <MyCheckbox name="checkbox">
             Same as my phone no
           </MyCheckbox>
           <MyTextAreaInput
            name="description"
            className={style.textarea}
            type="text"
            placeholder="Describe your store - what do you sell?"
          />
         <button type="submit" className={style.button}>Create store</button>
          
        </Form>
      </Formik>
    </>
    )
}

export default SignUpForm