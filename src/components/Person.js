import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "black"
  },
  root: {
    width: 'auto',
  },
}))

export default function Person (props) {
  const classes = useStyles();

  // console.log('Props props', props)

  return (
    <div >
      <DirectionsWalkIcon className={classes.icon}/>
      <p>Steps: {props.steps}</p>
      <div className={classes.root}>
        <Slider 
           min={props.min}
           max={props.max}
           value={props.steps}
           onChange={props.onChange}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
           getAriaValueText={props.valuetext}
        />
      </div>
    </div>
  )
}