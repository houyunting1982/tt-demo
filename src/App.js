import React from "react";
import Home from "./pages/Home";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import CoachBio from "./pages/CoachBio";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/coaches/:name' element={<CoachBio />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
