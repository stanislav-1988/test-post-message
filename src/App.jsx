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
      window.webkit.messageHandlers.rt.postMessage('load');
      window.addEventListener('unload', handlerPostMessageUnLoad);
      window.addEventListener('resize', handlerPostMessageResize);
      window.addEventListener('popstate', handlerPostMessagePopstate);
    }

    return () => {
      // window.removeEventListener('load', handlerPostMessageLoad);
      window.removeEventListener('unload', handlerPostMessageUnLoad);
      window.removeEventListener('resize', handlerPostMessageResize);
      window.removeEventListener('popstate', handlerPostMessagePopstate);
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
