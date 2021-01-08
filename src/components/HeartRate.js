import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "red"
  },
  root: {
    width: 'auto',
  },
}))

function valuetext(value) {
  return `${value}°C`;
}

export default function HeartRate (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0]);

  console.log('HeartRate props', props)

  const onHeartChange = (event, newValue) => {
    console.log('>>>>>>onHeartChange', newValue)
    setValue({
      heart: newValue
    });
  };

  return (
    <div className="box">
      <FavoriteIcon className={classes.icon}/>
      <p>{props.heart} BPM</p>
      <div className={classes.root}>
        <Slider 
           min={props.min}
           max={props.max}
           value={value}
           onChange={onHeartChange}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
           getAriaValueText={valuetext}/>
      </div>
    </div>
  )
}