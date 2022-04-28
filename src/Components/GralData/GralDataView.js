import React from "react";
import MXStateSelection from "../MXStatePicker";
import CardItem from "./Cards/CardItem";
import ChartsMX from "./Graphs/Charts";

export default function GralData(){
    return (
        <div id="tracker" className="mb-3">
            <h1>Datos gráficos del Covid</h1>
            <div className="d-flex justify-content-around">
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
            <div className="d-flex justify-content-around">
                < ChartsMX/>
            </div>
            <div className="container mt-5">
                <MXStateSelection text={"Ve la información de un Estado de la República"}/>
            </div>
        </div>
    )
}