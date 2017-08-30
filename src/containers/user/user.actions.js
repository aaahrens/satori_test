import {CHANGE_NAME, TOGGLE_CHANGE_MENU} from "./user.constants";

export const changeName = (name) => {
	console.log("change anme");
	return {
		type: CHANGE_NAME,
		payload: name
	}
};


export const toggleChangeMenu = () => {
	return {
		type: TOGGLE_CHANGE_MENU
	}
};