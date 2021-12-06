import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachBio from "./pages/CoachBio";
import Tournament from "./pages/Tournament";
import TournamentsBoard from "./pages/TournamentsBoard";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/coaches/:name' element={<CoachBio />} />
                <Route path='/tournament' element={<TournamentsBoard />} />
                <Route path='/tournament/:id' element={<Tournament />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
