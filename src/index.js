import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Jobs from './Jobs';


ReactDOM.render(<Jobs />, document.getElementById('root'));
registerServiceWorker();
