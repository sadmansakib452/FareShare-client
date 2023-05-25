import React from 'react'
import Layout from '../../components/Layout/Layout'

import {useLocation, useNavigate} from 'react-router-dom'

export default function Example() {
    const location = useLocation()
    const rideStatus = location.state.data
    console.log(location.state.data)
    return (
      <Layout className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                <ul>
                    <li>Ride Status: {rideStatus.status}</li>
                    <li> From: {rideStatus.startLocation}</li>
                    <li> Destination: {rideStatus.endLocation}</li>
                    <li> Driver ID: {rideStatus.driverId}</li>
                </ul>
              </p>
            </blockquote>
            
          </figure>
        </div>
      </Layout>
    )
  }
  