import React from 'react'


import RTM from 'satori-rtm-sdk';
import {
	ENDPOINT, KEY
} from './messages.constants'
import {connect} from "react-redux";
import * as messageActions from './messages.actions'

class MessagesContainer extends React.Component{
	constructor(props){
		super(props);

		let client = new RTM(ENDPOINT, KEY);

		client.on('enter-connected',  () => {
			console.log('Connected to Satori RTM!');

		});

		client.on('error', (error) => {
			console.log('Failed to connect', error);
		});

		let subscription = client.subscribe('testerino', RTM.SubscriptionMode.SIMPLE);

		// Writes incoming messages to the log

		subscription.on('rtm/subscription/data', (pdu) => {
				this.props.receiveData(pdu.body.messages)
		});


		client.start();

		/*
			saving shit to the store and the state goes here

			//todo modularize the client configs

		 */
		this.props.saveClient(client);


		this.state = {
			value: '',
		}
	}


	handleChange = (event) => {
		this.setState({
			...this.state,
			value: event.target.value
		});
	};


	render(){
		return (
			<div className="messages-container">
				{
					this.props.currMessages.map((item, index) => {
						return (
							<div key={index} className="message-wrapper" data={item.username === this.props.username}>
								<div className="message-inner-wrapper">

									<div className="message-text" >
										{
											item.message
										}
									</div>
									<div className="message-user">
										{
											item.username
										}
									</div>

								</div>


							</div>
						)
					})
				}



				<form className="text-input" onSubmit={(e) => {
								e.preventDefault();
								this.props.sendMessage(this.state.value);
								this.setState({...this.state , value: ''})

				}}>
					<input type="text"
						   onChange={this.handleChange}
						   value={this.state.value}
						   placeholder="Write a message..."
						    />
				</form>

			</div>
		)
	}
};


export default connect((state) => ({
	currMessages: state.messages.messages,
	username: state.user.name,

	}),
	(dispatch) => ({
		getMessages: () => dispatch(messageActions.fetchPreviousMessages(100)),
		sendMessage: (message) => dispatch(messageActions.sendMessage(message)),
		saveClient: (client) => dispatch(messageActions.saveClient(client)),
		receiveData: (message) => dispatch(messageActions.receiveData(message))

	}))(MessagesContainer)