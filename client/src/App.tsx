import Button from '@mui/material/Button';
import './App.css';
import LoggedTimesList from './components/time-log/LoggedTimesList';

function App() {
  return(
  <div className="App">
  <Button variant="outlined">Hello world</Button>
  <LoggedTimesList />
</div>)
}

export default App;
