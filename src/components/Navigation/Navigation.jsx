import { Link } from "./Navigation.styled";

 const Navigation = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
    );

};
export default Navigation;