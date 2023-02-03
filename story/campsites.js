let map;

function initMap() {
  // Campsite Locations
  const camp = 
  // [
    { lat: 42.648, lng: -80.80949 },         // Port Burwell
  //   { lat: 45.5539485, lng: -78.6669714},    // Algonquin Park
  //   { lat: 43.2482353, lng: -81.8269147},    // The Pinery 
  //   { lat: 45.2572189, lng: -81.6586451},    // Bruce Peninsula National Park (Tobermory)
  // ];
    // The Map centered at Toronto
  const tdot = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 43.651, lng: -79.347},  // Toronto  
  });

  // Create an array of alphabetical characters used to label the markers 
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Select the image needed to mark the locations of the campsites
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  // Now that we have our marker image/icon, we can add the markers to the map
  new google.maps.Marker({
    position: camp,                        // Center the location over the the desired locations - Port Burwell, Algoquin Park, the Pinery, Bruce Peninsula National Parl (Tobermory),
    map: map,                              // using the JavaScript Array.prototype.map() 
    label: labels,
    icon: image,
  });

  // create an array of markers based on a given "locations" array 
  const beachMarkers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
}

window.initMap = initMap;