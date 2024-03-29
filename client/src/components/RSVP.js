import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';


export const RSVP = (props) => {

    const { user } = UserAuth();

    const [isVisible, setIsVisible] = useState(false);

    const [rsvp, setRsvp] = useState({

        name: '',
        email: '',
        numOfGuest: '',
        event: "All Events",
        message: '',
    });

    

    const onChange = (e) => {
        setRsvp(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onRsvp = (e) => {
        e.preventDefault()
        props.addGuestHandler(rsvp)
    }

    useEffect(() => {
        if (user) {
            setIsVisible(true);
        }
        
    }, []);
    return (
        <div className="rsvp" id="rsvp">
            <div className="jop">

                <h1 className="">Join Our Party </h1>

            </div>
            <div className="formRsvp">
                <div className="col-lg-8">
                    <div className="text-center">
                        <form >
                            <div className="rsvpinputs">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    onChange={onChange}
                                    name="name"
                                    type="text"
                                    className=""

                                />

                                <label htmlFor="name">Email</label>
                                <input
                                    onChange={onChange}
                                    name="email"
                                    type="text"
                                    className=""

                                />

                                <div className="rsvpSelect">
                                    <label htmlFor="numOfGuest">Number Of Guests</label>
                                    <select
                                        name="numOfGuest"
                                        className=""
                                        onChange={onChange}
                                        style={{ height: 52 }}
                                    >
                                        <option>    1      </option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>

                                    </select>

                                    <label htmlFor="event">I'm Attending</label>
                                    <select
                                        onChange={onChange}
                                        name="event"
                                        className="form-control bg-secondary border-0"
                                        style={{ height: 52 }}
                                    >

                                        <option>All Events</option>
                                        <option>Wedding Party</option>
                                    </select>
                                </div>
                            </div>
                            <div className="msgRsvp">

                                <label htmlFor="message"> Message</label>
                                <textarea
                                    name="message"
                                    onChange={onChange}
                                    className="message"
                                    rows={5}
                                />
                            </div>
                            <div>
                                <button
                                 style={ {visibility: isVisible ? 'visible' : 'hidden'} }
                                    onClick={onRsvp}
                                    className="btnRsvp"
                                    type="submit"
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}