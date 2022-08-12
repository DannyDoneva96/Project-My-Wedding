import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'
import {useEffect,useState} from 'react'

export const DetailsOfGuest = () => {

    const [guest, setGuest] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        const getUserData = async (idO) => {


            const docRef = doc(db, "rsvp" ,idO);
            const docSnap = await getDoc(docRef);

                setGuest(docSnap.data());
         
        }
        getUserData(id)
    }, []);

    const numOfGu = Number(guest.numOfGuest)

    return (
<div className = 'Guests'>
        <div className="guestDetails">.
            <div className="detailsdiv">

                {numOfGu > 1
                    ? <h1 className="detailsHeadingh1">{guest.name} will be atending {guest.event}  +{numOfGu - 1} more guests! </h1>
                    : <h2 className="detailsHeadingh2">{guest.name} will be atending {guest.event}!</h2>
                }
                <p className="detailsP">{guest.name}'s message : {guest.message}</p>

            </div>
        </div>
        </div>
    )


}