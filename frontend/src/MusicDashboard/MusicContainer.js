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
            showAlbumForm: false,
            newAlbumName: '',
            newAlbumArtist: '',
        };
        this.getTopTen = this.getTopTen.bind(this);
        this.switchView = this.switchView.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitAlbum = this.submitAlbum.bind(this);
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

    renderForm() {
        this.setState(prevState => ({
            ...prevState,
            showAlbumForm: !prevState.showAlbumForm,
            newAlbumArtist: '',
            newAlbumName: '',
        }));
    }

    onInputChange(e) {
        let value = e.target.value;
        let fieldName = e.target.name;
        this.setState(prevState => ({
            ...prevState,
            [fieldName]: value,
        }))
    }

    async submitAlbum() {
        if(this.state.newAlbumArtist.length > 0 && this.state.newAlbumArtist.length > 0) {
            try {
                let newAlbumResponse = await api.addAlbum({
                    artist: this.state.newAlbumArtist,
                    albumName: this.state.newAlbumName,
                });
                this.setState(prevState => ({
                    ...prevState,
                    usersPick: [...prevState.usersPick, newAlbumResponse.data]
                }));
            }
            catch(e){
                console.log(e);
            }
        }
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
                <div className='album-grid-toolbar'>
                    <div className='album-grid-buttons'>
                        <RoundButton onClick={this.switchView}>{this.state.showTop10 ? 'Picked by Users' : 'Top 10'}</RoundButton>
                        {!this.state.showTop10 ? <RoundButton onClick={this.renderForm}>Add Album</RoundButton> : null}
                    </div>
                    {this.state.showAlbumForm ? 
                        <div className='add-album-form'>
                            <input type='text' placeholder='Album Name' name='newAlbumName' onChange={this.onInputChange} value={this.state.newAlbumName} />
                            <input type='text' placeholder='Artist Name' name='newAlbumArtist' onChange={this.onInputChange} value={this.state.newAlbumArtist} />
                            <RoundButton onClick={this.submitAlbum}>Add</RoundButton>
                        </div> : null}
                </div>
                <AlbumGrid albumsList={albumList} />
            </React.Fragment>
        );
    }
};

export default MusicContainer;