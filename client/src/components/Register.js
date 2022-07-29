

export const Register = () => {

    return (
        <div className="wrapperReg">
            <span className="form-heading">Sign up</span>
            <form action="">
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
                <i className="fas fa-telegram-plane"></i>
                </button>
                </div>
                <div className="switch-login">
                    <a href="/login">Already have an account?<span>Login</span></a>
                </div>

            </form>

        </div>
    )
}