import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 100,
    color: "red"
  },
}))

export default function Icon (props) {
  const classes = useStyles();
  console.log('Icon props', props)

  return (
    <div className="box">
      <FavoriteIcon className={classes.icon}/>
      <p>{props.heart}</p>
    </div>
  )
}