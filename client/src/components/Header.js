import { Link } from 'react-router-dom'


export const Header = (props) => {


   
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
                    <li>
                        <Link to="/guest">Guests</Link>
                    </li>
                    <li>
                        <Link to="/invitation">Invitation</Link>
                    </li>
                    <li>
                        <Link to="/rsvp">RSVP</Link>
                    </li>

                    <li>
                        <Link to="/wishingBook">Book of wishes</Link>
                    </li>
                    
                     <li style={{ float: "right" }}>
                        <Link to="/logout">Logout</Link>
                    </li>
                  
                    <><li style={{ float: "right" }}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li style={{ float: "right" }}>
                        <Link to="/register">Register</Link>
                    </li>
                    </>
                        





                </ul>
            </div>
        </header>)

}