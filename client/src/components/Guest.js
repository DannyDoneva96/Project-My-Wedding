import {GuestLi} from './GuestLi'
export const Guest = (props) => {


    return (<div className = 'Guests'>

            <div className = 'wrapGuest'>!</div>
            <p > Guest List</p>

        <ol className="gradient-list">
            {props.guest.map(guest => <GuestLi key={guest.name} guest={guest}></GuestLi>)}

        </ol>

    </div>
    );

}