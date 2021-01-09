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

export default function HeartRate (props) {
  const classes = useStyles();

  // console.log('HeartRate props', props)

  return (
    <div >
      <FavoriteIcon className={classes.icon}/>
      <p>{props.heart} BPM</p>
      <div className={classes.root}>
        <Slider 
           min={props.min}
           max={props.max}
           value={props.heart}
           onChange={props.onChange}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
           getAriaValueText={props.valuetext}
        />
      </div>
    </div>
  )
}