import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import articles from './fixtures'
import Article from './Article'

class ArticleList extends Component {
  state = {
    isOpen: true
  };

  render() {
    const articleElements = articles.map((article) =>
        <li key={article.id} className='article-list__li'>
          <Article article={article}/>
        </li>
    );
    return (

        <ul>
          {articleElements}
        </ul>
    )
  }

}

export default ArticleList;
