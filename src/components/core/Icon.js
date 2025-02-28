import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Typography } from '@mui/material'

export default function Icon({ heart }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="box"
    >
      <FavoriteIcon sx={{ fontSize: 100, color: 'red' }} />
      <Typography variant="h6">{heart} bpm</Typography>
    </Box>
  )
}
