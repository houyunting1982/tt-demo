import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoachBio from "./pages/CoachBio";
import Tournament from "./pages/Tournament";
import TournamentsBoard from "./pages/TournamentsBoard";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/coaches/:name' element={<CoachBio />} />
                    <Route path='/tournament' element={<TournamentsBoard />} />
                    <Route path='/tournament/:id' element={<Tournament />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
