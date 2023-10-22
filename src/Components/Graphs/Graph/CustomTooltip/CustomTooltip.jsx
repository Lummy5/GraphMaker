import classes from './CustomTooltip.module.css'

const CustomTooltip = ({ active, payload, label, labelX, labelY }) => {
    if (active && payload && payload.length) {
      return (
        <div className={classes.customTooltip}>
          <p className={classes.Text}>{`${labelX} ${label}`} </p>
          <p className={classes.Text}>{` ${labelY} ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  export default CustomTooltip