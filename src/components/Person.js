import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "black"
  },
}))

export default function Person (props) {
  const classes = useStyles();
  console.log('Props props', props)

  return (
    <div className="box">
      <DirectionsWalkIcon className={classes.icon}/>
      <p>Steps: {props.steps}</p>
    </div>
  )
}