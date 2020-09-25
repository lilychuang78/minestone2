let map;
    function initMap() {let map;

function initMap() {
	const localContextMapView = new google.maps.localContext.LocalContextMapView({
		element: document.getElementById('map'),
		placeTypePreferences: ['restaurant', 'tourist_attraction', 'bakery', 'book_store', 'cafe', 'night_club', 'park', 'shopping_mall', 'bar'],
		maxPlaceCount: 10,
	});

	map = localContextMapView.map;

	map.setOptions({
		center: {
			lat: 25.033964,
			lng: 121.564468
		},
		zoom: 13
	});
}
      const localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById('map'),
        placeTypePreferences: ['restaurant', 'tourist_attraction', 'bakery', 'book_store', 'cafe', 'night_club', 'park', 'shopping_mall', 'bar'],
        maxPlaceCount: 10,
      });

      map = localContextMapView.map;

      map.setOptions({
        center: {lat: 25.033964, lng: 121.564468},
        zoom: 13
      });
    }
    