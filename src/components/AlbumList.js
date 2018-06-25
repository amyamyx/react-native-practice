import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {  
  state = { albums: [] }; // we can also use constructor

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    const { viewStyle } = styles;
    console.log(this.state);
    return (
      <ScrollView style={viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    
  }
};

export default AlbumList;
