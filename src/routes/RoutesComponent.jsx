import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/Main";
import Widgets from "../components/Widgets";
import {MAIN, WIDGETS} from "../constants";

const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path={MAIN} element={<Main/>}/>
                <Route path={WIDGETS} element={<Widgets/>}/>
            </Routes>
        </div>
    );
};

export default RoutesComponent;