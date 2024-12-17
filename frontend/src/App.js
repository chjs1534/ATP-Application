import './App.css';
import HomePage from './components/HomePage';
import PlayerPage from './components/PlayerPage';
import {
  	Routes,
	Route
} from "react-router-dom";
import { useState } from 'react'

function App() {
  	const [playerId, setPlayerId] = useState(104925);
  	const [playerDetails, setPlayerDetails] = useState({});
	const [playerMatches, setPlayerMatches] = useState({});
  
  	return (
		<Routes>
			<Route 
				path="/player/:playerId" 
				element={
					<PlayerPage 
						playerId={playerId} 
						setPlayerId={setPlayerId} 
						playerDetails={playerDetails}
						setPlayerDetails={setPlayerDetails}
						playerMatches={playerMatches}
						setPlayerMatches={setPlayerMatches}
					/>
				} 
			/>
			<Route 
				exact path="/" 
				element={
					<HomePage 
						playerId={playerId} 
						setPlayerId={setPlayerId} 
						setPlayerDetails={setPlayerDetails}
						setPlayerMatches={setPlayerMatches}
					/>
				} 
			/>
		</Routes>
  	);
}

export default App;
