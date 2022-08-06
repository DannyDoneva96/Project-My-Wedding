import { Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Invitation } from './components/Invitation'
import { About } from './components/About'
import { Register } from './components/Register'
import { ErrorPage } from './components/ErrorPage'
import { RSVP } from './components/RSVP'
import { Wishes } from './components/Wishes'
import { Login } from './components/Login'
import { CreateWish } from './components/CreateWish'
import { Guest } from './components/Guest'
import { Logout } from './components/Logout'

function App() {




  const [guest, setGuest] = useState([]);
  const rsvpRef = collection(db, "rsvp");
  useEffect(() => {

    const getAll = async () => {
      const data = await getDocs(rsvpRef)
      setGuest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getAll()

  }, []);





  let navigate = useNavigate();
  const routeChange = () => {
    let path = `guest`;
    navigate(path);
  }

  const addGuestHandler = async (rsvp) => {
    await addDoc(rsvpRef, rsvp)
    routeChange()
  }

  const register = async (userData) => {

    try {

      if (!userData.password == userData.confirmPassword) {
        alert("Passwords dont match")
        return;
      }
      const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    } catch (err) { console.log(err.message) }

  }


  return (
    <div className="App">
      <body>
        <Header />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/invitation" element={<Invitation />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/aboutus" element={<About />} />
          <Route path="/rsvp" element={<RSVP addGuestHandler={addGuestHandler} />} />
          <Route path="/wishingBook" element={<Wishes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateWish />} />
          <Route path="/register" element={<Register register={register} />} />
          <Route path="/guest" element={<Guest guest={guest} />} />

          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </body>
    </div>
  );
}

export default App;