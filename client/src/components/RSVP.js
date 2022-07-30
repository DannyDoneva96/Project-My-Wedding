export const RSVP = () => {
    return (
        <div className="rsvp" id="rsvp">
            <div className="jop">
               
                <h1 className="">Join Our Party </h1>

            </div>


            <div className="formRsvp">
                <div className="col-lg-8">
                    <div className="text-center">
                        <form>
                            <div className="rsvpinputs">
                                <label for="name">Your Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className=""

                                />
                           
                                <label for="name">Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className=""

                                />

                                <div className="rsvpSelect">
                                    <label for="numOfGuest">Number Of Guests</label>
                                    <select name="numOfGuest"
                                        className=""
                                        style={{ height: 52 }}
                                    >
                                        <option>    1      </option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>

                                    </select>
                               
                                    <label for="event">I'm Attending</label>
                                    <select
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
                                <label for="message"> Message</label>
                                <textarea
                                    className=""
                                    rows={5}
                                />
                            </div>
                            <div>
                                <button
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