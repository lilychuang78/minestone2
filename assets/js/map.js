let map;
    function initMap() {
      const localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById('map'),
        placeTypePreferences: ['restaurant', 'tourist_attraction'],
        maxPlaceCount: 12,
      });

      map = localContextMapView.map;

      map.setOptions({
        center: {lat: 24, lng: 120},
        zoom: 7
      });
    }