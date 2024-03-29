import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


export const Header = (props) => {

    const { user } = UserAuth();

   
    return (


        <header>
            <div>
                <ul className="navUl">
                     
                    <li>
                        <Link to="/">Danny&amp;Kiril</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About US</Link>
                    </li>
                    {user
                   ? <li>
                        <Link to="/guest">Guests</Link>
                    </li>

                    :null}
                    <li>
                        <Link to="/invitation">Invitation</Link>
                    </li>
                    <li>
                        <Link to="/rsvp">RSVP</Link>
                    </li>

                    <li>
                        <Link to="/wishingBook">Book of wishes</Link>
                    </li>
                    {user
                    ? <li style={{ float: "right" }}>
                        <Link to="/logout">Logout</Link>
                    </li>
                  
                   : <><li style={{ float: "right" }}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li style={{ float: "right" }}>
                        <Link to="/register">Register</Link>
                    </li>
                    </>}
                        





                </ul>
            </div>
        </header>)

}