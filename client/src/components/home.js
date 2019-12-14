import React, {Component} from 'react';

class Home extends Component {
    render() {
        return(
           <div className="home">
               <div className="jumbotron text-center">
                    <div class="container">
                        <h3>Happy new year</h3> 
                        <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> 
                    </div>
               </div>


                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" src="http://img.bukabuku.net/product/e/5/e52c449d165c4d416be6c5fe24456278.jpg"/>

                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" src="http://img.bukabuku.net/product/e/5/e52c449d165c4d416be6c5fe24456278.jpg"/>

                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" src="http://img.bukabuku.net/product/e/5/e52c449d165c4d416be6c5fe24456278.jpg"/>

                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <footer className="text-muted">
                    <div className="container">
                        <p>Copyright: @2019 All right reserved</p>
                    </div>
                </footer>
           </div>
        )
    }
}

export default Home;