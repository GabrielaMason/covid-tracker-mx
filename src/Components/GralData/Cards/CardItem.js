import React from "react";
import CountUp from "react-countup";

export default function CardItem(props){
    return(
        <div className="card" style={{width: "18rem", marginRight: "5px"}}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
                <h5 className="card-title">
                    <CountUp start={0} end={props.data} duration={2.5} separator=","/>
                </h5>
                <p className="card-text">{props.date}</p>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}