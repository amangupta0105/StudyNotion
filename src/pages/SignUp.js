import './Css/SignUp.css';
import FormTemplate from './FormTemplate';
import frame from '../assets/frame.png';
import signupimg from '../assets/signup.png';

function SignUp(props) {
  let setlogin = props.setlogin;
  let login = props.login;

  return (
    <div className="signup-container">
      <div className="left-section">
        <FormTemplate title={props.title} desc1={props.desc1} desc2={props.desc2} formtype={props.formtype} setlogin={setlogin} login={login} />
      </div>
      <div className="right-section">
        <img className="frame-img" src={frame} alt="frame" />
        <img className="signup-img" src={signupimg} alt="signup-img" />
      </div>
    </div>
  );
}

export default SignUp;
