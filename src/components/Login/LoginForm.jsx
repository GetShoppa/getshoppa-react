import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
// import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const style = {
    wrapper: ` flex flex-col w-full mx-auto mt-8 justify-center place-items-center`,
    input:'p-4 w-5/6 md:w-2/3 border border-[rgba(0, 0, 0, 0.5)] md:border-[rgba(0, 0, 0, 0.5)] my-3 md:my-5 bg-[#E5CDE680] md:bg-white',
    button: `w-5/6 md:w-2/3 p-2 bg-purple text-white rounded-[5px] md:rounded-[15px] text-[24px] font-bold`
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


const LoginForm = () => {
    return (
        <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
            email: Yup.string()
                .email("Invalid email addresss`")
                .required("Required"),
            password: Yup.number()
                .max(20, "Must be 8 characters or more")
                .required("Required"),
          
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form className={style.wrapper}>
          <MyTextInput
            className={style.input}
            label="Email Address"
            name="email"
            type="email"
            placeholder="Your email"
          />
           <MyTextInput
            name="password"
            className={style.input}
            type="text"
            placeholder="Your password"
          />
           <p className="text-[16px] leading-[22px] md:text-[24px] md:leading-[33px] font-open-sans mt-2 mb-8 md:mb-6 text-purple flex text-right justify-end"><span>Forget password?</span></p>
          <button type="submit" className={style.button}>Login</button>
          <p className="text-[16px] leading-[22px] md:text-[24px] md:leading-[33px] font-open-sans mt-3 mb-5">New to Shoppa? <Link to="./signup"><span className="text-purple">Create an account</span></Link></p>
        </Form>
      </Formik>
    </>
    )
}

export default LoginForm