// The following script displays the users visited camp sites in Ontario, Canada
// centralized on Toronto, the capital of the Canadian province.
let map;
// Map initialization - add the map
function initMap() {
  // Center the map on Toronto
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 43.651, lng: -79.347 }, // Pomnt location of Toronto 
  });

  setMarkers(map);

  // Campsite Locations including a name, and a lat long location 
  // z index indicates order of layering
  const campsites = [
    [ "Port Burwell", 42.648, -80.80949, 2],                                         // Port Burwell
    [ "Algoquin Park", 45.5539485, -78.6669714, 1],                                  // Algonquin Park
    [ "The Pinery", 43.2482353, -81.8269147, 4],                                     // The Pinery 
    [ "Bruce Peninsula National Park (Tobermory)", 45.2572189, -81.6586451, 3],     // Bruce Peninsula National Park (Tobermory)
  ]; 


function setMarkers(map) {
  // Add markers to map, and dictate size via (X,Y), origin position via X which is located in the top left of the iamge icon
  // Select the image needed to mark the locations of the campsites
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // Marker Size - 20 px wide by 32 px high
    size: new google.maps.Size(20, 32),
    // Marker origin - set to (0, 0)
    origin: new google.maps.Point(0, 0),
    // Marker anchor - set base of flagpole location, the flagpole is based at (0, 32)
    anchor: new google.maps.Point(0, 32),
  };

  // Create the expression that sets a marker to each campsite location
  // by using a loop to iterate through each location and calling it.
  // First we must create a clickable region in the form of polygon, 
  // to allow the markers to be set in a series of x,y points referenced
  // constant variable 'campsites'
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  
  for (let i = 0; i < campsites.length; i++) {
    const camp = campsites[i];

    new google.maps.Marker({
      position: { lat: camp[1], lng: camp[2] },
      map,
      icon: image,
      shape: shape,
      title: camp[0],
      zIndex: beach[3]
    });
  }
}
}

window.initMap = initMap;

  // const marker = new google.maps.Marker({
  //   position: camp,                        // Center the location over the the desired locations - Port Burwell, Algoquin Park, the Pinery, Bruce Peninsula National Parl (Tobermory),
  //   map: map,                              // using the JavaScript Array.prototype.map() 
//   });
// }