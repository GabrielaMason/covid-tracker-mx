import React from "react";
import CountUp from "react-countup";

export default function CardItem(props){
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <h5 className="card-title">
                    <CountUp start={0} end={50} duration={2.5} separator=","/>
                </h5>
                <p className="card-text">Date.</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}