import { useState } from "react"
import "../App.css"
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
        return (
          <div  key={index} className="row">
            <div className="ranking">
              <span>{index}</span>
            </div>
            <div className="userProfile">
              <div className='photoProfile' style={{backgroundImage: `url(${player.urlImage})`}}></div>
              <div className="userTag">
                <h3 onClick={() => handleClickOnUser(player._id)}>{player.tag}</h3>
                <p>{player.name}</p>
              </div>
            </div>
            <div className="score">
              {/* <span>{player.totalScore}</span> */}
            </div>
          </div>
        )
      })}
      {isOpenUser && <ModalUser setIsOpenUser={setIsOpenUser} allPlayers={allPlayers} id={id}  />}
    </div>
  )
}

export default Score