let map;

// Map initialization - add the map
function initMap() {
  // Campsite Locations
  const camp1 = { lat: 42.648, lng: -80.80949 };         // Port Burwell
  const camp2 = { lat: 45.5539485, lng: -78.6669714};    // Algonquin Park
  const camp3 = { lat: 43.2482353, lng: -81.8269147};    // The Pinery 
  const camp4 = { lat: 45.2572189, lng: -81.6586451};    // Bruce Peninsula National Park (Tobermory)

  // Center the map on Toronto
  const tdot = { lat: 43.651, lng: -79.347 }
  // call the map and map properties
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: tdot,
  });

  // Create an array of alphabetical characters used to label the markers 
  // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Select the image needed to mark the locations of the campsites
  // const image =
  //   "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  // Now that we have our marker image/icon, we can add the markers to the map
  // Position the marker at Port Burwell
  const marker = new google.maps.Marker({
    position: camp1, camp2, camp3, camp4,                        // Center the location over the the desired locations - Port Burwell, Algoquin Park, the Pinery, Bruce Peninsula National Parl (Tobermory),
    map: map,                                                             // using the JavaScript Array.prototype.map() 
    // title: "Port Burwell",
    // label: labels,
    // icon: image,
  });

  // // create an array of markers based on a given "locations" array 
  // const beachMarkers = locations.map((location, i) => {
  //   return new google.maps.Marker({
  //     position: location,
  //     label: labels[i % labels.length],
  //   });
  // });
}

window.initMap = initMap;


// locations
  //const camp = 
  // [
  //   { lat: 42.648, lng: -80.80949 }         // Port Burwell
  //   { lat: 45.5539485, lng: -78.6669714},    // Algonquin Park
  //   { lat: 43.2482353, lng: -81.8269147},    // The Pinery 
  //   { lat: 45.2572189, lng: -81.6586451},    // Bruce Peninsula National Park (Tobermory)
  // ];
    // The Map centered at Toronto{ lat: 43.651, lng: -79.347 },  // Toronto  