import React from 'react'
import coffee from '../assets/coffee.png'

const Header = (props) => {

	return (
		<div className="header-container">
			<div id="left-header">
				<a onClick={() => {}} className="home-button">
					<img  src={coffee} />

				</a>
			</div>

			{/*{*/}
				{/*props.tabs.map((item, index) => {*/}
					{/*return (*/}
						{/*<Tab key={index} tab={item}/>*/}
					{/*)*/}
				{/*})*/}
			{/*}*/}
		</div>


	)
};


export default Header