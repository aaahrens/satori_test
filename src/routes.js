/**
 * Created by drunkengranite on 6/2/17.
 */
import React from "react";
import {Route, Switch} from "react-router";
import "./styles/screen.css";
import MessagesContainer from './containers/messages/messages.container'
import UserContainer from './containers/user/user.container'
import Header from './components/header'

const Routes = (props) => {


	return (
		<div >
			<Header />
			<div className="body-container">
				<Route path="/" component={MessagesContainer}/>
				<Route path="/" component={UserContainer}/>
			</div>
		</div>
	)
};

export default Routes;





