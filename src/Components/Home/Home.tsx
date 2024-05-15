import React from 'react'
import "./Home.css"
import { useState, useEffect } from 'react';

import Tittle from '../Tittle/Tittle.jsx';
import Card from '../Card/Card';

interface DataProps {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
}

const Home = () => {
  return (
    <>
        <header>
            <h1 className="hashtag">#<span className='green'>STAY</span>AT<span className='green'>HOME</span></h1>
            <h1 className="tittle">TASCOM</h1>
            <h2 className="subtittle">COVID <span className='green'>SUMMARY</span></h2>
        </header>
        <main>
            <section className='section-global-situation'>
                <Tittle
                    hashtag = "#WASHYOURHANDS"
                    tittle = "GLOBAL SITUATION"
                />
                <div className="global-stats">
                    <div className="stats-container">
                        <div className="left-container">
                            <div className="total-cases-deaths">
                                <div className="number-subtittle">
                                    <h1 className="total">168.040.850</h1>
                                    <h1 className="subtittle-stats green">CONFIRMED CASES</h1>
                                </div>
                                <div className="number-subtittle">
                                    <h1 className="total">680.400.850</h1>
                                    <h1 className="subtittle-stats green">CASES OF DEATH</h1>
                                </div>
                            </div>
                            <h1 className="updated-text">UPDATED : 27/02 - <span className="green">16:27</span></h1>
                        </div>
                        <div className="small-stats-container">
                            <div className="small-stats">
                                <h1 className="total-small">5743</h1>
                                <h1 className="subtittle-small green">NEW DEATHS</h1>
                            </div>
                            <div className="small-stats">
                                <h1 className="total-small">1587</h1>
                                <h1 className="subtittle-small green">NEW CONFIRMEDS</h1>
                            </div>
                            <div className="small-stats">
                                <h1 className="total-small">487,695</h1>
                                <h1 className="subtittle-small green">NEW RECOVEREDS</h1>
                            </div>
                            <div className="small-stats">
                                <h1 className="total-small">574,365</h1>
                                <h1 className="subtittle-small green">TOTAL RECOVEREDS</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Tittle
                    hashtag = "#USEMASKS"
                    tittle = "SITUATION BY COUNTRY"
                />
                <div className="cards-section">
                    <Card
                        state = "Pernambuco"
                        confirmedCases = "1191503"
                        casesDeath = "23012"

                        newDeaths = "5743"
                        newConfirmed = "1587"
                        newRecovereds = "487,695"
                        totalRecovereds = "574,365"
                    />
                    
                    <Card
                        state = "Pernambuco"
                        confirmedCases = "1191503"
                        casesDeath = "23012"

                        newDeaths = "5743"
                        newConfirmed = "1587"
                        newRecovereds = "487,695"
                        totalRecovereds = "574,365"
                    />
                    <Card
                        state = "Pernambuco"
                        confirmedCases = "1191503"
                        casesDeath = "23012"

                        newDeaths = "5743"
                        newConfirmed = "1587"
                        newRecovereds = "487,695"
                        totalRecovereds = "574,365"
                    />
                    <Card
                        state = "Pernambuco"
                        confirmedCases = "1191503"
                        casesDeath = "23012"

                        newDeaths = "5743"
                        newConfirmed = "1587"
                        newRecovereds = "487,695"
                        totalRecovereds = "574,365"
                    />

                </div>
            </section>
            
        </main>
        <div className="footer"></div>
    </>
  )
}

export default Home
