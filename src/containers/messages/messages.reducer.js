/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";

import Immutable from "immutable";
import {SAVE_CLIENT, SAVE_MESSAGES} from "./messages.constants";

const initialState = {
	messages: Immutable.List(),
	client: null,
};


const MessagesReducer = handleActions({

	[SAVE_CLIENT]: (state, action) => {
		return {
			...state,
			client: action.payload
		}
	},
	[SAVE_MESSAGES]: (state, action) => {
		return {
			...state,
			messages: state.messages.push(action.payload)
		}
	},


}, initialState);



export default MessagesReducer