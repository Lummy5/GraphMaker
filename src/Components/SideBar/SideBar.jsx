import SelectGraph from "./SelectGraph/SelectGraph";
import ChooseFile from "./ChooseFile/ChooseFile";
import { ChangeEvent } from "react";
import classes from './SideBar.module.css'


const SideBar = (props) => {
    return(
        <div className={classes.Side}>
            <ChooseFile chosen={props.chosen}/>
            <SelectGraph 
                tggl={props.tggl} 
                show={props.showGenerate}
                changeCheckedGraphs={props.changeCheckedGraphs}
            />
        </div>
    );
}

export default SideBar;