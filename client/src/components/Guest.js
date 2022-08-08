import {GuestLi} from './GuestLi'
export const Guest = (props) => {


    return (<div className = 'Guests'>

             <h1> Guest List</h1>

        <ol className="gradient-list">
            {props.guest.map(guest => <GuestLi key={guest.name} guest={guest}></GuestLi>)}

        </ol>

    </div>
    );

}