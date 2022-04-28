import React from "react";
import {
  ComposedChart,
  Bar,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/*const Cases = (props) => {
  const averageSevenDays = (array, p) => {
    return Math.round(
      (array[p - 6].newInfected +
        array[p - 5].newInfected +
        array[p - 4].newInfected +
        array[p - 3].newInfected +
        array[p - 2].newInfected +
        array[p - 1].newInfected +
        array[p - 0].newInfected) /
        7
    );
  };

  const DATA = [];
  for (let i = 6; i < props.data.length; i++) {
    DATA.push({
      average: averageSevenDays(props.data, i),
      date: props.data[i].date,
      newInfected: props.data[i].newInfected
    });
  }

  //console.log(DATA);

  return (
    <div>
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={DATA}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="newInfected" barSize={20} fill="#7CC9F9" name="Nuevos infectados"/>
            <Line type="monotone" dataKey="average" stroke="#ff7300" dot={false} name="Promedio ultimos 30 dias"/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Cases;*/