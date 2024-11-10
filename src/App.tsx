// App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/main/MainPage';


const App = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<LoginPage />} />
        //         <Route path="/signup" element={<SignupPage />} />
        //     </Routes>
        // </Router>
        <MainPage />
    );
};

export default App;
