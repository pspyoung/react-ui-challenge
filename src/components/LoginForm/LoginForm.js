import React from 'react';
import './LoginForm.css';

function LogoForm(props) {
	return (
		<div className="formBody">
			<input type="text" className="inputs"></input>
			<input type="text" className="inputs"></input>
			<button className="loginButton">Login</button>
		</div>
	);
}

export default LogoForm;
