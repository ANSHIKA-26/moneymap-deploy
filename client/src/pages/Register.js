import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post('https://moneymap-deploy-production.up.railway.app/api/v1/users/register', values);
            message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response);
        message.error(error.response.data.message || "An error occurred during registration");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        message.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        message.error("An error occurred: " + error.message);
      }    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page ">
        {loading && <Spinner />}
        <Form
          className="register-form"
          layout="vertical"
          onFinish={submitHandler}
        >
          <h2>Register Form</h2>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register? login here!</Link>
            <button className="btn ">Resgiter</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;