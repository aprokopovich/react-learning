//props — данные, которые передаются дочернему компоненту из родительского компонента.

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class RegistrationFrom extends Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            name:""
        };
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handleNameChange =this.handleNameChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("form is submitted" , this.state.email);
        console.log("form is submitted" , this.state.name);

    }
    handleEmailChange(event){
        console.log("form is changed Email is ", event.target.value);
        this.setState({email:event.target.value});

    }
    handleNameChange(event){
        console.log("form is changed Name is ", event.target.value);
        this.setState({name:event.target.value});

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} >

                <input

                    type="text"
                    placeholder="E -mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}

                />

                <input

                    type="text"
                    placeholder="E -name"
                    value={this.state.name}
                    onChange={this.handleNameChange}

                />


                <button>Save</button>
            </form>
        );
    }
}

export default RegistrationFrom;