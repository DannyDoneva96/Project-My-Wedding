

export const Register = () => {

    return (<div className="registerBcg">
        <div className="wrapperReg">
            <form action="" className="formReg">

           
                <div className="input-group">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirm Password" required></input>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <button>
                        <i className="fa-solid fa-right-to-bracket"></i>                </button>
                </div>
                <div className="switch-login">
                    <a href="/login">Already have an account? <br/>
                    <span>Login</span></a>
                </div>

            </form>

        </div></div>
    )
}