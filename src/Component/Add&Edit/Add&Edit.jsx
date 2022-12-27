import React, { useState, useEffect } from "react";
import { Form, useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isEditMode, setisEditMode] = useState(false);

  let Formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
    },
    validate: (values) => {
      var errors = {};
      if (values.name === "") errors.name = "name is required";
      if (values.email === "") errors.email = "email is required";
      return errors;
    },
    onSubmit: async (values) => {
      try {
        if (isEditMode) {
          const response = await axios.put(
            `https://63209503e3bdd81d8efdb0f9.mockapi.io/student/${params.id}`,
            {
              ...values,
            }
          );
          if (response.status === 200) {
            navigate("/");
          }
        } else {
          const response = await axios.post(
            `https://63209503e3bdd81d8efdb0f9.mockapi.io/student`,
            {
              ...values,
            }
          );
          if (response.status === 201) {
            navigate("/");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (params.id) {
      setisEditMode(true);
      foo();
    }
  }, []);

  async function foo() {
    const response = await axios.get(
      `https://63209503e3bdd81d8efdb0f9.mockapi.io/student/${params.id}`
    );

    Formik.setValues(response.data);
  }

  return (
    <div>
      <form onSubmit={Formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          placeholder="name"
          value={Formik.values.name}
        />
        <br />
        <span style={{ color: "red" }}>
          {Formik.touched.name && Formik.errors.name}
        </span>
        <input
          id="email"
          name="email"
          type="text"
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          placeholder="email"
          value={Formik.values.email}
        />
        <span style={{ color: "red" }}>
          {Formik.touched.email && Formik.errors.email}
        </span>
        <br />
        <button type="submit"> click me</button>
      </form>
    </div>
  );
};

export default Add;
