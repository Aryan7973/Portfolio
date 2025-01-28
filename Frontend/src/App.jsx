import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import Work from './Pages/Work'
import Navigation from './Pages/Navigation';
import RotatingLaptop from './Components/RotatingLaptop';

function App() {
  return (
    <div className="App ">
        <Navigation/>
        <RotatingLaptop/>
        <Home/>
        <Skills />
        <Projects />
        <ContactMe />
        <Work />
    </div>
  );
}

export default App;
  