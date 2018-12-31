import React, { Component } from "react";
// import Error from "./../Error/Error";
import { loadGoogleMap } from "../Apis/Apis";

class Map extends Component {
  componentDidMount() {
    loadGoogleMap(this.initMap);
  }
  initMap = () => {
    let google = window.google;
    let markers = [];
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.508026428508835, lng: -0.12787045026119373 },
      zoom: 18
    });
    this.renderMarkers(map, markers);
  };
  // render markers on the map
  renderMarkers = (map, markers) => {
    // setting google variable for use
    let google = window.google;
    let infoWindow = new google.maps.InfoWindow();
    this.props.places.map(place => {
      let location = place.location;
      let address = place.location.formattedAddress;
      // create marker
      let marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP,
        title: place.name,
        id: place.id
      });
      // click event on the marker to show the infoWindow
      marker.addListener("click", () => {
        infoWindow.setContent(
          `<div tabIndex='0' class='info'><h3>${
            place.name
          }</h3><address>${address}</address></div>`
        );

        return infoWindow.open(map, marker);
      });
      return markers.push(marker);
    });
    let bounds = new google.maps.LatLngBounds();
    // storing those values to parent state to use it in parent
    // file and other component in future
    // displaying all markers by default
    markers.forEach(marker => {
      marker.setMap(map);
      return bounds.extend(marker.position);
    });
    map.fitBounds(bounds);
    // render markers on map based on the text input
    document.getElementById("query").addEventListener("input", e => {
      let val = e.target.value
        .toString()
        .toLowerCase()
        .trim();

      infoWindow.close();
      // if text field is empty show all marker
      if (val === "") {
        markers.forEach(marker => {
          marker.setMap(map);
          return marker.setAnimation(google.maps.Animation.DROP);
        });
      } else {
        markers.forEach(marker => {
          // render those marker which have any of the text inputted letters
          // text are processed strictly for better search results
          if (
            marker.title
              .toString()
              .toLowerCase()
              .trim()
              .includes(val)
          ) {
            marker.setMap(map);
            marker.setAnimation(google.maps.Animation.DROP);
            return bounds.extend(marker.position);
          } else {
            marker.setAnimation(null);
            return marker.setMap(null);
          }
        });
      }
      map.fitBounds(bounds);
    });
    this.props.setMapMarkers(map, markers, infoWindow);
  };
  render() {
    return <div tabIndex="-1" role="application" id="map" />;
  }
}

export default Map;
