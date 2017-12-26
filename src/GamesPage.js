import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames, deleteGame } from './actions/games.actions';

class GamesPage extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        return (
            <div>
                Games List
                <GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
            </div>
        );
    }
}

GamesPage.PropTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);