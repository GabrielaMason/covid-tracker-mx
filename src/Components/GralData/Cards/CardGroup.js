import React, { useState } from "react";
import CardItem from "./CardItem";

export default function CardGroup(props) {
  const data = props.data["MEXICO PAIS"]
  let suma_casos = 0;
  let suma_muertes = 0;
  // Sumar nuevos_casos
  for(let i = 0; i < data.length; i++) {
    suma_casos += parseInt(data[i].nuevos_casos);
    suma_muertes += parseInt(data[i].nuevas_muertes);
  }


  const [cardInfo, setCardInfo] = useState({
      data: [
        {
          title: "Infectados",
          amount: data[data.length-1].nuevos_casos,
          date: data[data.length-1].fecha,
          type: "blue",
          description: "Nuevos casos confirmados",
        },
        {
          title: "Muertes",
          amount: suma_muertes,
          type: "black",
          date: data[data.length-1].fecha, 
          description: "Nuevas muertes registradas",
        },
        {
          title: "Total de contagiados",
          amount: suma_casos,
          type: "black",
          date: data[data.length-1].fecha, 
          description: "Registro actualizado",
        }
      ]
    });

  return (
    <div>
      <div className="d-flex justify-content-around">
        {cardInfo.data.map((d) => {
          return (
            <CardItem 
              title={d.title}
              data={d.amount}
              date={d.date}
              description={d.description}
              type={d.type}
            />
          )
        })}
      </div>
    </div>
  );
};