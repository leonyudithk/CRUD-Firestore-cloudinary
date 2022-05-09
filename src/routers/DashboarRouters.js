import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarCita from '../componente/AgregarCita';
import Listar from '../componente/Listar';
import NavBars from '../componente/NavBars';
import Add from '../componente/CRUD/Add'
import List from '../componente/CRUD/List'
import Home from '../componente/Home';
const DashboarRouters = () => {
    return (
        <>
        <NavBars/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agregarcita" element={<AgregarCita />} />
                <Route path="/listCita" element={<Listar />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>



    );
};

export default DashboarRouters;