import React from 'react'
import { connect } from 'react-redux';
import AuthenticationComponent from '../../components/Base/AuthenticationComponent'

class Home extends AuthenticationComponent {

    render() {
        return (<div> {this.props.children} </div>)
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

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)