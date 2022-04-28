import React from "react";
import Charts from "./GralData/Graphs/Charts";

function MXStateSelection(props) {


    return(
        <select className="form-select" aria-label="Default select example">
            <option defaultValue>{props.text}</option>
            <option value="AGUSCALIENTES">Aguascalientes</option>
            <option value="BAJA CALIFORNIA">Baja California</option>
            <option value="BAJA CALIFORNIA SUR">Baja California Sur</option>
            <option value="CAMPECHE">Campeche</option>
            <option value="CHIAPAS">Chiapas</option>
            <option value="CHIHUAHU">Chihuahua</option>
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
        
    );
}

export default MXStateSelection