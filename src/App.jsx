import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Title from './components/Title';
import Timer from './components/Timer';
import People from './components/People';
import logo from './logo.svg';

import { useEffect } from "react";


const  App = () => {
    useEffect(() => {
		if (window.webkit) {
		  window.addEventListener('load', () => window.webkit.messageHandlers.rt.postMessage('load'));
		  window.addEventListener('unload', () => window.webkit.messageHandlers.oo.postMessage('unload'));
		  window.addEventListener('resize', () => window.webkit.messageHandlers.lg.postMessage('resize'));
		  window.addEventListener('popstate', () => window.webkit.messageHandlers.lg.postMessage('popstate'));
		}
	
		return () => {
		  window.removeEventListener('load', () => window.webkit.messageHandlers.rt.postMessage('load'));
		  window.removeEventListener('unload', () => window.webkit.messageHandlers.oo.postMessage('unload'));
		  window.removeEventListener('resize', () => window.webkit.messageHandlers.lg.postMessage('resize'));
		  window.removeEventListener('popstate', () => window.webkit.messageHandlers.lg.postMessage('popstate'));
		};
	  }, []);
	  return (
		<div>
			<header className='header'>
			<Link to='/title'>title</Link>
			<Link to='/timer'>timer</Link>
			<Link to='/people'>people</Link>
		</header>
		<img id="img" src={logo} className="App-logo" alt="logo" />
		<Routes>
			<Route path='/title' element={<Title />} />
			<Route path='/timer' element={<Timer />} />
			<Route path='/people' element={<People />} />
		</Routes>
		</div>
	  );
	}

	export default App;
