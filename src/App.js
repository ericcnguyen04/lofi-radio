import logo from './logo.svg';
import './App.css';

function App() {

 const handlePlay = () => {
  console.log('play')
 }

  return (
    <div className="App">
     <button onClick={handlePlay}>play</button>
    </div>
  );
}

export default App;
