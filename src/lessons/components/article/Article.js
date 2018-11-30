import React, {Component} from 'react'

// валидатор дял входящих пропс
import PropTypes from "prop-types";


class Article extends Component {


    // состояние компонента обьект с параметарми
    state = {
        isOpen: false
    };


    handleClick = () => {

        this.setState({
            isOpen: !this.state.isOpen
        })

    };

    render() {

        // const -  список переменных
        // принимаем из пропс все обьекты по именам (имена должны совподать)
        // через пропс мы передали 3 проперти -массив статей , число и текст
        const {articles, number, text} = this.props;

        // сетим в константу первую статью из массива статей и задаем первичное состояние обеькта body - закрыто
        // позже по на жатию на кнопку состояние будет изменено на отрыто
        const body = this.state.isOpen && <section>{articles[0].text}</section>;

        return (
            <div className='hello' style={{color: 'red'}}>
                <h2>Title : {articles[0].title}</h2>
                {body}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
                <h3>Creation date :{(new Date(articles[0].date).toDateString())} </h3>

                {/*перебираем все статьи и выводим*/}
                {/*{articles.map((item, index) =>*/}
                    {/*<h3 id={index}>{item.text}*/}
                        {/*<br/>*/}
                        {/*<button onClick={this.handleClick}>*/}
                            {/*{this.state.isOpen ? 'close' : 'open'}*/}
                        {/*</button>*/}
                    {/*</h3>*/}
                {/*)}*/}

                <h3>text:{text} </h3>

                <h3>number :{number} </h3>
            </div>
        )
    }

}


export default Article;


