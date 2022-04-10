import './App.css';
import PanelAdmin from './components/PanelAdmin';
import Score from './components/Score';

const App = () => {
  return (
    <div className='container'>
      <div className='tittle-container'>
        <div className='logo' style={{backgroundImage: 'url("https://files.antena2.com/antena2/public/2018-07/wilmar_barrios_boca_juniors_0_1_0.jpg")'}}></div>
        <div className='punctuation'>
          <h1>PUNTUACIONES</h1>
          <div><h3>Puntuación semanal</h3></div>
        </div>
      </div>
      <PanelAdmin />
    </div>
  )
}

export default App