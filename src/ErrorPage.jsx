import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops !!!</h1>
            <p>We are unable to find the page you are looking for.</p>

            <Link to={"/"}>Go back home</Link>
        </div>
    );
};

export default ErrorPage;