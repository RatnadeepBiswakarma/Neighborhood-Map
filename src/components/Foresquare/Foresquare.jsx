import React from "react";

export function getForesquareData(location) {
  return fetch(
    `https://api.foursquare.com/v2/venues/search?client_id=FK3EHLUMPDSBQ20OILR1RRIJTIEIJGESP4EJA3VKUHZXQRWR&client_secret=2RGH3VXL1K033FGQR1Q0R2OKPEHS4GEGZZXKSHXCONY1WZKT&v=20180323&near=${location}`
  );
}
