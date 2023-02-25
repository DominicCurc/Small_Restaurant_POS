import { Navbar, Nav, Container } from "react-bootstrap";
// there should be an add to cart button, a quantity button (plus or minus (maybe you want two servings)), and a home page button

export const NavBarBootstrap = () =>{
    return(
        <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#homepage">Navbar</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="../routes/menu">menu</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBarBootstrap;