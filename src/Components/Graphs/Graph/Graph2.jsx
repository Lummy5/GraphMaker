import classes from "./Graph.module.css"
import CustomTooltip from './CustomTooltip/CustomTooltip';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
const Graph = (props) => {
    const arrayColumn = (arr, n) => arr.map(x => x[n]);
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    var dps =[];
    const parseDataPoints = () => {
        for (var i = dps.length; i < arrayColumn(props.data, props.first).length; i++)
          dps.push({
            x:  (arrayColumn(props.data, props.second)[i]),
            y: (arrayColumn(props.data, props.first)[i])
          });
      };
    const options = {
        animationEnabled: true,
        backgroundColor: "white",
        title: {
            text: props.name
        },
        toolTip:{
            content: props.second + " : {x}, " + props.first +" : {y}"
        },
        axisY: {
            title: props.first,
        },
        axisX:{
            title: props.second,
        },
        data: [{
            type: "spline",
            showInLegend: true,
            legendText: props.first,
            dataPoints: dps
        }]
    }
    parseDataPoints();
    console.log(dps);
    return (
        <div className={classes.Graph}>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

    )
}

export default Graph;