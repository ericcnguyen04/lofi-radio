import logo from './logo.svg';
import './App.css';

function App() {

 const handlePlay = () => {
  console.log('play')
 }
 const handleStop = () => {
  console.log('play')
 }
 const handleNext = () => {
  console.log('play')
 }
 const handlePrevious = () => {
  console.log('play')
 }

  return (
    <div className="App">
     <button onClick={handlePlay}>play</button>
     <button onClick={handleStop}>stop</button>
     <button onClick={handleNext}>next</button>
     <button onClick={handlePrevious}>previous</button>

    </div>
  );
}

export default App;
