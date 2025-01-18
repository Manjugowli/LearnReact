import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () =>{
    const error = useRouteError();
    return (
        <div>
            <h1>Oopss!....</h1>
            <h2>Something went wrong.....</h2>
            <div>{error?.status}:{error?.statusText} </div>
            <div>{error?.data}</div>
        </div>
    )
}

export default Error;