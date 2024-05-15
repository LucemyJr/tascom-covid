import React, { useState, useEffect } from 'react';
import "./Home.css";
import Tittle from '../Tittle/Tittle.jsx';
import Card from '../Card/Card';
import { Chart } from "react-google-charts";

interface DataProps {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    datetime: string;
    formattedDate: string;
    formattedTime: string;
}

const Home = () => {
    const [brazilConfirmed, setBrazilConfirmed] = useState<number>(0);
    const [brazilDeaths, setBrazilDeaths] = useState<number>(0);
    const [brazilSuspects, setBrazilSuspects] = useState<number>(0);
    const [brazilRefuses, setBrazilRefuses] = useState<number>(0);
    const [selectedStates, setSelectedStates] = useState<DataProps[]>([]);
    const [chartData, setChartData] = useState<Array<Array<string | number>>>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1');
                const data = await response.json();

                // Somando todos os casos Confirmados e casos de Morte para obter os valores totais do Brasil
                const totalCases = data.data.reduce((acc: number, curr: DataProps) => acc + curr.cases, 0);
                const totalDeaths = data.data.reduce((acc: number, curr: DataProps) => acc + curr.deaths, 0);
                const totalSuspects = data.data.reduce((acc: number, curr: DataProps) => acc + curr.suspects, 0);
                const totalRefuses = data.data.reduce((acc: number, curr: DataProps) => acc + curr.refuses, 0);

                setBrazilConfirmed(totalCases);
                setBrazilDeaths(totalDeaths);
                setBrazilSuspects(totalSuspects);
                setBrazilRefuses(totalRefuses);

                const formattedData = data.data.map((state: DataProps) => {
                    const date = new Date(state.datetime);
                    const formattedDate = `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')} - `;

                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                    return {
                        ...state,
                        formattedDate: formattedDate,
                        formattedTime: formattedTime,
                    };
                });

                setSelectedStates(formattedData.slice(0, 4));

                const chartDataArray: Array<Array<string | number>> = [
                    ["", "Cases", "Death"]
                ];
                formattedData.forEach((state: DataProps) => {
                    chartDataArray.push([
                        state.uf,
                        state.cases,
                        state.deaths,
                    ]);
                });
                setChartData(chartDataArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    

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
                        hashtag="#WASHYOURHANDS"
                        tittle="BRAZIL SITUATION"
                    />
                    <div className="global-stats">
                        <div className="stats-container">
                            <div className="left-container">
                                <div className="total-cases-deaths">
                                    <div className="number-subtittle">
                                        <h1 className="total">{brazilConfirmed.toLocaleString()}</h1>
                                        <h1 className="subtittle-stats green">CONFIRMED CASES</h1>
                                    </div>
                                    <div className="number-subtittle">
                                        <h1 className="total">{brazilDeaths.toLocaleString()}</h1>
                                        <h1 className="subtittle-stats green">CASES OF DEATH</h1>
                                    </div>
                                </div>
                                {selectedStates.length > 0 && (
                                    <h1 className="updated-text">UPDATED : {selectedStates[0].formattedDate} - <span className="green">{selectedStates[0].formattedTime}</span></h1>
                                )}
                            </div>
                            <div className="small-stats-container">
                                <div className="small-stats">
                                    <h1 className="total-small">{brazilSuspects.toLocaleString()}</h1>
                                    <h1 className="subtittle-small green">TOTAL SUSPECTS</h1>
                                </div>
                                <div className="small-stats">
                                    <h1 className="total-small">{brazilSuspects.toLocaleString()}</h1>
                                    <h1 className="subtittle-small green">TOTAL SUSPECTS</h1>
                                </div>
                                <div className="small-stats">
                                    <h1 className="total-small">{brazilRefuses.toLocaleString()}</h1>
                                    <h1 className="subtittle-small green">TOTAL REFUSES</h1>
                                </div>
                                <div className="small-stats">
                                    <h1 className="total-small">{brazilRefuses.toLocaleString()}</h1>
                                    <h1 className="subtittle-small green">TOTAL REFUSES</h1>
                                </div>
                            </div>
                        </div>
                        <div className="graph-container">
                        <Chart
                                chartType="Bar"
                                width="100%"
                                height="90%"
                                data={[
                                    ["", "Cases", "Death"],
                                    ...chartData.slice(1, 5).map(row => [row[0], row[1], row[2]]) 
                                ]}
                                options={{
                                    colors: ['#53C8A4', '#003838'] 
                                }}
                            />     
                        </div>
                    </div>
                    <Tittle
                        hashtag="#USEMASKS"
                        tittle="SITUATION BY STATES"
                    />
                    <div className="cards-section">
                        {selectedStates.map((state: DataProps) => (
                            <Card
                                date={state.formattedDate}
                                time={state.formattedTime}
                                state={state.state}

                                confirmedCases={state.cases.toLocaleString()}
                                casesDeath={state.deaths.toLocaleString()}
                                newDeaths={state.suspects.toLocaleString()}
                                newConfirmed={state.suspects.toLocaleString()}
                                newRecovereds={state.refuses.toLocaleString()}
                                totalRecovereds={state.refuses.toLocaleString()}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <div className="footer"></div>
        </>
    )
}

export default Home;
