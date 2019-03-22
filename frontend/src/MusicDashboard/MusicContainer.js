import React from 'react';
import Header from '../common/components/DemoHeader/Header.js';
import AlbumGrid from './AlbumGrid.js';
import RoundButton from '../common/components/RoundButton/RoundButton.js';
import api from '../common/services/api.js';
import './Music.css';

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsList : [],
            usersPick: [],
            showTop10: true,
        };
        this.getTopTen = this.getTopTen.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    getTopTen() {
        let max = 60;
        let min = 1;
        let randomStart = Math.floor(Math.random() * (max - min)) + min;
        return this.state.albumsList.slice(randomStart, randomStart + 10);
    }

    switchView() {
        this.setState(prevState => ({showTop10: !prevState.showTop10}));
    }

    async componentDidMount() {
        let albums = await api.getAlbumsList();
        this.setState({
            albumsList: albums.data.topAlbums.album,
            usersPick: albums.data.userPickedAlbums,
        });
    }

    render() {
        let albumList = this.state.showTop10 ? this.getTopTen() : this.state.usersPick;
        return(
            <React.Fragment>
                <Header />
                <div className='album-grid-buttons'>
                    <RoundButton onClick={this.switchView}>{this.state.showTop10 ? 'Top 10' : 'Picked by Users'}</RoundButton>
                </div>
                <AlbumGrid albumsList={albumList} />
            </React.Fragment>
        );
    }
};

export default MusicContainer;