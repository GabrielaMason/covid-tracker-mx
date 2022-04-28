import React from 'react';
import {ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line, LineChart, BarChart} from "recharts";


//import Deaths from "./Deaths";
//import Vaccines from "./Vaccines";
//import Cases from "./AverageCases";

export default function Charts(props){


    const data = props.data[props.entidad]

    return(
        <React.Fragment>
            <ResponsiveContainer width={"95%"} height={300}>
                <BarChart
                    width={600}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 40,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" name="fecha"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar type="" name={props.name} barSize={10} dataKey={props.info} stroke="#8884d8"  />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>

    )
}



