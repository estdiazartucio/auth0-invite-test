import React from 'react';

const AlbumGrid = props => {
    
    const getAlbumImage = (album, size) => {
        let img = album.image.find(img => img.size === size);
        return img['#text'];
    }

    const renderAlbums = () => {
        return props.albumsList.map(album => 
            <div key={album.mbid} className='tile-album'>
                <div className='tile-title'>
                    {album.name}
                </div>
                <img src={getAlbumImage(album, 'large')} alt={album.name} />
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