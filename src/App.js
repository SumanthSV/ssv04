import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import Certificates from './components/Certificates';
import Experience from './components/Experience';
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <Experience/>
      <Certificates/>
    </>
  );
}

export default App;
