import classes from "./Graph.module.css"
import {  ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
const Graph = (props) => {
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    
    console.log(arrayColumn(props.data, "Pressure (Pa)"));
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    var dataPoints =[];
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Growth of Photovoltaics"
        },
        axisY: {
            title: "Capacity (in MWp)",
            logarithmic: true
        },
        data: [{
            type: "spline",
            showInLegend: true,
            legendText: "MWp = one megawatt peak",
            dataPoints: dps
        }]
    }
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
            <div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

        </div>
    )
}

export default Graph;