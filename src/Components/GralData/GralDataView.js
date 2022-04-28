import React from "react";
import MXStateSelection from "../MXStatePicker";
import CardItem from "./Cards/CardItem";
import ChartsMX from "./Graphs/Charts";
import Charts from "./Graphs/Charts";
import styles from "./Graphs/Chart.module.css";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function GralData(props){
    return (
        <React.Fragment>


            <div id="tracker" className="mb-3">


                <h1>Datos gráficos del Covid</h1>
                <div className="d-flex justify-content-around">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
                <div className="d-flex justify-content-around">
                </div>
                <div className={styles.chart2}>
                    <div className={styles.chart}>
                        <Charts data={props.data} info={"nuevos_casos"} entidad={"MEXICO PAIS"} name={"Nuevos casos"}/>
                    </div>
                </div>
                <div className={styles.chart2}>
                    <div className={styles.chart}>
                        <Charts data={props.data} info={"nuevas_muertes"} entidad={"MEXICO PAIS"} name={"Defunciones registradas"} />
                    </div>
                </div>
                <div className="container mt-5">
                    <MXStateSelection text={"Ve la información de un Estado de la República"}/>
                </div>
            </div>
        </React.Fragment>

    )
}