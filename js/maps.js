function initMap() {
  var uluru = { lat: -7.1638451, lng: -78.5064131 };
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}