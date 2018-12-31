import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import "./components/Menu/Menu.css";
import Navbar from "./components/Navbar/Nav";
import Loader from "./components/Loader/Loader";
// import Error from "./components/Error/Error";
import { getLocationData } from "./components/Apis/Apis";

class App extends Component {
  state = {
    places: [],
    placesToDisplay: [],
    map: null,
    markers: [],
    infoWindow: null,
    // isReady: false,
    isMapLoaded: false,
    query: "",
    displayAllMarkers: false,
    requestStatus: ""
  };

  componentDidMount() {
    // fetch data from foresquare, nearby location of London
    getLocationData("london")
      .then(res => res.json())
      .then(data => {
        let locations = data.response.venues;
        if (locations) {
          this.setState({ places: locations });
          let status = data.meta.code;
          this.setState({ requestStatus: status });
        }
      })
      .catch(function(err) {
        return alert(
          `Error occurred while fetching data from server, app may not work correctly: ${err}`
        );
      });
  }

  // method to store map, markers array and infoWindow to access in this file
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
          {this.state.places.length > 0 && (
            <Map
              setMapMarkers={this.setMapMarkers}
              places={this.state.places}
            />
          )}
          {this.state.markers && (
            <Navbar
              map={this.state.map}
              infoWindow={this.state.infoWindow}
              markers={this.state.markers}
            />
          )}
        </main>
      </div>
    );
  }
}
export default App;
