export function getLocationData(location) {
  return fetch(
    `https://api.foursquare.com/v2/venues/search?client_id=FK3EHLUMPDSBQ20OILR1RRIJTIEIJGESP4EJA3VKUHZXQRWR&client_secret=2RGH3VXL1K033FGQR1Q0R2OKPEHS4GEGZZXKSHXCONY1WZKT&v=20180323&near=${location}`
  );
}
export function loadGoogleMap() {
  const ApiKey = "AIzaSyBg8ixMHkg_RMIuzTCrJW8iRhKkkn52KqE";
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
  script.async = true;
  script.defer = true;
  return document.body.appendChild(script);
}
