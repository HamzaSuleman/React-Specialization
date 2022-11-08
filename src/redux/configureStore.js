import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { Comments } from './comments'

import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

const store = createStore(
    combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk, logger));

export default store;
