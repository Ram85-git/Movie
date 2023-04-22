import './App.css'
import Header from './components/Header';
import Mov from './components/Mov';
import Movs from './Movs.json';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        {
          Movs.map((element) =>{
            return (
            <Mov
            title={element.Title}
            // year={element.Year}
            img={element.Poster}
            
            />
            )
          })
        }
      
      </div>

    </div>
  );
}

export default App;
