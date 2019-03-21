import React from 'react';
import Header from '../common/components/DemoHeader/Header.js';
import AlbumGrid from './AlbumGrid.js';
import api from '../common/services/api.js';
import './Music.css';

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsList : [],
        };
    }

    async componentDidMount() {
        let albums = await api.getAlbumsList();
        this.setState({
            albumsList: albums.data.album.slice(36, 66),
        });
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <AlbumGrid albumsList={this.state.albumsList} />
            </React.Fragment>
        );
    }
};

export default MusicContainer;