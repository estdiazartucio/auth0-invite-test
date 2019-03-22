import React from 'react';
import defaultAlbumCover from '../common/assets/album-placeholder.png'

const AlbumGrid = props => {
    
    const getAlbumImage = (album, size) => {
        if (Array.isArray(album.image)) {
            let img = album.image.find(img => img.size === size);
            return img['#text'];
        }
        return album.image;
    }

    const renderAlbums = () => {
        return props.albumsList.map( (album, index) => 
            <div key={index} className='tile-album'>
                <div className='tile-title'>
                    {album.name}
                </div>
                <img src={album.image ? getAlbumImage(album, 'extralarge') : defaultAlbumCover} alt={album.name} className='tile-album-art' />
                <div className='tile-footer'>
                    {album.artist.name || album.artist}
                </div>
            </div>
        );
    }

    return (
        <div className='container-grid-album'>
            { props.albumsList || props.albumsList.length > 0 ? renderAlbums() : <span>No albums to display</span> }
        </div>
    );
};

export default AlbumGrid;