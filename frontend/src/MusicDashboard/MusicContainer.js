import React from 'react';
import Header from '../common/components/DemoHeader/Header.js';
import './Music.css';

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsList : [],
        };
    }

    render() {
        return(
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
};

export default MusicContainer;