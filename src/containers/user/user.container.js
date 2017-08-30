import React from 'react'
import {connect} from "react-redux";
import * as userActions from './user.actions'


class UserContainer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			name: props.username,
		}
	}

	handleChange = (event) => {
		this.setState({
			...this.state,
			name: event.target.value
		});
	};


	render(){
		return (
			<div className="user-container">
				<div className="name-display">
					{
						this.props.username
					}
				</div>



				<button onClick={() => this.props.toggleMenu()}>
					change name
				</button>

				{
					this.props.isOpen ?

						<form className="username-input" onSubmit={(e) => {
							e.preventDefault();
							this.props.changeName(this.state.name);
							this.props.toggleMenu();
						}}>
							<div> hit enter to apply </div>
							<input type="text"
								   onChange={this.handleChange}
								   value={this.state.name}
								   placeholder="Should have a name i think"

							/>
						</form> : null
				}

			</div>
		)
	}

}



export default connect((state) => ({
		username: state.user.name,
		isOpen : state.user.open,

	}),
	(dispatch) => ({
		changeName: (name) => dispatch(userActions.changeName(name)),
		toggleMenu: () => dispatch(userActions.toggleChangeMenu())
	}))(UserContainer)