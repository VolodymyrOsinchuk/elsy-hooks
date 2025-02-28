import React, { useState } from 'react'
import { Box, Slider, Typography } from '@mui/material'

function valuetext(value) {
  return `${value}°C`
}

export default function RangeSlider({
  min = -20,
  max = 40,
  label = 'Temperature',
}) {
  const [value, setValue] = useState(20)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <Box width={300} textAlign="center">
      <Typography variant="h6">{label}</Typography>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Typography>{value}°C</Typography>
    </Box>
  )
}
