import logo from './logo.svg';
import './App.css';
import Login from "./modules/Login/Pages/Login"
import CreateUser from "./modules/Users/Pages/CreateUser"
import User from "./modules/Users/Pages/User"
import Navbar from "./modules/Common/Components/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <User/>
    </div>
  );
}

export default App;
