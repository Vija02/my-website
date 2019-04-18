import React, { Component } from 'react'

class Root extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						padding: 20,
						textAlign: 'right',
						backgroundColor: '#2C303B',
						color: 'white',
						fontWeight: 500,
					}}
				>
					<h1 style={{ margin: 0 }}>Michael Salim</h1>
				</div>
				<div style={{ margin: 20 }}>
					<h2>Hi There!</h2>
					<p>
						There aren't much here right now.
						<br />
						Here are some links for more interesting stuff :)
					</p>
					<a href="https://overrise.co.uk">OverRise</a>
				</div>
			</div>
		)
	}
}

export default Root
