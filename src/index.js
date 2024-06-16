import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./Route/AppRoute";
import "./style.css"
import Context from "./componets/layout/header/context";
function App() {
    return (
        <BrowserRouter>
            <Context>
                <AppRoute/>
            </Context>
        </BrowserRouter>
    )
}
const app = ReactDOM.createRoot(document.querySelector('.App'))
app.render(<App/>)