import './App.css';
import Navbar from './components/navbar';
import LoginPage from './webPages/loginPage';
import ContactPage from './webPages/contactPage';
import HomePage from './webPages/homePage';
import { loginErr } from './globalV/allv';
import { useState } from 'react';
import Popup from './components/popup';

function App() {
  const [loginerr,setloginerr] = useState(false);
  
  return (
    <loginErr.Provider value={{loginerr,setloginerr}}>
      <Navbar/>
    </loginErr.Provider>
  );
}

export default App;
