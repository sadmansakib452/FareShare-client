import {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from 'react-router-dom';
 import CreateRideForm from './CreateRideForm'
 import DriverCard from './DriverCard'
 import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function SelectDriver() {


    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state.data[0]._id)


  
  return (
    <Layout>
        
        <div >
        <Container > 
          <Row style={{height:'100vh'}} >
            <Col className="my-auto d-flex align-items-center justify-content-center gap-5" >
            
            {
              location.state.data.map((driver)=>{
                return(
                    
                        <DriverCard key={driver._id} id={driver._id} email = {driver.email} name = {driver.name} phone = {driver.phone}
                            vehicle = {driver.vehicle}
                        />
                    
                )
            }) 
            }
            
            </Col>
          </Row>
        </Container>
      </div>
    {/* <CreateRideForm/> */}
    </Layout>
  )
}

export default SelectDriver