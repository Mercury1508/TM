import React from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Login from './Components/SignIn/Login.jsx';
import Register from './Components/SignIn/Register.jsx';
import Profile from './Components/Profile/Profile.jsx';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Select from './Components/Select/Select.jsx';
import ProtectedRoute from "./Components/SignIn/ProtectedRoute";

function App(){
    
    return(<>
     <UserAuthContextProvider>
        
    <Router>
    <Routes>
     <Route path="/" exact element={<Home />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
            <Route path="/profile" exact element={<Profile />} />

            <Route path="/select" exact element={<ProtectedRoute><Select /></ProtectedRoute>} />
			
    </Routes>
    </Router>
    </UserAuthContextProvider>
    </>
    )
}

export default App