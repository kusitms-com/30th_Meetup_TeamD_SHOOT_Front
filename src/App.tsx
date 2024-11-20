// App.tsx
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/MainPage';
import OAuthPage from './pages/OAuthPage';
import ProfilePage from './pages/ProfilePage';



const App = () => {
    return (
        <div className='mt-[80px]'>
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<OAuthPage />} />
            <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        </div>

    );
};

export default App;
