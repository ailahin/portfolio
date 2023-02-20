import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Header> </Header>
      <About> </About>
      <Portfolio> </Portfolio>
     
      <Contact> </Contact>
      <Footer> </Footer>

      
    </div>
  );
}

export default App;
