//props — данные, которые передаются дочернему компоненту из родительского компонента.

import React, {Component} from 'react';


//props - передать изменения и данные из компонента в компонент

class ChildProps extends Component {

    render() {
        console.log('items', this.props.items + " " + this.props.array);
        return (
            //  each = 1 map 2 list (each element * 2)
            <div>

                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label} </a>
                )}
                {this.props.array.map((number) =>
                 <li>{number*2}</li>
                )}
            </div>
        );
    }
}

export default ChildProps;