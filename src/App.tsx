// App.tsx
import {Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/main/MainPage';
import OAuthPage from './pages/OAuthPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<OAuthPage />} />
        </Routes>
    );
};

export default App;
