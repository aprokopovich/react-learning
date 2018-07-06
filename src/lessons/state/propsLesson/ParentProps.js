import React, {Component} from 'react';

import ChildProps from "./ChildProps";

class ParentProps extends Component {


    state = {
        name:"Anton"
    };

    getMenu(){
        const menu = [
            {
                link: '/articles',
                label: 'Articles'
            },
            {
                link: '/contacts',
                label: 'Contacts'
            },
            {
                link: '/posts',
                label: 'Posts'
            }
        ];

        return menu;
    }

    render() {

        const array = [1,2,3,4,5];

        return (
            <div>
            <ChildProps items={this.getMenu()} array = {array}/>
            </div>
        );
    }
}

export default ParentProps;