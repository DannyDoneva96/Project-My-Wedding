import {Link} from 'react-router-dom'
export const Login = () => {

    return (<div className="registerBcg">
        <div className="wrapperReg">
            <form action="" className="formReg">

                  <h3 className="loginh3 switch-login">LOGIN</h3>
                <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" required></input>
                    <span className="bar"></span>
                </div>
               
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" required></input>
                    <span className="bar"></span>
                </div>
                
                <div className="input-group">
                    <button>
                        <i className="fa-solid fa-right-to-bracket"></i>                </button>
                </div>
                <div className="switch-login">
                    <Link to="/login">Forgot your password? <br/>
                    <span>Click here</span></Link>
                </div>
              

            </form>

        </div></div>
    )
}