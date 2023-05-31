const { Link } = require("react-router-dom");

const NotFoundView = () => {
    return (
        <h1>
            404 This page was not found, please return to {' '}
            <Link to="/">Home page</Link>
        </h1>
    );
} ;
export default NotFoundView;