import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h2>OOPs!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
        {
            error.status === 404 && <div>
                <h3>Page not found</h3>
                <h5>Go back where you from</h5>
                <Link to="/"><button>Home</button></Link>
            </div>
        }
        </div>
    );
};

export default ErrorPage;