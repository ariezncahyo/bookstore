import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';

class Signin extends Component {
    render() {
        return (
            <div className="signin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center">
                            <h3>Please Sign in</h3>

                            <div className="sign">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>

                                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                <p>Need an Account? <Nav.Link href="/signup">Register</Nav.Link></p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;