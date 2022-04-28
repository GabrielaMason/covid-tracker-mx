import React from "react";

export default function CardItem(){
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <h5 className="card-title">Card subtitle</h5>
                <p className="card-text">Date.</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}