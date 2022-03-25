import './App.css';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Menu from './components/Menu';
import React from 'react'

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="page">
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/drift" element={<DriftPage />} />
                    <Route path="/timeattack" element={<TimeAttackPage />} />
                    <Route path="/forza" element={<ForzaPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};