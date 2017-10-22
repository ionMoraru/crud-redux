import React from 'react';
import PropsTypes from 'prop-types';

const GamesList = ({ games }) => {
    const emptyMessage = (
        <p>THere are no games yet</p>
    );
    const gamesList = (
        <p>games list</p>
    );
    return(
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}

GamesList.PropsTypes = {
    games: PropsTypes.array.isRequired
}

export default GamesList;
