import { Jobs } from './components/Jobs';
import { Studies } from './components/Studies';
import { PersonalDescrition } from './components/PersonalDescription';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1>Facundo Leiva</h1>
      <PersonalDescrition />
      <Jobs />
      <Studies />
    </div>
  );
}

export default App;
