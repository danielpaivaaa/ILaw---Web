// src/router.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/begin/SplashScreen';
import WelcomeScreen from './screens/begin/WelcomeScreen';
import LoginLawyerScreen from './screens/login/LoginLawyerScreen';
import LoginClientScreen from './screens/login/LoginClientScreen';
import RegisterLawyer from './screens/register/RegisterLawyer';
import RegisterClient from './screens/register/RegisterClient';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashScreen /> } />
                <Route path="/welcome" element={<WelcomeScreen /> } />
                <Route path="/Login-Lawyer" element={<LoginLawyerScreen />} />
                <Route path="/login-client" element={<LoginClientScreen />} />
                <Route path="/register-lawyer" element={<RegisterLawyer />} />
                <Route path="/register-client" element={<RegisterClient />} />
             </Routes>
        </Router>
    );
}

