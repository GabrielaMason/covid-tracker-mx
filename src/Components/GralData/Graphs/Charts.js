import React from "react";
//import Deaths from "./Deaths";
//import Vaccines from "./Vaccines";
//import Cases from "./AverageCases";

export default function ChartsMX(props){
    return(
        <div className="container-fluid  mt-4 d-flex justify-content-around">
            <div>
                <h5>Promedio Últimos 30 Días</h5>
                {/*<Cases data={props.data}/>*/}
            </div>
            <div>
                <h5>Muertes Diarias</h5>
                {/*<Deaths data={props.data}/>*/}
            </div>
            <div>
                <h5>Vacunados</h5>
                {/*<Vaccines data={props.data}/>*/}
            </div>
        </div>
    )
}

