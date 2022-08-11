import { Link } from "react-router-dom"
import {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



export const Register = (props) => {

    const [registerUser,setRegisterUser]=useState({
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(undefined)
  const { createUser } = UserAuth();
  const navigate = useNavigate()
  
    const onChange=(e)=>{
        setRegisterUser(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        try {

            if (registerUser.password === registerUser.confirmPassword) {
                 await createUser(registerUser.email, registerUser.password);
          navigate('/')
              }  
                         setError("Passwords dont match")

        } catch (e) {
          setError(e.message.split('/')[1].split(')')[0]);
        }
    }
    
    
    return (<div className="registerBcg">
        <div className="wrapperReg">
            <form onSubmit={''} className="formReg">

           
                <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="username" onChange={onChange} required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" name="email" onChange={onChange} required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password" onChange={onChange} required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={onChange}  required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <button  type="submit" onClick={onSubmit}>
                        <i className="fa-solid fa-right-to-bracket"></i>                </button>
                </div>
                <div>
                    {error
                    ?<h3 className="errorMsg">{error}</h3>
                    : null  }
                </div>
                <div className="switch-login">
                    <Link to="/login">Already have an account? <br/>
                    <span>Login</span></Link>
                </div>

            </form>

        </div></div>
    )
};
