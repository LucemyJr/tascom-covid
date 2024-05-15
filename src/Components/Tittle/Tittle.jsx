import React, { Component } from 'react'
import '../Home/Home.css'

class Tittle extends Component {
  render(){
    return(
        <div className="section-container">
            <p className="section-hashtag green">{this.props.hashtag}</p>
            <h1 className="section-tittle">{this.props.tittle}</h1>
        </div>
    )
  }
}

export default Tittle




