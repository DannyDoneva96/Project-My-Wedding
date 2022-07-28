import {Route,Routes} from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import {Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
        <body>
      <Header />

      <Routes>
        <Route path="/" element= {<Home />} />
      </Routes>
      <Footer  />
      </body>
    </div>
  );
}

export default App;
