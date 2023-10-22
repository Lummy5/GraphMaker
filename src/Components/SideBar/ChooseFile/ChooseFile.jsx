import { ChangeEvent } from 'react';
import classes from './ChooseFile.module.css'

const ChooseFile = (props) => {

    return(
        <div className={classes.screen}>
        <p className={classes.textBold}>Choose the EXCEL file:</p>
        <input type="file" className={classes.ButtonChoose} 
        onChange={(event) => props.chosen(event)}
        />

      </div>
    )
}

export default ChooseFile;