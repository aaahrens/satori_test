/**
 * Created by drunkengranite on 5/29/17.
 */
import MessagesReducer from './containers/messages/messages.reducer'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import UserReducer from "./containers/user/user.reducer";

const allReducers = combineReducers({
    messages: MessagesReducer,
    router: routerReducer,
	user: UserReducer
});

export default allReducers;
