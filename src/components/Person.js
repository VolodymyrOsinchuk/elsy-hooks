import React from 'react'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import { Box, Slider, Typography } from '@mui/material'

export default function Person({ min, max, steps, onChange, valuetext }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <DirectionsWalkIcon sx={{ fontSize: 100, color: 'black' }} />
      <Typography variant="h6">Steps: {steps}</Typography>
      <Box width={250}>
        <Slider
          min={min}
          max={max}
          value={steps}
          onChange={onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </Box>
    </Box>
  )
}
