import './App.css';
import CountDownTimer from './components/CountDownTimer/CountDownTimer';

function App() {
  return (
    <div className="App">
      <CountDownTimer countDownTimestampMs={1683673600000}/>
    </div>
  );
}

export default App;
