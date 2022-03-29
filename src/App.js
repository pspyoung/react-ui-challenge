import logo from './logo.svg';
import './App.css';
import LogoBody from './components/LogoBody/LogoBody.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import FormFooter from './components/FormFooter/FormFooter.js';

function App() {
	return (
		<div className="App">
			<div className="appBody">
				<LogoBody />
				<LoginForm />
				<FormFooter />
			</div>
			<p className="needHelp">
				Need help? No problem! Email support@acompany or call 800-377-6915.
			</p>
		</div>
	);
}

export default App;
