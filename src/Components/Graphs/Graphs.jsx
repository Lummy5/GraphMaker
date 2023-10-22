import classes from './Graphs.module.css'


import Graph from './Graph/Graph'

const Graphs = (props) =>{
    const ptGraph = (
      <Graph 
      name={"Pressure(temperature)"} 
      first={"pressure (hPa)"} 
      second={"temperature (°C)"} 
      data={props.data}/>
    );
    const phGraph = (
      <Graph 
      name={"Pressure(altitude)"} 
      first={"pressure (hPa)"} 
      second={"altitude (m)"} 
      data={props.data}/>
    );
    const thGraph = (
      <Graph 
      name={"Temperature(altitude)"} 
      first={"temperature (°C)"} 
      second={"altitude (m)"} 
      data={props.data}/>
    );
    const tpGraph = (
      <Graph 
      name={"Temperature(pressure)"} 
      first={"temperature (°C)"} 
      second={"pressure (hPa)"} 
      data={props.data}/>
    );
    const hpGraph = (
      <Graph 
      name={"Altitude(pressure)"} 
      first={"altitude (m)"} 
      second={"pressure (hPa)"} 
      data={props.data}/>
    );
    const htGraph = (
      <Graph 
      name={"Altitude(temperature)"} 
      first={"altitude (m)"} 
      second={"temperature (°C)"} 
      data={props.data}/>
    );
      const list = [ptGraph, phGraph, thGraph, tpGraph, hpGraph, htGraph];
      const showlist = props.showCheckedGraphs.reduce((acc, x, idx) => x ? [...acc, list[idx]] : acc, []);
    return(
        <div className={classes.Box}>
          {showlist.map((elem, index) => (
              <div key={index}>{elem}</div>
          ))}
        </div>
    )
}

export default Graphs;  