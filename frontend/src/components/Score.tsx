import "../App.css"


const Score = ({allPlayers}: any) => {
  return (
    <div className="score-container">
      <div className="header">
        <span>POSICIÓN</span>
        <span>NOMBRE</span>
        <span>PUNTOS</span>
      </div>

      {allPlayers.map((player: any, index: number) => {
        return (
          <div key={index} className="row">
            <div className="ranking">
              <span>{index}</span>
            </div>
            <div className="userProfile">
              <div className='photoProfile' style={{backgroundImage: `url(${player.urlImage})`}}></div>
              <div>
                <h3>{player.tag}</h3>
                <p>{player.name}</p>
              </div>
            </div>
            <div className="score">
              <span>{player.totalScore}</span>
            </div>
          </div>
        )
      })}

      

      {/* <div className="row">
        <div className="ranking">
          <span>2</span>
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

      <div className="row">
        <div className="ranking">
          <span>3</span>
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

      <div className="row">
        <div className="ranking">
          <span>4</span>
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

      <div className="row">
        <div className="ranking">
          <span>5</span>
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

      <div className="row">
        <div className="ranking">
          <span>5</span>
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
      </div> */}
    </div>
  )
}

export default Score