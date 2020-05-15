import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';



export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 36.128013,
      lng:  -86.725980,
    },
  }

  mapRef = React.createRef()

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <>
      <Map center={position} 
          lat={this.state.latlng.lat} 
          lng={this.state.latlng.lng} 
          zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      </>
    )
  }
}