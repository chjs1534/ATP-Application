import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Player from './components/Player';
import Rankings from './components/Rankings'
import { useState } from 'react';

function App() {
  const [playerId, setPlayerId] = useState<Number>();

  return (
    <Routes>
			<Route 
				exact path="/" 
				element={
					<Home
            setPlayerId={setPlayerId}
          />
				} 
			/>
      <Route 
        path="/player/:playerId" 
        element = {
          <Player 
            playerId={playerId}
            setPlayerId={setPlayerId}
          />
        }
      />
      <Route
        path="/rankings"
        element = {
          <Rankings
          />
        }
      />
      <Route
        path="/headToHead"
        element = {
          <div>Not yet implemented</div>
        }
      />
      <Route
        path="/matchPredictions"
        element = {
          <div>Not yet implemented</div>
        }
      />
		</Routes>
  );
}

export default App;
