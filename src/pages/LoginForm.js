import React, { useState } from 'react';
import './Css/LoginForm.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
  let setlogin = props.setlogin;
  const navigtor = useNavigate();
  const [formData, setformData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    toast.success('Logged IN Successfully');
    navigtor('/');
    setlogin(true);
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="email" className="form-label">
          Email Address<sup>*</sup>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          id="email"
          className="form-input"
          required
        />

        <label htmlFor="password" className="form-label">
          Password<sup>*</sup>
        </label>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            id="password"
            className="form-input"
            required
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              className="eye-icon"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiOutlineEye
              className="eye-icon"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <br/>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
