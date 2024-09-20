import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/Main";
import Widgets from "../components/Widgets";

const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path='main' element={<Main/>}/>
                <Route path='widgets' element={<Widgets/>}/>
            </Routes>
        </div>
    );
};

export default RoutesComponent;