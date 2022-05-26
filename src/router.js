import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login, Home } from "pages";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/mapa" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>   
    </BrowserRouter>
)

export default Router;