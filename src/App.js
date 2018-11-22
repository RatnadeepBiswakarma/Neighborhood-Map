import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import "./components/Menu.css";

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
                    this.state.markers.map(marker => {
                      this.state.infoWindow.close();
                      marker.setAnimation(window.google.maps.Animation.DROP);
                      marker.setMap(this.state.map);
                    });
                  }}
                >
                  Show All
                </span>
              </div>
              <ul id="ul">
                {this.state.markers.map(marker => {
                  const { map, markers, infoWindow } = this.state;
                  return (
                    <li
                      tabIndex='0'
                      role='button'
                      id={marker.id}
                      onClick={e => {
                        this.setState({ displayAllMarkers: false });
                        markers.map(mark => {
                          if (mark.id.trim() === e.target.id.trim()) {
                            mark.setMap(map);
                            let google = window.google;
                            mark.setAnimation(google.maps.Animation.BOUNCE);
                            google.maps.event.trigger(mark, "click");
                          } else {
                            mark.setMap(null);
                            mark.setAnimation(null);
                          }
                        });
                      }}
                      key={marker.id}
                      title={marker.title}
                    >
                      {marker.title}
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </main>
      </div>
    );
  }
}
export default App;
