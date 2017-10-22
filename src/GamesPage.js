import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GamesList from './GamesList';

class GamesPage extends Component {
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
    games: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GamesPage);