import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Slider, Typography } from '@mui/material'

export default function HeartRate({ min, max, heart, onChange, valuetext }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <FavoriteIcon sx={{ fontSize: 100, color: 'red' }} />
      <Typography variant="h6">{heart} BPM</Typography>
      <Box width={250}>
        <Slider
          min={min}
          max={max}
          value={heart}
          onChange={onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </Box>
    </Box>
  )
}
