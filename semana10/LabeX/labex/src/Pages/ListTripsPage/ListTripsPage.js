import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import '../ListTripsPage/ListTripsPage.css'
import axios from 'axios'
import {goToPage} from '../../routes/Coordinator'

const ListTripsPage = () => {
  const history = useHistory();

 /*  const [changePage, setChangePage]= useState(true)

  const mudaPagina = () =>{
    setChangePage(!changePage) */
  }

  const [trips, setTrips] = useState ([])
      
  useEffect(()=>{
    getTrips()
  },[])
  
  const getTrips = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trips')
    .then((res) =>{
      setTrips(res.data.trips)
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='mainContainerListTrips'>
      <h1>List Trips Pages</h1>

      <div className='containerListTrips'>
        {trips && <>{trips.map((trip)=>{
        
          return(
            <div className='boxListTrips'>                                                      
                {trip.name}
               <button onClick={() => goToPage(history, "/trips/details" )}> Detalhes da missão</button>                             
                                         
            </div>
            
          )
        })}</> }

      </div>
      
    </div>
  );
};

export default ListTripsPage;