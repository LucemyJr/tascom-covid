import React, { Component } from 'react'
import '../Home/Home.css'
import '../Card/Card.css'

class Card extends Component {
  render(){
    return(
        <div className="card-container">
            <div className="top-container">
                <h1 className="updated-text">UPDATED : 27/02 - <span className="green">16:27</span></h1>
                <h1 className="state-name">{this.props.state}</h1>
                <h1 className="text-cases">{this.props.confirmedCases}</h1>
                <h1 className="top-text green">CONFIRMED CASES</h1>
                <h1 className="text-cases">{this.props.casesDeath}</h1>
                <h1 className="top-text green">CASES OF DEATH</h1>
            </div>
            <div className="bot-container">
              <div className="bot-line">
                <div className="new-deaths">
                  <h1 className="card-number">{this.props.newDeaths}</h1>
                  <h1 className="card-text green">NEW DEATHS</h1>
                </div>
                <div className="new-confirmed">
                  <h1 className="card-number">{this.props.newConfirmed}</h1>
                  <h1 className="card-text green">NEW CONFIRMED</h1>
                </div>
              </div>
              <div className="bot-line">
                <div className="new-recovereds">
                  <h1 className="card-number">{this.props.newRecovereds}</h1>
                  <h1 className="card-text green">NEW RECOVEREDS</h1>
                </div>
                <div className="total-recovereds">
                  <h1 className="card-number">{this.props.totalRecovereds}</h1>
                  <h1 className="card-text green">TOTAL RECOVEREDS</h1>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default Card

/*

{this.props.hashtag}

*/




