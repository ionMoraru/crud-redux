import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames } from './actions/games.actions';

class GamesPage extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
        console.log(this.props.games)
        return (
            <div>
                Games List
                <GamesList games={this.props.games} />
            </div>
        );
    }
}

GamesPage.PropTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);