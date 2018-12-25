import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import "./components/Menu.css";
import Menu from './components/Menu';

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
        <Header />
        <main id="main">
          <Map
            parentState={this.state}
            setMapMarkers={this.setMapMarkers}
            setPlaces={this.setPlaces}
          />
          {this.state.places.length > 0 && (
            <nav className="nav" id="navbar">
              <form>
                <input
                  title="Search in List"
                  type="text"
                  autoFocus={true}
                  id="query"
                  placeholder="Search"
                />
              </form>
              <div tabIndex='0' className="location-list-heading">
                Location List
                <span
                  role='button'
                  tabIndex='0'
                  title="Show All Markers"
                  className="show-all-markers"
                  onClick={() => {
                    this.state.markers.forEach(marker => {
                      this.state.infoWindow.close();
                      marker.setAnimation(window.google.maps.Animation.DROP);
                      return marker.setMap(this.state.map);
                      
                    });
                  }}
                >
                  Show All
                </span>
              </div>
              {this.state.markers.length > 0 && 
              <Menu map={this.state.map} markers={this.state.markers}/>
              }
            </nav>
          )}
        </main>
      </div>
    );
  }
}
export default App;
