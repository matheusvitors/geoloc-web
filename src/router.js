import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Login, Mapa, ListarRotas } from "pages";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rotas" element={<ListarRotas />} />
            <Route path="/mapa/:id" element={<Mapa />} />
        </Routes>   
    </BrowserRouter>
)

export default Router;