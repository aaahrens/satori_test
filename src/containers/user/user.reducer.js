/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";

import Immutable from "immutable";
import {CHANGE_NAME, TOGGLE_CHANGE_MENU} from "./user.constants";

const initialState = {
	name: "Foo",
	open: false,
};


const UserReducer = handleActions({

	[CHANGE_NAME]: (state, action) => {
		return {
			...state,
			name : action.payload,
		}
	},
	[TOGGLE_CHANGE_MENU]: (state, action) => {
		return {
			...state,
			open : !state.open
		}
	},

}, initialState);



export default UserReducer