import React from 'react';
import Menu from './../Menu/Menu';

export default function Navbar(props) {
    return (
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
                    props.markers.forEach(marker => {
                      props.infoWindow.close();
                      marker.setAnimation(window.google.maps.Animation.DROP);
                      return marker.setMap(props.map);
                      
                    });
                  }}
                >
                  Show All
                </span>
              </div>
              {props.markers.length > 0 && 
              <Menu map={props.map} markers={props.markers}/>
              }
            </nav>
    )
}