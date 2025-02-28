import React from 'react'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import { Box, Typography } from '@mui/material'

export default function Water({ water }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="11.8rem"
    >
      <LocalDrinkIcon sx={{ fontSize: 100, color: 'blue' }} />
      <Typography variant="h6">{water} L</Typography>
    </Box>
  )
}
