import React, {useState, useEffect} from "react";
import '../ListTripsPage/ListTripsPage.css'
import axios from 'axios'
import {goToPage} from '../../routes/Coordinator'

const ListTripsPage = () => {
  

  const [listTrips, setListTrips] = useState ()
  const [tripsDetails, setTripsDetails] = useState ({})
  const [goToDetails, setGoToDetails] = useState(false)
  const [aprovados, setAprovados] = useState({})
  const [candidato, setCandidato] =useState()
  const [tripId, setTripId] = useState()
 
  useEffect(()=>{
    getTrips()
  },[])
  console.log("Candidatos",tripsDetails.candidates)

  const goToListTrip = () =>{
    setGoToDetails(false)
  }

 
  const getTrips = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trips')
    .then((res) =>{
      setListTrips(res.data.trips)
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const getTripsDetails = (tripId) =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trip/${tripId}`,{
      headers: {auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBubXdySGdEZFJLRzRqbkdzWVJoIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTI0NzI1NjF9.1vAMJ4Fy5ZSUfQPOdh7Q4vqPBG5GK76dFMy74eZT7qk"}
    })
    .then((res) =>{
      
      setTripsDetails(res.data.trip)
      setGoToDetails(true)
      setTripId(tripId)     
    })
    .catch((err)=>{         
    })
  }

  const approved = (candidatoid, value) =>{
    const body = {
      approve: value
    } 
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trips/${tripId}/candidates/${candidatoid}/decide`,body,{
      headers: {auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBubXdySGdEZFJLRzRqbkdzWVJoIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTI0NzI1NjF9.1vAMJ4Fy5ZSUfQPOdh7Q4vqPBG5GK76dFMy74eZT7qk"}
    })
    .then((res) =>{
      getTripsDetails(tripId)
      if(value){
        alert("Candidato aprovado, boa sorte")
      } else{
        alert("Candidato Reprovado")
      }
      
    })
    .catch((err) =>{
      
    }) 
  }

  const candidates = tripsDetails.candidates &&  tripsDetails.candidates.map((candidato)=>{
    return(
      <div>
        <p>{candidato.name}</p>
        <button onClick={() => approved(candidato.id, true)}>Aprovado</button>
        <button onClick={() => approved(candidato.id, false)}>Reprovado</button>
      </div>
    )
  })
  
   const approvedCandidate =  tripsDetails.approved && tripsDetails.approved.map((candidato)=>{
     return(
       <div>
         <p>{candidato.name}</p>
       </div>
     )
   })


  const tripDetailsList = listTrips && <>{listTrips.map((trip) =>{
    
    return(
      <div className='mainContainerListTrips'>
        <div>
          <h4>Nome da missão:</h4>
        </div>
        <div className='boxMission'>
          {trip.name}      
        </div>
         <div>
          <button onClick={()=>getTripsDetails(trip.id)}>Ver detalhes</button>
        </div>
        
      </div>
    )
  })}</>


   return (
    <div className='mainContainerListTrips'>
      
      <div>
        {goToDetails ?
        <>
        <h1>Detalhes da missão</h1>
          <div className='containerListTrips'>
            <div>
              <h5>Nome da missão:</h5> 
              <p>{tripsDetails.name}</p>
            </div>        
            <div>
              <h5>Planeta:</h5>
              <p>{tripsDetails.planet}</p>
            </div>
            <div>
              <h5>Duração em dias:</h5>
              <p>{tripsDetails.durationInDays}</p>
            </div>
            <div>
              <h5>Data de lançamento:</h5> 
              <p>{tripsDetails.date}</p>
            </div>
            <div>
              <h5>Descrição:</h5> 
              <p>{tripsDetails.description}</p>
            </div>
          </div>
          <div>
          <button onClick={goToListTrip}>Voltar</button>
          </div>                                                    
          </> :
          <>
          {tripDetailsList}
          </>
        }
      </div>
      <div>
        {candidates}
        </div>

        <div>
          {/* {approvedCandidate} */}
        </div>
          
    </div>
  )}; 

export default ListTripsPage;