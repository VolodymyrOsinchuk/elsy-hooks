import React, { useState } from 'react'
import { Box, Container, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import Person from './components/Person'
import HeartRate from './components/HeartRate'
import Water from './components/Water'
import Temperature from './components/Temperature'

const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

export default function App() {
  const [water, setWater] = useState(1.5)
  const [heart, setHeart] = useState(120)
  const [temperature, setTemperature] = useState(-10)
  const [steps, setSteps] = useState(3000)

  const calculateWater = (heart, temperature, steps) => {
    let waterAmount = 1.5

    if (temperature > 20) {
      waterAmount += (temperature - 20) * 0.02
    }
    if (steps > 10000) {
      waterAmount += (steps - 10000) * 0.00002
    }
    if (heart > 120) {
      waterAmount += (heart - 120) * 0.0008
    }
    return Math.round(waterAmount * 100) / 100
  }

  const handleHeartChange = (_, newValue) => {
    setHeart(newValue)
    setWater(calculateWater(newValue, temperature, steps))
  }

  const handleStepsChange = (_, newValue) => {
    setSteps(newValue)
    setWater(calculateWater(heart, temperature, newValue))
  }

  const handleTempChange = (_, newValue) => {
    setTemperature(newValue)
    setWater(calculateWater(heart, newValue, steps))
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Health Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" textAlign="center">
                  Water Intake
                </Typography>
                <Water water={water} />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" textAlign="center">
                  Steps
                </Typography>
                <Person
                  min={MIN_STEPS}
                  max={MAX_STEPS}
                  value={steps}
                  onChange={handleStepsChange}
                />
                <Typography>{steps} steps</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" textAlign="center">
                  Heart Rate
                </Typography>
                <HeartRate
                  min={MIN_HEART}
                  max={MAX_HEART}
                  value={heart}
                  onChange={handleHeartChange}
                />
                <Typography>{heart} bpm</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" textAlign="center">
                  Temperature
                </Typography>
                <Temperature
                  min={MIN_TEMPERATURE}
                  max={MAX_TEMPERATURE}
                  value={temperature}
                  onChange={handleTempChange}
                />
                <Typography>{temperature}°C</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
