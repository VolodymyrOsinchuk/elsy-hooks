import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Person from "./components/Person";
import HeartRate from "./components/HeartRate";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
}));

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

export default function App () {
  const classes = useStyles();
  const [water, setWater] = useState(0);
  const [heart, setHeart] = useState(120);
  const [temperature, setTemperature] = useState(-10);
  const [steps, setSteps] = useState(3000);

  const onHeartChange = (event, newValue) => {
    console.log('>>>>>>onHeartChange', newValue)
    setHeart({
      heart: newValue
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <Person steps={steps}/>
          <HeartRate 
            min={MIN_HEART}
            max={MAX_HEART}
            heart={heart} 
            onChange={onHeartChange}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <HeartRate />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Person />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HeartRate />
        </Grid> */}
      </Grid>
    </div>
  )
}