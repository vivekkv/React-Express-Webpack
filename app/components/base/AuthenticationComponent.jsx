import React, { PropTypes } from 'react';
import Auth from '../../utils/auth.js';
import { hashHistory } from 'react-router';

export default class AuthenticationComponent extends React.Component {

    componentWillMount() {

        if(!Auth.isUserAuthenticated()) {
            
            hashHistory.push("/")
        }
    }
}