import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {ROUTING, ROUTINGADMIN} from "./contsRoute";
import Container from "../componets/layout/container/container";
import Main from "../pages/main";
import "../style.css"
import ContainerAdmin from "../componetsAdmin/layout/container/containerAdmin";
import {authContext} from "../componets/layout/header/context";
const AppRoute = () => {
    const authData=useContext(authContext)
    return (
        <Routes>
            <Route element={<Container/>}>
                {ROUTING.map(link => (
                    link.path.includes("/lk") ?
                        authData.auth?
                        <Route key={link.path}
                               path={link.path}
                               element={link.component}
                        />:null
                    :<Route key={link.path}
                            path={link.path}
                            element={link.component}
                        />
                ))}
                <Route path="*" element={
                    <Main/>
                }/>
            </Route>
            {/*{authData.authAdmin?*/}
            <Route element={<ContainerAdmin/>}>
                {ROUTINGADMIN.map(link=>(
                    <Route key={link.path}
                    path={link.path}
                    element={link.component}
                    />
                ))}
            </Route>
            {/*:null}*/}
        </Routes>
    );
};

export default AppRoute;