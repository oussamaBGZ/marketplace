import React, { useEffect, useRef, useState } from 'react';
import localService from './localService';
import {
    Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function PrivateRoute(props) {
 
    return <>
        {
            localService.getItem("auth") ?
                <Route path={props.path}>
                    {props.children}
                </Route>
                :
                <Redirect to="/login" />
        }
    </>
}

export default PrivateRoute;
