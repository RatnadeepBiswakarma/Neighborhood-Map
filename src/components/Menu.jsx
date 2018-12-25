import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  markers = this.props.markers;
  map = this.props.map;
  state = {
    dataLoaded: false
  };
  render() {
    return (
      <ul id="ul">
        {this.markers.map(marker => {
          return (
            <li
              tabIndex="0"
              role="button"
              id={marker.id}
              onClick={e => {
                this.setState({ displayAllMarkers: false });
                this.markers.map(mark => {
                  if (mark.id.trim() === e.target.id.trim()) {
                    mark.setMap(this.map);
                    let google = window.google;
                    mark.setAnimation(google.maps.Animation.BOUNCE);
                    return google.maps.event.trigger(mark, "click");
                  } else {
                    mark.setMap(null);
                    return mark.setAnimation(null);
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
    );
  }
}

export default Menu;
