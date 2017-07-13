import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Styles from './styles.css';

class LandingPage extends React.Component {

    render() {

        return (<div>
            
        </div>)
    }

    toggleLogin() {

    }
}


let mapStateToProps = function (state) {
    return {
        
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

LandingPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(LandingPage)