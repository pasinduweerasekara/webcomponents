import './App.css';
import './components/navbar/navbar'
import NavBar from './components/navbar/navbar';
import Home from './pages/home'
import Downloads from './pages/downloads'
import About from './pages/about'
import Contacts from './pages/contacts'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
          <Router>
              <header>
                <NavBar/>
              </header>
              <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                <Route path='/about' element={<About/>}>
                </Route>
                <Route path='/downloads' element={<Downloads/>}>
                </Route>
                <Route path='/contacts' element={<Contacts/>}>
                </Route>
              </Routes>
          </Router>
  );
}

export default App;
