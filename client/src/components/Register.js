import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';



export const Register = () => {



    return (<div className="registerBcg">
        <div className="wrapperReg">
            <form onSubmit={''} className="formReg">

           
                <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="username" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" name="email"required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password"required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirm Password" name="confirm-password" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <button  type="submit">
                        <i className="fa-solid fa-right-to-bracket"></i>                </button>
                </div>
                <div className="switch-login">
                    <Link to="/login">Already have an account? <br/>
                    <span>Login</span></Link>
                </div>

            </form>

        </div></div>
    )
};
