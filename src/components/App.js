import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux'

// components
import Header from './Header'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import ContactModal from './ContactModal'

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
            <ContactModal />
            {/* {this.props.contactModal ? <ContactModal /> : null} */}
            
            </>
        );
    }
}

const mapStateToProps =state=>{
    return {
        contactModal: state.contactModal
    }
}

export default connect(mapStateToProps, null)(App);