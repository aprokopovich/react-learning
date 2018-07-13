import React, {Component} from 'react';

import Lesson from './lessons/lesson'
import StateLesson from './lessons/state/StateLesson'
import ParentProps from './lessons/state/propsLesson/ParentProps'
import RegistrationForm from './lessons/state/forms/RegistrationForm'

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Lesson/>,
                <StateLesson/>
                <ParentProps/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
