import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "yellow"
  },
  root: {
    width: 'auto',
  },
}))

export default function Temperature (props) {
  const classes = useStyles();

  // console.log('Temperature props', props)

  return (
    <div >
      <WbSunnyIcon className={classes.icon}/>
      <p>{props.temperature} °C</p>
      <div className={classes.root}>
        <Slider 
           min={props.min}
           max={props.max}
           value={props.temperature}
           onChange={props.onChange}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
           getAriaValueText={props.valuetext}
        />
      </div>
    </div>
  )
}