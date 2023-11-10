import './Css/Login.css';
import FormTemplate from './FormTemplate';
import frame from '../assets/frame.png';
import loginimg from '../assets/login.png';

function LogIn(props) {
  let setlogin = props.setlogin;
  let login = props.login;

  return (
    <div className="flex-login">
      <div className="left-section">
        <FormTemplate title={props.title} desc1={props.desc1} desc2={props.desc2} formtype={props.formtype} setlogin={setlogin} login={login} />
      </div>
      <div className="right-section">
        <img className="frame-img" src={frame} alt="frame" />
        <img className="login-img" src={loginimg} alt="login" />
      </div>
    </div>
  );
}

export default LogIn;
