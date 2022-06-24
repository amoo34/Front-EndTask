import logo from './logo.svg';
import './App.css';
import Login from "./modules/Login/Pages/Login"
import CreateUser from "./modules/Users/Pages/CreateUser"
import EditUser from "./modules/Users/Pages/EditUser"
import User from "./modules/Users/Pages/User"
import Navbar from "./modules/Common/Components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Login />} exact>
          </Route>
          <Route path="/users" element={<User />}>
          </Route>
          <Route path="/create-users" element={<CreateUser />}>
          </Route>
          <Route path="/edit-users/:id" element={<EditUser />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
