import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './main';
import registerServiceWorker from './registerServiceWorker';
import './style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<ToDo />, document.getElementById('root'));
registerServiceWorker();
