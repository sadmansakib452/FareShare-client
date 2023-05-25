import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout/Layout";
import Card from '../../components/Card/Card'
import classes from './Ride.module.css'
import VehicleData from './VehicleData'
import {Link, useNavigate } from 'react-router-dom'
import axios from "axios";
function Ride() {



  // --------------------Navigation start-----------------
  const navigate = useNavigate()
  // const location = useLocation()
  
  // const from = location.state || '/'
// --------------------Navigation end-----------------



const handleSearchResult = (carType) => {
  
  const token = localStorage.getItem('token')
  const type = carType === 'Bike' ? 'MOTORCYCLE' : carType.toUpperCase()
  
  axios.get(`http://localhost:5000/api/v1/users/rides/search/${type}`,{

    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>{
    const data = response.data
    
    navigate('/selectDriver',{state: {data}})
  })
  .catch((error)=>{
    alert(error)
  })

  console.log(type)
};




  return (
    <Layout>
      <div className={classes.main} >
        <Container > 
          <Row style={{height:'100vh'}} >
            <Col className="my-auto d-flex align-items-center justify-content-center gap-5" >
            
            {
                VehicleData.map((vehicle)=>{
                    return(
                        <button key={vehicle.id} onClick={()=>handleSearchResult(vehicle.transport)} >
                            <Card  image={vehicle.image} transport ={vehicle.transport}/>
                        </button>
                    )
                })
            }
            
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Ride;
