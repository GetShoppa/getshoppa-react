import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const style = {
  wrapper: ` flex flex-col w-full mx-auto mt-8 justify-center place-items-center`,
  input:`p-4 w-5/6 md:w-2/3 text-[#000000] md:text[rgba(0, 0, 0, 0.5)]  border-[none] md:border md:border-[rgba(0, 0, 0, 0.5)] md:border-[rgba(0, 0, 0, 0.5)] my-3 md:my-5 bg-[#E5CDE680] md:bg-white`,
  button: `w-5/6 md:w-2/3 p-2 bg-purple h-fit text-white rounded-[5px] md:rounded-[15px] text-[24px] font-bold`,
  textarea: `pt-2 px-4 pb-10 w-5/6 md:w-2/3 text-[#000000] md:text[rgba(0, 0, 0, 0.5)]  border-[none] md:border md:border-[rgba(0, 0, 0, 0.5)] md:border-[rgba(0, 0, 0, 0.5)] my-3 md:my-5 bg-[#E5CDE680] md:bg-white`,
  text: `text-[16px] text-bold font-poppins leading-[22px] md:text-[26px] md:leading-[39px]`,
  greyButton: `w-4/5 md:w-5/5 mx-auto flex justify-center mr-1 place-items-center text-center mt-[40px] mb-3 p-2 bg-[#D9D9D9] text-black rounded-[5px] md:rounded-[15px] text-[16px] md:text-[24px] font-bold`,
   
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

// const MyCheckbox = ({ children, ...props }) => {
//   const [field, meta] = useField({ ...props, type: 'checkbox' });
//   return (
//     <div>
//       <label className="checkbox-input">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };


const AddProduct = () => {
    return (
        <>
      <Formik
        initialValues={{
          productName: "",
          price: "",
          category: "",
          description: ""
        }}
        validationSchema={Yup.object({
          productName: Yup.string()
            .max(30, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.string()
            .email("Invalid price range`")
            .required("Required"),
          category: Yup.string()
            .max(11, "Must be 11 characters or more")
            .required("Required"),
          description: Yup.string()
            .max(400, "Must be 50 characters or more")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form className={style.wrapper}>
          <MyTextInput
            name="productName"
            className={style.input}
            type="text"
            placeholder="Product Name"
          />
          <MyTextInput
            className={style.input}
            name="price"
            type="text"
            placeholder="Product price(Naira)"
          />
          <p className={style.text} >Add price unit + </p>
          <MyTextInput
            className={style.input}
            name="phone"
            type="text"
            placeholder="Select product category"
          />
           <MyTextAreaInput
            name="description"
            className={style.textarea}
            type="text"
            placeholder="Product description"
          />
          <button type="submit" className={style.button}>Upload product</button>
          
          <div className="flex flex-row w-5/6 md:w-2/3 ">
            <button type="submit" className={style.greyButton}>Add options +</button>
            <button type="submit" className={style.greyButton}>Back to images</button>
          </div>
          
        </Form>
      </Formik>
    </>
    )
}

export default AddProduct