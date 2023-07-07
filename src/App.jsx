import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Title from './components/Title';
import Timer from './components/Timer';
import People from './components/People';
import logo from './logo.svg';

import { useLayoutEffect } from "react";


const  App = () => {
    useLayoutEffect(() => {
		
		if (window.webkit) {
			if (window.webkit.messageHandlers.pageWillUnload) {
		  window.addEventListener('unload', () => window.webkit.messageHandlers.pageWillUnload.postMessage(JSON.stringify({'message' : 'unload'})));
			}
			if (window.webkit.messageHandlers.pageResized) {
		  window.addEventListener('resize', () => window.webkit.messageHandlers.pageResized.postMessage(JSON.stringify({'message' : 'resize'})));
			}
			if (window.webkit.messageHandlers.pageDidHistoryNavigation) {
		  window.addEventListener('popstate', () => window.webkit.messageHandlers.pageDidHistoryNavigation.postMessage(JSON.stringify({'message' : 'popstate'})));
			}
		}
	
		return () => {
		  window.removeEventListener('load', () => window.webkit.messageHandlers.pageDidLoad.postMessage(JSON.stringify({'message' : 'load'})));
		  window.removeEventListener('unload', () => window.webkit.messageHandlers.pageWillUnload.postMessage(JSON.stringify({'message' : 'unload'})));
		  window.removeEventListener('resize', () => window.webkit.messageHandlers.pageResized.postMessage(JSON.stringify({'message' : 'resize'})));
		  window.removeEventListener('popstate', () => window.webkit.messageHandlers.pageDidHistoryNavigation.postMessage(JSON.stringify({'message' : 'popstate'})));
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
