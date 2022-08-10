import { signOut} from 'firebase/auth';
import {auth } from '../firebase'
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom";



    
export const Logout =()=>{


     let navigate = useNavigate(); 

    useEffect(() => {
        try {
        const logout = async () => {
                  await signOut(auth)

        }
    
       logout()
       navigate('/');
    }catch(err) {
        navigate('/error');
       }
    
      }, []);



};
