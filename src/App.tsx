// App.tsx
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import OAuthPage from './pages/signup/OAuthPage';
import UserPage from './pages/user/index1';

const App = () => {
    return (
        <div className='mt-[80px]'>
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<OAuthPage />} />
            <Route path="/user" element={<UserPage/>} />
        </Routes>
        </div>

    );
};

export default App;
