import { Link } from 'react-router-dom'
import { login } from '../services/uauthService'

export const Login = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        console.log(email, password)

        login(email, password).then(authData => { console.log(authData) })
    }

    return (<div className="loginBcg">
        <div className="wrapperReg">
            <form onSubmit={onSubmit} className="formlogin">

                <h3 className="loginh3 switch-login">LOGIN</h3>
                <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="email" required></input>
                    <span className="bar"></span>
                </div>

                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password" required></input>
                    <span className="bar"></span>
                </div>

                <div className="input-group">
                    <button>
                        <i className="fa-solid fa-right-to-bracket"></i>                </button>
                </div>
                <div className="switch-login">
                    <Link to="/login">Forgot your password? <br />
                        <span>Click here</span></Link>
                </div>


            </form>

        </div></div>
    )
}