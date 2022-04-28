import React, { useState } from "react";
import CardItem from "./CardItem";

export default function CardGroup(props) {
  const data = props.data["MEXICO PAIS"]
  console.log("TARJETAS", data)

 // const totalMuertes = data.reduce((previousV, currentV, index) => previousV + currentV.nuevas_muertes, 0)

  const [cardInfo, setCardInfo] = useState({
      data: [
        {
          title: "Infectados",
          amount: 10,
          date: data[data.length-1].fecha,
          type: "blue",
          description: "Nuevos casos confirmados",
        },
        {
          title: "Muertes",
          amount: 5,
          type: "black",
          date: data[data.length-1].fecha, 
          description: "Nuevas muertes registradas",
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