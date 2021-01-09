import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Person from "./components/Person";
import HeartRate from "./components/HeartRate";
import Water from "./components/Water";
import Temperature from "./components/Temperature";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const [water, setWater] = useState(1.5);
  const [heart, setHeart] = useState(120);
  const [temperature, setTemperature] = useState(-10);
  const [steps, setSteps] = useState(3000);

  function valuetext(value) {
    return `${value}°C`;
  }

  const onHeartChange = (newValue) => {
    console.log('>>>>>>onHeartChange', newValue);
    const water = calculateWater({
      heart: newValue
    })
    setHeart(newValue, water);
    setWater(water);
    console.log('water heart >>>>', water)
  };

  const onStepsChange = (newValue) => {
    console.log('>>>>>>onStepsChange', newValue)
    const water = calculateWater({
      steps: newValue
    })
    setSteps(newValue, water);
    setWater(water);
    console.log('water steps >>>>', water)
  };

  const onTempChange = (newValue) => {
    console.log('onTempChange >>>>', newValue);
    const water = calculateWater({
      temperature: temperature
    })
    setTemperature(newValue, water);
    setWater(water);
    console.log('water temperature >>>>', water)
  };

  const calculateWater = ({ 
    heart, 
    temperature, 
    steps} = {}) => {
    console.log('calculateWater >>>>');
    // console.log('heart calculateWater >>>>', heart);
    // console.log('temperature calculateWater >>>>', temperature);
    // console.log('steps calculateWater >>>>', steps);

    let water = 1.5;

    if (temperature > 20) {
      water += 1.5 + (temperature - 20) * 0.02;
    };

    if (steps > 10000) {
      water += 1.5 + (steps - 10000) * 0.00002;
    };

    if (heart > 120) {
      water += 1.5 + (heart - 120) * 0.0008;
    };

    water = parseInt(Math.round(water * 100)) / 100;

    return water;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={6} sm={3} className="box">
          <Water 
            water={water} 
          />
        </Grid>
        <Grid item xs={6} sm={3} className="box">
          <Person 
            min={MIN_STEPS}
            max={MAX_STEPS}
            steps={steps}
            onChange={onStepsChange}
            getAriaValueText={valuetext}
          />
        </Grid>
        <Grid item xs={6} sm={3} className="box">
          <HeartRate 
            min={MIN_HEART}
            max={MAX_HEART}
            heart={heart} 
            onChange={onHeartChange}
           getAriaValueText={valuetext}
          />
        </Grid>
        <Grid item xs={6} sm={3} className="box">
          <Temperature 
            min={MIN_TEMPERATURE}
            max={MAX_TEMPERATURE}
            temperature={temperature}
            onChange={onTempChange}
           getAriaValueText={valuetext}
          />
        </Grid>
      </Grid>
    </div>
  )
}