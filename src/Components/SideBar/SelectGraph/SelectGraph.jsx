import { ChangeEvent } from 'react';
import classes from './SelectGraph.module.css'

const SelectGraph = (props) => {

    
    let buttonShow = <div></div>;
    if(props.show){
       buttonShow = <button className={classes.ButtonChoose} onClick={() => {props.tggl()}}>Generate Graphs</button>
    }
    else{
        buttonShow = <div></div>;
    }




    return(
        <div className={classes.screen}>
            <h2>Select the Graph</h2>
            <ul className={classes.lista}>
                <li className={classes.item}>
                    <input className={classes.Margina} id='0' type='checkbox' 
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='prest'>Pressure(temperature)</label>
                </li>
                <li className={classes.item}>
                    <input className={classes.Margina} id='1' type='checkbox'
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='presh'>Pressure(altitude)</label>
                </li>
                <li className={classes.item}>
                    <input  className={classes.Margina} id='2'type='checkbox'
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='temph'>Temperature(altitude)</label>
                </li>
                <li className={classes.item}>
                    <input className={classes.Margina} id='3'type='checkbox'
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='tempp'>Temperature(pressure)</label>
                </li>
                <li className={classes.item}>
                    <input className={classes.Margina} id='4' type='checkbox'
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='hp'>Altitude(pressure)</label>
                </li>
                <li className={classes.item}>
                    <input className={classes.Margina} id='5' type='checkbox'
                    onChange={(event) => props.changeCheckedGraphs(event)}></input>
                    <label htmlFor='htemp'>Altitude(temperature)</label>
                </li>
            </ul>
            {buttonShow}
        </div>
    )
}
export default SelectGraph;