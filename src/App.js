import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import "./components/Menu/Menu.css";
import Navbar from './components/Navbar/Nav';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    places: [],
    placesToDisplay: [],
    map: null,
    markers: [],
    infoWindow: null,
    isReady: false,
    isMapLoaded: false,
    query: "",
    displayAllMarkers: false
  };
  // method to store data of network request
  setPlaces = (places, ready) => {
    this.setState({ places: places, isReady: ready, placesToDisplay: places });
  };
  // method to store map, markers array and infowindow to access in this file 
  setMapMarkers = (map, markers, infoWindow) => {
    this.setState({ map: map, markers: markers, infoWindow: infoWindow });
  };
  render() {
    return (
      <div id="container">
      {/* header component  */}
        <Header />
        {/* loader component */}
        {this.state.places.length === 0 && <Loader />}
        <main id="main">
        {/* google map component  */}
          <Map
            parentState={this.state}
            setMapMarkers={this.setMapMarkers}
            setPlaces={this.setPlaces}
          />
          {this.state.places.length > 0 && (
            <Navbar map={this.state.map} infoWindow={this.state.infoWindow} markers={this.state.markers} />
          )}
        </main>
      </div>
    );
  }
}
export default App;
