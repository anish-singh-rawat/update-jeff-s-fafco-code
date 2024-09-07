import { Routes, Route, Navigate ,useNavigate , useLocation } from 'react-router-dom';
import cookie from 'react-cookies';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Register';
import InactiveAccount from '../pages/inactiveAccount/InactiveAccount';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import RegisterLink from '../pages/registerLink/RegisterLink';
import RegistrationLookup from '../pages/registrationLookup/RegistrationLookup';
import PagesNotfound from '../pages/404/PagesNotFound';
import NewPassword from '../pages/newPassword/NewPassword';
import AddressValidation from '../pages/AddressValidation/AddressValidation';
import ViewRegistration from '../pages/homeownerRegistration/HomeownerRegistration';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Router() {
    let token = cookie.load('token');
    const Navigation = useNavigate();
    const customSliceSuccess = useSelector((state) => state.CustomSlice.isSuccess);

    const location = useLocation();
    const path = location.pathname;
    useEffect(()=>{

        token = cookie.load('token');
        if(token){
            if(path == "/login" || path == "/register"){
                Navigation('/')
            }
        }
    },[customSliceSuccess, token])

    return (
        <Routes>
            <Route exact path="/" element={token ? <PrivateRoute><Home /></PrivateRoute> : <Navigate to="/login" />}/>
            <Route exact path="/login" element={token ? <Navigate to="/" /> : <Login />}/>
            <Route exact path="/register" element={token ? <Navigate to="/" /> : <Signup />}/>
            <Route path="/inactiveAccount" element={<InactiveAccount />} />
            <Route path="/forgetPassword" element={<ResetPassword />} />
            <Route path="/registerLink" element={<RegisterLink />} />
            <Route path="/viewRegistration" element={<ViewRegistration />} />
            <Route path="/registrationLookup" element={<RegistrationLookup />} />
            <Route path="/addressValidation" element={<AddressValidation />} />
            <Route path="newPassword" element={<NewPassword />} />
            <Route path="*" element={<PagesNotfound />} />
        </Routes>
    );
}
