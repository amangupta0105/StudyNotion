// FormTemplate.js

import './Css/FormTemplate.css';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function FormTemplate(props) {
  let setlogin = props.setlogin;
  let login = props.login;

  return (
    <div className="form-template-container">
      <h1 className="form-template-heading">{props.title}</h1>
      <p className="form-template-description">{props.desc1}</p>
      <p className="form-template-description">{props.desc2}</p>

      {props.formtype === 'login' ? <LoginForm login={login} setlogin={setlogin} /> : <SignUpForm login={login} setlogin={setlogin} />}

      <h5>OR</h5>

      <button className="form-template-button">
        <span className="google-icon"><FcGoogle /></span>
        Sign in With Google
      </button>
    </div>
  );
}

export default FormTemplate;
