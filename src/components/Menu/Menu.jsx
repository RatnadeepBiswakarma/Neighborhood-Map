import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    const markers = this.props.markers;
    const map = this.props.map;
    return (
      <ul id="ul">
        {markers.map(marker => {
          return (
            <li
              tabIndex="0"
              role="button"
              id={marker.id}
              onClick={e => {
                // render list names of the markers
                markers.map(mark => {
                  if (mark.id.trim() === e.target.id.trim()) {
                    mark.setMap(map);
                    let google = window.google;
                    mark.setAnimation(google.maps.Animation.BOUNCE);
                    return google.maps.event.trigger(mark, "click");
                  } else {
                    mark.setMap(null);
                    return mark.setAnimation(null);
                  }
                });
                // hide list back
                document.getElementById("navbar").classList.toggle("toggle");
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
