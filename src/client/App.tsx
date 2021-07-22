import * as React from 'react';
import { useState, useEffect } from 'react';
import Chirps from '../server/chirps'
/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	// const [greeting, setGreeting] = useState<string>('');
	// useEffect(() => {
	// 	async function getGreeting() {
	// 		try {
	// 			const res = await fetch('/api/hello');
	// 			const greeting = await res.json();
	// 			setGreeting(greeting);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// 	getGreeting();
	// }, []);

	return (
		<>
		
		<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  </nav>
		<main className="container my-5">
			<h1 className="text-primary text-center">Send Your Chirp</h1>
			<input type="text" name="username" placeholder="username"/>
            <input type="text" name="message" placeholder="your chirp"/>
            <input className="bg-dark text-white rounded" type="submit" value="send chirp"/>
			<ul className="list-group">
  <li className="list-group-item">@ashsddhsk: hi</li>
  <li className="list-group-item">@rbfisnofnsk: hey</li>
  </ul>
		</main>
		{/* <Chirps/> */}
		</>
	);
};

interface AppProps {
	
}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
