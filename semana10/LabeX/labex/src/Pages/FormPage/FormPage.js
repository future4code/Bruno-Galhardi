import React, {useState, useEffect} from "react";
/* import { useHistory } from 'react-router-dom' */
import axios from "axios";
import useForm from '../../Hooks/useForm'
import '../FormPage/FormPage.css'


const FormPage = () => {
  /* const history = useHistory(); */

  const [form, onChange,clearFields] = useForm({
      name:'',
      age:'',
      applicationText:'',
      profession:'',
      country:'',
  })

  const [trips, setTrips] = useState ()
  const [idTrip, setIdTrip] = useState()

  const onChangeTrips = (e) =>{
      setIdTrip(e.target.value)
  }

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

  const onClickButton = (event, tripId)=>{
    event.preventDefault()
    
    clearFields()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trips/${idTrip}/apply`,form)
    .then((res) =>{
     alert('Sucesso ')
    })
    .catch((err) =>{
      alert("erro ao se cadastrar")
    })
    
  }

  return (
    <div className='mainContainerForm'>
      <h1>Preencha o formulário a seguir:</h1>
        <div className='containerForm'>
            <form onSubmit={onClickButton}>
              <div className='boxForm'>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={"Nome"}
                  required
                  pattern={"^.{3,}"}
                  title={"O nome deve ter no mínimo 3 caracteres"}
                />
              </div>
              <div className='boxForm'>
              <input
                name="age"
                value={form.age}
                onChange={onChange}
                placeholder={"Idade"}
                required
                type="number"
                min={18}
              />
              </div>
              <div className='boxForm'>
                <input
                  name="applicationText"
                  value={form.applicationText}
                  onChange={onChange}
                  placeholder={"Motivos para ir?"}
                  required
                  type="text"
                  pattern={"^.{30,}"}
                />
              </div>
              <div className='boxForm'>
                <input
                  name="profession"
                  value={form.profession}
                  onChange={onChange}
                  placeholder={"Profissão"}
                  required
                  type="text"
                  pattern={"^.{3,}"}
                />
              </div>
              <div className='boxForm'>
                <input
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  placeholder={"País"}
                  required
                  type="text"
                />
              </div>
              <div className='boxForm'>

                <select
                  name='trips'
                  onChange={onChangeTrips}
                  value={idTrip}                   
                >
                  {trips && <>{trips.map((trip)=>{
                    return(
                      <option value={trip.id}> {trip.name} </option>
                    )
                  })}</> }  
                </select>
              </div>

              <button>Aplicar a viagem</button>
        
          </form>
      </div>

      
    </div>
  );
};

export default FormPage;