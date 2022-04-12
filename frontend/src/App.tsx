import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ModalLogin from './components/ModalLogin';
import PanelAdmin from './components/PanelAdmin';
import Score from './components/Score';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [allPlayers, setAllPlayers] = useState<any>([])
  const URL = 'https://puntos-wilmar.herokuapp.com/api/'
  const getUsers = async () => {
      const users = await axios.get(`${URL}user/get-users`)
      setAllPlayers(users.data.response)
  }

  useEffect(() => {
      getUsers()
  }, [])

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleLogOut = () => {
    setIsLogged(false)
  }

  return (
    <div className='container'>
      <div className='tittle-container'>
        <div className='logo' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
        <div className='tittle-button'>
          <div className='punctuation'>
            <h1>{isLogged ? 'ADMINISTRADOR' : 'PUNTUACIONES'}</h1>
            <div><h3>{isLogged ? 'Cargar nuevos stats' : 'Puntuación semanal'}</h3></div> 
          </div>
          {!isLogged ? <button onClick={handleOpenModal}><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 512 512"><path d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"/></svg></button>
          :
          <button onClick={handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30}><path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/></svg>
          </button>
          }
        </div>
      </div>
      
      {isLogged ? <PanelAdmin allPlayers={allPlayers} /> : <Score allPlayers={allPlayers} />}
      {isOpen && <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} setIsLogged={setIsLogged} />}
    </div>
  )
}

export default App