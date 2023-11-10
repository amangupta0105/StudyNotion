import {useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './Css/SignUpForm.css';

function SignUpForm(props){
    let setlogin = props.setlogin;
    const navigtor =useNavigate();
    const [userType, setUserType] = useState('student');
    const [inputType,setinputType] =useState('password');
    const [inputTypeConfirm,setinputTypeConfirm] =useState('password');
    const handleToggle = () => {
      setUserType((prevType) => (prevType === 'student' ? 'instructor' : 'student'));
    };
    const [formData, setformData] = useState(
        {
            firstname:'',
            lastname:'',
            email: '', 
            password: '',
            confirmpassword:''
        }
      );

    function changeHandler(event){
        setformData(function(prevData){
            return(
                {
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            )
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        let passcheck = formData.password === formData.confirmpassword;
        console.log(passcheck);
    
        const loginResult = passcheck
        ? (toast.success('Created'), console.log(formData), setlogin(true), navigtor('/'))
        : (toast.error('Password Mismatch'), setlogin(false));

        console.log (`ignore`, loginResult);
    
    }
    
    function showPassword(){
      setinputType('text');
    }
    function hidepassword(){
      setinputType('password');
    }
    function showPasswordConfirm(){
      setinputTypeConfirm('text');
    }
    function hidepasswordConfirm(){
      setinputTypeConfirm('password');
    }

    return(
        <div className="signupform-container">
          <div className="toggle-button">
            <div className="toggle-button">
                  <button
                      className={userType === 'student' ? 'active' : ''}
                      onClick={handleToggle}>
                      Student
                  </button>
                  <button
                      className={userType === 'instructor' ? 'active' : ''}
                      onClick={handleToggle}>
                      Instructor
                  </button>
            </div>
          </div>
          <div className="form">
            <form onSubmit={submitHandler}>
                  
                  <div className="name">
                  <label htmlFor="firstname" >First Name<sup>*</sup></label>
                  <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={changeHandler} required/>
                  <br/>
                  <label htmlFor="lastname" >Last Name<sup>*</sup></label>
                  <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={changeHandler} required/>
                  <br/>
                  </div>

                  <div className="email">
                  <label htmlFor="email">Email<sup>*</sup></label>
                  <input type="email" name="email" required value={formData.email} onChange={changeHandler}/>
                  <br />
                  </div>

                  <div className="pass">
                        <label htmlFor="password">Password<sup>*</sup></label>
                        <div className="password-input">
                          <input type={inputType} value={formData.password} onChange={changeHandler} id="password" name="password" required/>
                          {inputType === 'password' ? <AiOutlineEye onClick={showPassword} /> : <AiOutlineEyeInvisible onClick={hidepassword} />}
                        </div>
                        <br />

                        <label htmlFor="confirm-password">Confirm Password<sup>*</sup></label>
                        <div className="password-input">
                          <input type={inputTypeConfirm} required value={formData.confirmpassword} onChange={changeHandler} name="confirmpassword"/>
                          {inputTypeConfirm === 'password' ? <AiOutlineEye onClick={showPasswordConfirm}/> : <AiOutlineEyeInvisible onClick={hidepasswordConfirm}/> }
                        </div>
                  </div>
                  
                  <br/>
                  <div>
                  <button className="submit-button">Create Account</button>
                  </div>

          
            </form>
          </div>

        </div>
    )
}

export default SignUpForm;