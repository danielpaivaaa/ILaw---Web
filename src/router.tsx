// src/router.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import WelcomeScreen from './screens/begin/WelcomeScreen';
import LoginLawyerScreen from './screens/login/LoginLawyerScreen';
import LoginClientScreen from './screens/login/LoginClientScreen';
import RegisterLawyer from './screens/register/RegisterLawyer';
import RegisterClient from './screens/register/RegisterClient';
import { AnimatePresence } from "framer-motion";
import RegisterTwoLawyer from './screens/register/RegisterTwoLawyer'
import HomeLawyer from './screens/home/HomeLawyer';
import  HomeClient  from './screens/home/HomeClient';





export default function AppRouter() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<WelcomeScreen /> } />
                <Route path="/Login-Lawyer" element={<LoginLawyerScreen />} />
                <Route path="/login-client" element={<LoginClientScreen />} />
                <Route path="/register-lawyer" element={<RegisterLawyer />} />
                <Route path="/register-client" element={<RegisterClient />} />
                <Route path='/register-two-lawyer' element={<RegisterTwoLawyer />} />
                <Route path='/home-lawyer' element={<HomeLawyer />} />
                <Route path='/home-client' element={<HomeClient />} />
             </Routes>
        </AnimatePresence>
    );
}

