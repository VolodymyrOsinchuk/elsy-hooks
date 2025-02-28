import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Box, Slider, Typography } from '@mui/material'

export default function Temperature({
  min,
  max,
  temperature,
  onChange,
  valuetext,
}) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <WbSunnyIcon sx={{ fontSize: 100, color: 'yellow' }} />
      <Typography variant="h6">{temperature} °C</Typography>
      <Box width={250}>
        <Slider
          min={min}
          max={max}
          value={temperature}
          onChange={onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </Box>
    </Box>
  )
}
