
interface IPlayer {
    name: string, 
    tag: string,
    urlImage: string,
    totalScore: any[],
    _id: string
}

interface IProps {
    player: IPlayer,
    index: number,
    isLogged?: boolean,
    handleClickOnUser?: (value: string) => void
}

const CardPlayer = ({player, index, isLogged, handleClickOnUser} : IProps) => {
    let sum = 0
    sum = player.totalScore !== undefined ? 
     player.totalScore.reduce((acc, currentValue) => acc + currentValue.score, 0) : 0

    return (
        <div className="row-player">
            <div className="ranking">
                <span>{index}</span>
            </div>
            <div className="userProfile">
                {!isLogged && <div className='photoProfile' style={{backgroundImage: `url(${player.urlImage})`}}></div>}
                <div>
                    <h3 className="tag-player" onClick={() => handleClickOnUser!(player._id)}>{player.tag}</h3>
                    <p>{player.name}</p>
                </div>
            </div>
            <div className="score">
                <p>{isLogged !== undefined && sum}</p>
            </div>
        </div>
    )
}

export default CardPlayer