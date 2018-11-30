import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LessonsApp from './lessons/components/LessonsApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    /*<App />,*/
    <LessonsApp/>,
    document.getElementById('root')
);
registerServiceWorker();
