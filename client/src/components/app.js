import React, {Component} from 'react';

import Router from './router';
import NavbarTab from './navbar';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router/>
            </div>
        )
    }
}

export default App;