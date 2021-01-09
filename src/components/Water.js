import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "blue"
  },
  root: {
    width: 'auto',
  },
}))

export default function Water (props) {
  const classes = useStyles();

  // console.log('Water props', props)

  return (
    <div >
      <LocalDrinkIcon className={classes.icon}/>
      <p>{props.water} L</p>
    </div>
  )
}