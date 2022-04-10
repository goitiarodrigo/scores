import { useState } from "react"

interface IPLayer {
    name: string,
    tag: string,
    image: string,
}

const PanelAdmin = () => {
    const [player, setPlayer] = useState<IPLayer>({
        name: '',
        tag: '',
        image: '',
    })

    const [choosePlayer, setChoosePlayer] = useState({name: 'Elegí un jugador'})
    const [chooseAction, setChooseAction] = useState({newPlayer: false, uploadInfo: false})
    const [stats, setStats] = useState({adr: 0, kdr: 0, score: 0, total: 1})


    const handleNewPlayer = () => {
        setChooseAction({uploadInfo: false, newPlayer: true})
        setChoosePlayer({name: 'Elegí un jugador'})
    }

    const handleChoosePlayer = (e: any) => {
        const {target: {value}} = e
        setChoosePlayer({name: value})
        setChooseAction({uploadInfo: true, newPlayer: false})
    }

    const handleSubmit = () => {
        const { adr, kdr, score, total } = stats
        const subtotal = (adr >= 100 && kdr >= 0.90) ? 0.5 : (adr >= 100 && kdr >= 1.1) ? 1 : 0
        

    }

    return (
        <div className="panel-admin">
            <div className="buttons">
                <button onClick={handleNewPlayer}>Nuevo jugador</button>
                <div className="player-profile">
                    <label>Jugador </label>
                    <select onChange={handleChoosePlayer}>
                        <option>Nombre</option>
                        <option>Nombre</option>
                        <option>Nombre</option>
                        <option>Nombre</option>
                        <option>Nombre</option>
                    </select>

                    <p>{choosePlayer.name}</p>
                </div>
            </div>

            <div className="players-container">
                <div className="players">
                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>

                    <div className="row-player">
                        <div className="ranking">
                            <span>1</span>
                        </div>
                        <div className="userProfile">
                            <div className='photoProfile' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
                            <div>
                                <h3>Killermeister</h3>
                                <p>Rodrigo Goitia</p>
                            </div>
                        </div>
                        <div className="score">
                            <span>57</span>
                        </div>
                    </div>
                </div>

                {
                    chooseAction.newPlayer ?
                    <div className="newPlayer-container">
                        <div className="form-container">
                            <input autoComplete="off" type='text' name='name' value={player.name} placeholder="Nombre y apellido" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>
                            <input autoComplete="off" type='text' name='tag' value={player.tag} placeholder="Tag" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>
                            <input autoComplete="off" type='text' name='image' value={player.image} placeholder="Url de imágen" onChange={(e)=>setPlayer({...player, [e.target.name]: e.target.value})}/>

                            <button>Subir nuevo jugador</button>
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