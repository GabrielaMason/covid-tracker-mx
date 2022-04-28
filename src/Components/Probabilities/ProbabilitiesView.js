import React from "react";
import DateSelection from "../DatePicker";
import MXStateSelection from "../MXStatePicker";

export default function Probabilities(){
    return (
        <div id="probabilities" className="mb-3">
            <h1>Tú y el covid</h1>
            <div className="container d-flex justify-content-around">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">¿Estaré expuesto al covid?</button>
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModal2Label">¿Estaré expuesto al covid?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <MXStateSelection text={"¿A qué estado de México viajaste?"}/>
                            <div className="mt-3">
                                <label className="from-label">Fecha en la que viajaré</label>
                                <DateSelection />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Ver resultados</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}