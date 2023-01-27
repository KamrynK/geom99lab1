let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 42.648, lng: -80.80949 }, // Port Burwell
    });

    // Create an array of alphabetical characters used to label the markers 
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Select the image needed to mark the locations of the campsites
    const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

    // Now that we have our marker image/icon, we can add the markers to the map
    const beachMarker = new google.maps.Marker({
      position: { lat: 42.648654, lng: -80.8098895 }, // Center the location over the the desired location - Port Burwell
      map,                                     // using the JavaScript Array.prototype.map() 
      icon: image,
    });

  // create an array of markers based on a given "locations" array 
    const beachMarkers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });

  // provide the locations of interest 
    const locations = [
        { lat: 45.5539485, lng: -78.6669714},       // Algonquin Park
        { lat: 43.2482353, lng: -81.8269147},       // The Pinery 
        { lat: 45.2572189, lng: -81.6586451}        // Bruce Peninsula Nation Park (Tobermory)
    ];
}

window.initMap = initMap;