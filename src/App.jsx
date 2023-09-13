import { Routes, Route } from 'react-router-dom';
import Mission from './components/Mission';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
