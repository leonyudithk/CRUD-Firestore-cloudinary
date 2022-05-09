import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBars = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Ejercicio de Clase</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><Link to="/">Home </Link></Nav.Link>
                            <Nav.Link href="#features"><Link to="/add">Agregar </Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/list">Listar </Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
               
            </>
        </div>
    );
};

export default NavBars;