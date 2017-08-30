import {

} from './messages.constants'
import {SAVE_MESSAGES} from "./messages.constants";
import {SEND_MESSAGE} from "./messages.constants";
import {SAVE_CLIENT} from "./messages.constants";
import {SAVE_SUBSCRIPTION} from "./messages.constants";


export const fetchPreviousMessages = (limit) =>{
	return (dispatch, getState) => {
		let client = getState().messages.client;

	}
};

export const receiveData = (data) => {
	console.dir(data);
	switch (data[0].type){
		case 'offline':
			return {

			};
		case 'message':

			return{
				type: SAVE_MESSAGES,
				payload: data[0]
			};

		case 'online':
			return {

			};

		default:
			return{
				type: 'Do Nothing should show error'
			}
	}
};


export const sendMessage = (message) =>{

	return (dispatch, getState) => {

		let client = getState().messages.client;
		if(!client){
			console.log("error, no client exists")
		}else if(!client.isConnected()){
			console.log("not logged in shit")
		}else{

			const username  = getState().user.name;


			client.publish('testerino', {type: 'message', message: message, username: username} , (pdu) => {

				if (!pdu.action.endsWith('/ok')) {
					console.log('something went wrong');
				//		todo dispatch show error here
				}
			})


		}

	}
};



export const saveSentMessage = (message) => {
	return {
		type: SEND_MESSAGE,
		payload: message,
	}
};


export const saveClient = (client) => {
	return {
		type: SAVE_CLIENT,
		payload: client,
	}
};

export const saveSubscription = (subscription) => {
	return {
		type: SAVE_SUBSCRIPTION,
		payload: subscription
	}
};

