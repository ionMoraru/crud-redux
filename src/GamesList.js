import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GamesList = ({ games, deleteGame }) => {
    const emptyMessage = (
        <p>THere are no games yet</p>
    );
    const gamesList = (
        <div className='ui four cards'>
            { games.map((item) => <GameCard key={item._id} game={item} deleteGame={deleteGame} />) }
        </div>
    );
    return(
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}

GamesList.PropTypes = {
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired
}

export default GamesList;
