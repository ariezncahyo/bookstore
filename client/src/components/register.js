import React, {Component} from 'react';

class Register extends Component {
    render() {
        return(
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center">
                            <h3 className="title">Register Form</h3>

                            <div className="sign">
                                <div className="form-group">
                                    <input type="name" className="form-control" placeholder="Name"/>
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>

                                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;