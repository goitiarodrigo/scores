import { useState } from "react"
import "../App.css"
import CardPlayer from "./CardPlayer"
import ModalUser from "./ModalUser"

const Score = ({allPlayers}: any) => {
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [id, setId] = useState('')

  const handleClickOnUser = (value: string) => {
    setIsOpenUser(true)
    setId(value)
  }

 


  return (
    <div className="score-container">
      <div className="header">
        <span>POSICIÓN</span>
        <span>NOMBRE</span>
        <span>PUNTOS</span>
      </div>

      {allPlayers.length > 0 && allPlayers.map((player: any, index: number) => {
        return <CardPlayer key={index} handleClickOnUser={handleClickOnUser} index={index + 1} player={player}/>
      })}
      {isOpenUser && <ModalUser setIsOpenUser={setIsOpenUser} allPlayers={allPlayers} id={id}  />}
    </div>
  )
}

export default Score