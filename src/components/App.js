import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

// components
import Header from './Header'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <>
            <Header />
            <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            <Footer />
            </>
        );
    }
}

export default App;