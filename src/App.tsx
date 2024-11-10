// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import MainPage from './pages/main/MainPage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
};

export default App;
