import Navigation from "components/Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "./AppBar.styled";

export default function AppBar () {
    return (
        <>
        <Container>
            <Navigation/>
        </Container>
        <main>
            <Outlet/>
        </main>
        </>
    );
};

