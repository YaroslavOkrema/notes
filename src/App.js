import React from "react";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Widgets from "./components/Widgets";

function App() {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route path='main' element={<Main/>}/>
                <Route path='widgets' element={<Widgets/>}/>
            </Routes>
        </div>
    );
}

export default App;
