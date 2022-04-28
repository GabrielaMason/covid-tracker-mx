import React from 'react';
import {ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line, LineChart, BarChart} from "recharts";


//import Deaths from "./Deaths";
//import Vaccines from "./Vaccines";
//import Cases from "./AverageCases";

export default function Charts(props){


    const data = props.data[props.entidad]




    return(
        <React.Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={600}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" name="fecha"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar type="" name={props.name} dataKey={props.info} stroke="#8884d8"  />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>

    )
}



