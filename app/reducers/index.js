import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

module.exports = () => {
    return combineReducers({
        'routing': routerReducer,
    })
} 