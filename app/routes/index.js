import App from '../components/app';
import LandingPage from '../pages/landingPage';

export default [{
    path: "/",
    component: LandingPage,
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../pages/landingPage'),
            })
        })
    }
}, {
    component: App,
    path: "/home",
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../pages/home'),
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [

            ])
        })
    },
}, {
    path: "/notauthorized",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/NotAuthroized'))
        })
    }
}, {
    path: "*",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../pages/common/NotFound'))
        })
    }
}]