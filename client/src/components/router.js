import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import {
  Navbar,
  Nav,
  Link,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

// Components
import Home from './home';
import Cart from './cart';
import Signin from './signin';
import Register from './register';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
              <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
              </Nav>

              <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
              </Form>

              <Nav className="mr-1 ml-5">
                  <NavLink className="ml-5 mr-1" to="/signin">Signin</NavLink>
                  <NavLink className="ml-5 mr-1" to="/cart">Cart</NavLink>
              </Nav>
          </Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;