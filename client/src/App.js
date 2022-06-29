import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import {Route, Router} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <login />
      <register />
    </div>
  );
}

export default App;
