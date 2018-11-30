import React, {Component} from 'react';

// import Lesson from './lessons/lesson'
// import StateLesson from './lessons/state/StateLesson'
// import ParentProps from './lessons/state/propsLesson/ParentProps'
// import RegistrationForm from './lessons/state/forms/RegistrationForm'

// компонент обрабатывающий статьи
// import Article from './lessons/components/article/Article'

 import ArticleList from './lessons/components/list/ArticleList'

// добовляем список статей

// import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Lesson/>,*/}
                {/*<StateLesson/>*/}
                {/*<ParentProps/>*/}
                {/*<RegistrationForm/>*/}

                {/*<Article articles={articles} number={1} text={"yoo"}/>*/}
                <ArticleList/>
            </div>
        );
    }
}

//передаем список статей в компонент стаьия как пропс
//<Article  articles={articles} number={1} text={"yoo"}/>

export default App;
