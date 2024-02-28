// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Auth/LoginComponent/Login";
import Register from "./components/Auth/RegisterComponent/Register";
import Home from "./components/Home/Home"; // Use BrowserRouter from react-router-dom

function App() {
    return (
        <Router>
            <div>
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<Home />} /> {/* Use 'element' instead of 'component' */}
                    <Route path="/login" element={<Login />} /> {/* Use 'element' instead of 'component' */}
                    <Route path="/register" element={<Register />} /> {/* Use 'element' instead of 'component' */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;