import React from 'react'
import Layout from '../../components/Layout/Layout'
import CreateRideForm from './CreateRideForm'
import {useLocation, useNavigate} from 'react-router-dom'
function CreateRide() {

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location.state)
  return (
    <Layout>

        <CreateRideForm navigate={navigate} driverId = {location.state.id}/>

    </Layout>
  )
}

export default CreateRide