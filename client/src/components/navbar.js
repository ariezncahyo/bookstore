import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    Link,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

class NavbarTab extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Book Store</Navbar.Brand>
                    <Nav className="mr-auto">

                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>

                    <Nav>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default NavbarTab;