import React from 'react'
import "./App.css";
import { Route, Routes } from "react-router";
import { BestSellers } from "./BestSeller";
import { Header } from "./Header.tsx";
import {Product} from "./Product";

function App() {

    return (
        <div className="appContainer">
            <Header />
            <Routes>
                <Route path="/" element={<BestSellers />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </div>
    );
}


export default App;