import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	// State for player name handling
	const [playerName, setPlayerName] = useState(initialName);

	// Edit button
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		/* 
    When updating a state based on a previous state, it is good practice to use 
    a callback function (due to how React schedules updates). 
    */
		setIsEditing((editing) => !editing);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}

	// Player name/field and edit button
	let playerNameField = <span className="player-name">{playerName}</span>;
	let btnCaption = 'Edit';

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	if (isEditing) {
		playerNameField = (
			<input type="text" value={playerName} onChange={handleChange} required />
		);
		btnCaption = 'Save';
	}

	// Component
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{playerNameField}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
