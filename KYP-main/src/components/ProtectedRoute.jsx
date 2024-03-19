import React from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'


function ProtectedRoute({ component: MainPage }) {
    const isAuthenticated = true;
    const location = useLocation();
    return (
        <Routes>
            <Route path="*" element=
                {isAuthenticated ? <MainPage /> : <Navigate to="/login" state={{ from: location }} />} >
            </Route>
        </Routes >
    )
}

export default ProtectedRoute