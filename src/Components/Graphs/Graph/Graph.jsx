import classes from "./Graph.module.css"
import {  ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';

const Graph = (props) => {
    return (
        <div className={classes.Graph}>
            <h3>{props.name}</h3>
            <LineChart  width={600} height={300} data={props.data} >
            <Line type="monotone" dataKey={props.first} dot={false} stroke="#000000" strokeWidth={3} />
            <CartesianGrid stroke= "#000000" strokeDasharray="5 3"/>
            <XAxis  dataKey={props.second} />
            <YAxis  />
            <Tooltip content={<CustomTooltip labelX={props.second} labelY={props.first} />}/>
            <Legend />
            </LineChart>
        </div>
    )
}

export default Graph;