import { createStore, combineReducers } from 'redux'
import { Dishes } from './dishes'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { Comments } from './comments'

const store = createStore(
    combineReducers({
        dishes: Dishes,
        leaders: Leaders,
        promotions: Promotions,
        comments: Comments
}));

export default store;
