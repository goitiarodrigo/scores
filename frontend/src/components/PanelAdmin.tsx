import { useEffect, useState } from "react"
import axios from 'axios'
import moment from 'moment'
moment.locale('es-mx')


interface IPLayer {
    name: string,
    tag: string,
    urlImage: string,
}

const URL = 'https://puntos-wilmar.herokuapp.com/api/'

const PanelAdmin = ({allPlayers}: any) => {
    const [player, setPlayer] = useState<IPLayer>({
        name: '',
        tag: '',
        urlImage: '',
    })
    const [choosePlayer, setChoosePlayer] = useState({name: 'Elegí un jugador'})
    const [chooseAction, setChooseAction] = useState({newPlayer: false, uploadInfo: false})
    const [stats, setStats] = useState({adr: 0, kdr: 0, score: 0, total: 0})
    const [id, setId] = useState<number | string>('')
   

    const handleNewPlayer = async () => {
        const response = await axios.post(`${URL}user/new-user`, player)
            if (response.data.success) setPlayer({
                name: '',
                tag: '',
                urlImage: '',
            })
    }

    const handleSetNewPlayer = () => {
        setChooseAction({uploadInfo: false, newPlayer: true})
        setChoosePlayer({name: 'Elegí un jugador'})
    }

    console.log(moment(new Date(Date.now())).format('dddd'))

    const handleChoosePlayer = (e: any) => {
        const {target: {value, selectedIndex, childNodes}} = e
        const idElement = childNodes[selectedIndex].getAttribute('id')
        setId(idElement)
        setChoosePlayer({name: value})
        setChooseAction({uploadInfo: true, newPlayer: false})
    }

    const handleSubmit = async () => {
        const { adr, kdr, score, total } = stats
        const subtotal = (adr >= 100 && kdr >= 0.90) ? 0.5 : (adr >= 100 && kdr >= 1.1) ? 1 : 0
        const date = new Date(Date.now()).toLocaleDateString()
        const uploadStat = await axios.put(`${URL}user/new-stat/${id}`, {totalScore: subtotal + parseInt(score.toString()), date})
         if (uploadStat.data.success) setStats({adr: 0, kdr: 0, score: 0, total: 0})
    }


    return (
        <div className="panel-admin">
            <div className="buttons">
                <button onClick={handleSetNewPlayer}>Nuevo jugador</button>
                <div className="player-profile">
                    <label>Jugador </label>
                    <select onChange={handleChoosePlayer}>
                        <option unselectable='on'>Seleccioná un jugador</option>
                        {allPlayers.map((element: any, index: number) => {
                        
                            return <option id={element._id} key={index+1}>{element.tag}</option>
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
                                    {/* <span>57</span> */}
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
                                <input autoComplete="off" type='number' name='adr' value={stats.adr} placeholder="ADR" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
                                <input autoComplete="off" type='number' name='kdr' value={stats.kdr} placeholder="KDR" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
                                <input autoComplete="off" type='number' name='score' value={stats.score} placeholder="Puntos" onChange={(e)=>setStats({...stats, [e.target.name]: e.target.value})}/>
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