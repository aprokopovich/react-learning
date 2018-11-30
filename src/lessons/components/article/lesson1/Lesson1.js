import React, {Component} from 'react';
import articles from './fixtures'

class Lesson1 extends Component {

  render() {
    return (
        <div className='App'>
          <h2>{articles[0].title}</h2>
        </div>
    );
  }
}

export default Lesson1;