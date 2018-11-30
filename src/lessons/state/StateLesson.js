import React, { Component } from 'react';


///state — внутреннее хранилище данных (объекта) компонента.
//local state - изменения внутри компонента
//props - передать изменения и данные из компонента в компонент

class StateLesson extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

// on click function
    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log( 'isOpened', this.state.isOpened );
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Opened</div>;
        }else{
            dropdownText = <div>Closed</div>;
        }
        return (

            //this.state.toggleState.bind(this) указываем фунцию длЯ обработки нажатия \
            // bind функцию к локальному скоупу this
            <div onClick={this.toggleState.bind(this)}>
                Open/Close
                {dropdownText}
            </div>
        );
    }
}

export default StateLesson;