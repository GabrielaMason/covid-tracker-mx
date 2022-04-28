import React from 'react';
import {ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line, LineChart} from "recharts";


//import Deaths from "./Deaths";
//import Vaccines from "./Vaccines";
//import Cases from "./AverageCases";

export default function Charts(props){


    const data = props.data["MEXICO PAIS"]
    console.log(data)
    const info = props.info




    return(
        <React.Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="nuevos casos" name="nuevos casos" dataKey={info} stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>

    )
}



