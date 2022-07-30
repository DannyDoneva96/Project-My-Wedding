import {Route,Routes} from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import {Footer } from './components/Footer'
import {Invitation } from './components/Invitation'
import { About } from './components/About'
import {Register} from './components/Register'
import {ErrorPage} from './components/ErrorPage'
import {RSVP} from './components/RSVP'
import { Wishes } from './components/Wishes'

function App() {
  return (
    <div className="App">
        <body>
      <Header />

    
      <Routes>
        <Route path="/" element= {<Home />} />
   
        <Route path="/invitation" element= {<Invitation />} />
   
        <Route path="/aboutus" element= {<About />} />
        <Route path="/rsvp" element= {<RSVP />} />
        <Route path="/wishingBook" element= {<Wishes />} />

        <Route path="/register" element= {<Register />} />
        <Route path="/error" element= {<ErrorPage />} />
      </Routes>
      <Footer  />
      </body>
    </div>
  );
}

export default App;
