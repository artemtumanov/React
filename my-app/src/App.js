import './App.css';
import Message from './components/Message';

function App() {
  const name = "Artem"
  return (
    <div className="App">
      <Message name={name}/>
    </div>
  );
}

export default App;
