import React, {Component} from 'react'


class Article extends Component {


  state = {
    isOpen: true
  };


  render() {
    const {article} = this.props;
    const style = {width: '50%'};
    const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
    return (
        <div className='card mx-auto' style={style}>
          <div className='card-header'>
            <h6 className="card-subtitle text-muted">
              creation date: {(new Date(article.date)).toDateString()}
            </h6>
            <br/>
            <h2 style={{color: 'red'}}>
              {article.title}
              <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                {this.state.isOpen ? 'close' : 'open'}
              </button>
            </h2>
          </div>
          <br/>
          <div className='card-body'>
            {body}
          </div>
          <br/>
        </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

}

export default Article