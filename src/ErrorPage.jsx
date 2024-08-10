import {  NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%]">
            <div className="text-2xl font-semibold">
            <h1>Oops !!!</h1>
            <p>We are unable to find the page you are looking for.</p>

            </div>
            <NavLink to={"/"}className="bg-gray-100 border px-2 rounded-lg py-1">Go Back Home</NavLink>
            
        </div>
    );
};

export default ErrorPage;