const localContextMapView = new google.maps.localContext.LocalContextMapView({
  element: document.getElementById('map'),
  placeTypePreferences: ['restaurant', 'tourist_attraction'],
  maxPlaceCount: 12,
});