import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({image, transport}) {
  return (
    <Card sx={{ maxWidth: 345, p:3 }}>
      <CardMedia
        component="img"
        alt={transport}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {transport}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}