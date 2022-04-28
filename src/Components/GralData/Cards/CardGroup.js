import React from "react";

export default function CardGroup(props) {
  const data = props.cardInfo.data;
  const date = props.cardInfo.date;

  return (
    <div>
      <div className="d-flex justify-content-around">
        {(data && date) ? data.map((d) => {
          return (
            <CartItem
              key={Math.random()}
              title={d.title}
              data={d.amount}
              date={date}
              description={d.description}
              type={d.type}
            />
          );
        }):null}
      </div>
    </div>
  );
};
