import React, { Component } from 'react';

class GamesHomePage extends Component {
    render() {
        return (
            <div className="ui segment">
                <img width='100%' src="https://www.geforce.com/sites/default/files-world/attachments/gametiles.jpg" alt="games collection" />
                <div style={{width: '100%', height: '125px', backgroundColor: '#f2af03', position: 'relative', zIndex: 999, bottom: '128px' }}></div>
            </div>
        );
    }
}

export default GamesHomePage;