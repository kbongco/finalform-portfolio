import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UnderConstruction from './UnderConstruction'

export default function Projects(props) {
  let [underConstructionStatus, setUnderConstructionStatus ] = useState(true)
  return (
    <>
      {underConstructionStatus === true ? <UnderConstruction /> :
        <h1>Projects and things</h1>}
    </>
  )
}