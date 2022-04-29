import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Probabilities(){
    const [post, setPost] = useState(null)
    const [valueState, setValueState] = useState("")
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    function createPost() { 
        axios
          .post("http://localhost:3001/prediccion1",
          {
            body: {
                date1: startDate,
                date2: endDate, 
                estado: "AGUASCALIENTES"
            }, 
          })
          .then((response) => {
            setPost(response.data);
            alert(response.data.message)
          });
      }

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
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue>A qué estado viajarás?</option>
                                <option value="AGUASCALIENTES">Aguascalientes</option>
                                <option value="BAJA CALIFORNIA">Baja California</option>
                                <option value="BAJA CALIFORNIA SUR">Baja California Sur</option>
                                <option value="CAMPECHE">Campeche</option>
                                <option value="CHIAPAS">Chiapas</option>
                                <option value="CHIHUAHUA">Chihuahua</option>
                                <option value="DISTRITO FEDERAL">Ciudad de México</option>
                                <option value="COAHUILA">Coahuila</option>
                                <option value="COLIMA">Colima</option>
                                <option value="DURANGO">Durango</option>
                                <option value="ESTADO DE MEXICO">Estado de México</option>
                                <option value="GUANAJUATO">Guanajuato</option>
                                <option value="GUERRERO">Guerrero</option>
                                <option value="HIDALGO">Hidalgo</option>
                                <option value="JALISCO">Jalisco</option>
                                <option value="MICHOACAN">Michoacán</option>
                                <option value="MORELOS">Morelos</option>
                                <option value="NAYARIT">Nayarit</option>
                                <option value="NUEVO LEON">Nuevo León</option>
                                <option value="OAXACA">Oaxaca</option>
                                <option value="PUEBLA">Puebla</option>
                                <option value="QUERETARO">Querétaro</option>
                                <option value="QUINTANA ROO">Quintana Roo</option>
                                <option value="SAN LUIS POTOSI">San Luis Potosí</option>
                                <option value="SINALOA">Sinaloa</option>
                                <option value="SONORA">Sonora</option>
                                <option value="TABASCO">Tabasco</option>
                                <option value="TAMAULIPAS">Tamaulipas</option>
                                <option value="TLAXCALA">Tlaxcala</option>
                                <option value="VERACRUZ">Veracruz</option>
                                <option value="YUCATAN">Yucatán</option>
                                <option value="ZACATECAS">Zacatecas</option>
                            </select>
                            <div className="mt-3">
                                <label className="from-label">Fecha en la que viajaré</label>
                                <DatePicker
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                minDate={new Date ("2020", "02", "26")}
                                maxDate={new Date ("2022", "04", "22")}
                                isClearable={true}
                                placeholderText="Haz clic aquí para las fechas."
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createPost}>Ver resultados</button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}