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
			window.webkit.messageHandlers.pageDidLoad.postMessage('load')
		  window.addEventListener('unload', () => window.webkit.messageHandlers.pageWillUnload.postMessage('unload'));
		  window.addEventListener('resize', () => window.webkit.messageHandlers.pageResized.postMessage('resize'));
		  window.addEventListener('popstate', () => window.webkit.messageHandlers.pageDidHistoryNavigation.postMessage('popstate'));
		}  else {
			console.log(777)
		}
	
		return () => {
		  window.removeEventListener('unload', () => window.webkit.messageHandlers.pageWillUnload.postMessage('unload'));
		  window.removeEventListener('resize', () => window.webkit.messageHandlers.pageResized.postMessage('resize'));
		  window.removeEventListener('popstate', () => window.webkit.messageHandlers.pageDidHistoryNavigation.postMessage('popstate'));
		} ;
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
