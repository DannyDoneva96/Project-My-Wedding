
import { Link } from 'react-router-dom';
 
export const GuestLi = (props) => {



    return(<li> {props.guest.name} will be atending {props.guest.event}! 
    
     <Link to={`/guests/${props.guest.id}`} className="details-button">
     <button onClick={()=>console.log(props.guest)} className="details">More Details</button>
 </Link>
</li>
    )
}