import classes from './Graphs.module.css'


import Graph from './Graph/Graph'
import Graph2 from './Graph/Graph2'

const Graphs = (props) =>{
    // console.log(props.data[0]["Lambda(med)"]  );
    const ptGraph = (
      <Graph2 
      name={"P/P0(T/T0)"} 
      first={"P/P0"} 
      second={"T/T0"} 
      data={props.data}/>
    );
    const phGraph = (
      <Graph2 
      name={"((P/P0)^(1/λmed))(T/T0)"} 
      first={"(P/P0)^(1/Lambda(med))"} 
      second={"T/T0"} 
      data={props.data}/>
    );
    const thGraph = (
      <Graph2 
      name={"Temperature(altitude)"} 
      first={"Temperature (K)"} 
      second={"Altitude (m)"} 
      data={props.data}/>
    );
    const tpGraph = (
      <Graph2 
      name={"Altitude(temperature)"} 
      first={"Altitude (m)"} 
      second={"Temperature (K)"} 
      data={props.data}/>
    );
    const hpGraph = (
      <Graph2 
      name={"Pressure(altitude)"} 
      first={"Pressure (Pa)"} 
      second={"Altitude (m)"} 
      data={props.data}/>
    );
    const htGraph = (
      <Graph2 
      name={"Altitude(pressure)"} 
      first={"Altitude (m)"} 
      second={"Pressure (Pa)"} 
      data={props.data}/>
    );
      const list = [ptGraph, phGraph, thGraph, tpGraph, hpGraph, htGraph];
      const showlist = props.showCheckedGraphs.reduce((acc, x, idx) => x ? [...acc, list[idx]] : acc, []);
    return(
      <div className={classes.Box2}>
        <h2 className={classes.h2}>Constante:</h2>
        <div className={classes.Above}>
          
            <p className={classes.Constant}>λ<sub>med</sub> = {props.data[0]["Lambda(med)"]} </p> 
            <p className={classes.Constant}>Δλ<sub>med</sub> = {props.data[0]["DeltaLambda(med)"]} </p> 
            <p className={classes.Constant}>µ<sub>med</sub> = {props.data[0]["Miu"]} </p> 
          </div>
        <div className={classes.Box} >
          {showlist.map((elem, index) => (
              <div key={index}>{elem}</div>
          ))}
        </div>

      </div>
    )
}

export default Graphs;  