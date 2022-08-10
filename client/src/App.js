import { Route, Routes ,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db,auth } from './firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { AuthContextProvider } from './context/AuthContext';
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
import { DetailsOfGuest } from './components/DetailsOfGuest'


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
  

  const addGuestHandler = async (rsvp) => {
    await addDoc(rsvpRef, rsvp)
    navigate(`guest`)
  }

  


  return (
    <div className="App">
      <AuthContextProvider>
        <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/aboutus" element={<About />} />
          <Route path="/rsvp" element={<RSVP addGuestHandler={addGuestHandler} />} />
          <Route path="/wishingBook" element={<Wishes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateWish />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/guest" element={<Guest guest={guest} />} />
          <Route path="/guests/:id" element={<DetailsOfGuest guest={guest} />} />

        </Routes>
        <Footer />
        </AuthContextProvider>
    </div>
  );
}

export default App;