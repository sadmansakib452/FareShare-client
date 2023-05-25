import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfilePic from '../../assets/Driversvg.svg'
import {useNavigate} from 'react-router-dom'
export default function ImgMediaCard({id, name, email, phone, vehicle}) {
    const navigate = useNavigate()
    console.log(id)
    const handleDriverCard = () =>{
        console.log(id)
        navigate('/createRide',{state: {id}})
    }
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ProfilePic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Vehicle Type: {vehicle.type} </li>
            <li>Vehicle Model: {vehicle.model} </li>
            <li>License Plate: {vehicle.licensePlate} </li>
            
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDriverCard} size="small">Select</Button>
        
      </CardActions>
    </Card>
  );
}
