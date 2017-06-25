import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './main';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

ReactDOM.render(<ToDo />, document.getElementById('root'));
registerServiceWorker();
