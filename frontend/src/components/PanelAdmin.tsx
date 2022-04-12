import { useEffect, useState } from "react"
import axios from 'axios'

interface IPLayer {
    name: string,
    tag: string,
    urlImage: string,
}

const PanelAdmin = ({allPlayers}: any) => {
    const [player, setPlayer] = useState<IPLayer>({
        name: '',
        tag: '',
        urlImage: '',
    })

    const URL = 'https://puntos-wilmar.herokuapp.com/api/'

    const [choosePlayer, setChoosePlayer] = useState({name: 'Elegí un jugador'})
    const [chooseAction, setChooseAction] = useState({newPlayer: false, uploadInfo: false})
    const [stats, setStats] = useState({adr: 0, kdr: 0, score: 0, total: 0})
    const [id, setId] = useState<number | string>('')
   

    const handleNewPlayer = async () => {
        console.log(player)
        const requestOption: any = {
            body: JSON.stringify(player),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                
            },

        }
        setChooseAction({uploadInfo: false, newPlayer: true})
        setChoosePlayer({name: 'Elegí un jugador'})
        const response = await axios.put(`${URL}user/new-user`, player)
        
    }

    const handleChoosePlayer = (e: any) => {
        const {target: {value}} = e
        setChoosePlayer({name: value})
        setChooseAction({uploadInfo: true, newPlayer: false})
    }

    const handleSubmit = async () => {
        const { adr, kdr, score, total } = stats
        const subtotal = (adr >= 100 && kdr >= 0.90) ? 0.5 : (adr >= 100 && kdr >= 1.1) ? 1 : 0
        const uploadStat = await axios.post(`${URL}user/new-stat/${id}`, {totalScore: subtotal + score})
        console.log(uploadStat)
    }

    return (
        <div className="panel-admin">
            <div className="buttons">
                <button onClick={handleNewPlayer}>Nuevo jugador</button>
                <div className="player-profile">
                    <label>Jugador </label>
                    <select onChange={handleChoosePlayer}>
                        <option>Seleccioná un jugador</option>
                        {allPlayers.map((element: any, index: number) => {
                        
                            return <option onClick={() => setId(element._id)} key={index}>{element.tag}</option>
                        })}
                    </select>

                    <p>{choosePlayer.name}</p>
                </div>
            </div>

            <div className="players-container">
                <div className="players">
                    {allPlayers.map((player: any, index: number) => {
                        return (
                            <div key={index} className="row-player">
                                <div className="ranking">
                                    <span>1</span>
                                </div>
                                <div className="userProfile">
                                    <div className='photoProfile' style={{backgroundImage: `url(${player.urlImage})`}}></div>
                                    <div>
                                        <h3>{player.tag}</h3>
                                        <p>{player.name}</p>
                                    </div>
                                </div>
                                <div className="score">
                                    <span>57</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {
                    chooseAction.newPlayer ?
                    <div className="newPlayer-container">
                        <div className="form-container">
                            <input autoComplete="off" type='text' name='name' value={player.name} placeholder="Nombre y apellido" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>
                            <input autoComplete="off" type='text' name='tag' value={player.tag} placeholder="Tag" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>
                            <input autoComplete="off" type='text' name='urlImage' value={player.urlImage} placeholder="Url de imágen" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>

                            <button onClick={handleNewPlayer}>Subir nuevo jugador</button>
                        </div>
                    </div>
                    :
                    chooseAction.uploadInfo &&
                    <div className="uploadStats-container">
                        <div className="stats">
                            <span>{choosePlayer.name}</span>
                            <div className="form-container">
                                <input autoComplete="off" type='text' name='adr' placeholder="ADR" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
                                <input autoComplete="off" type='text' name='kdr' placeholder="KDR" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
                                <input autoComplete="off" type='text' name='score' placeholder="Puntos" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
                                <div className="scoreTotal-container">
                                    <span>{stats.total}</span> 
                                    {stats.total > 0 && <button className="edit-button">Editar</button>}
                                </div>
                                <button onClick={handleSubmit}>Subir nuevo stat</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default PanelAdmin