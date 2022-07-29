import {Route,Routes} from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import {Footer } from './components/Footer'
import {Invitation } from './components/Invitation'
import { About } from './components/About'
import {Wishes} from './components/Wishes'
function App() {
  return (
    <div className="App">
        <body>
      <Header />

    
      <Routes>
        <Route path="/" element= {<Home />} />
      </Routes>
      <Routes>
        <Route path="/invitation" element= {<Invitation />} />
      </Routes>
      <Routes>
        <Route path="/aboutus" element= {<About />} />
      </Routes>
      <Routes>
        <Route path="/wishingBook" element= {<Wishes />} />
      </Routes>
      <Footer  />
      </body>
    </div>
  );
}

export default App;
