import React from "react";
import CardItem from "./Cards/CardItem";
import ChartsMX from "./Graphs/Charts";
import Charts from "./Graphs/Charts";
import styles from "./Graphs/Chart.module.css";
import CardGroup from "./Cards/CardGroup";

export default function GralData(props){
    return (
        <React.Fragment>
            <div id="tracker" className="mb-3">

                <h1>Datos gráficos del Covid</h1>
                <div className="d-flex justify-content-around">
                    {/*<CardGroup data={props.data}/>*/}
                </div>
                <div className="d-flex justify-content-around">
                </div>
                <div className={styles.chart2}>
                    <div className={styles.chart}>
                        <Charts data={props.data} info={"nuevos_casos"} entidad={"MEXICO PAIS"} name={"Nuevos casos"}/>
                    </div>
                </div>
                <div className={`${styles.chart2}`}>
                    <div className={`${styles.chart}`}>
                        <Charts data={props.data} info={"nuevas_muertes"} entidad={"MEXICO PAIS"} name={"Defunciones registradas"} />
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}