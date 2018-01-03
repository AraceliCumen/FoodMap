$(document).ready(function () {
  $('#title-Restaurant').text(localStorage.restaurant.toUpperCase());
  var restaurantSelect = localStorage.restaurant.toUpperCase();
  var restaurant;

  function restaurantSearch(restaurant) {
    restaurant = Object.keys(data[restaurant]);
    $('#restaurant-slogan').prepend(restaurant.slogan);
  }

  if (restaurantSelect === 'MUELLE 33') {
    restaurantSearch('MUELLE 33');
  }
  if (restaurantSelect === 'EL TIESTO RESTOBAR CAMPESTRE') {
    restaurantSearch('EL TIESTO RESTOBAR CAMPESTRE');
  }
  if (restaurantSelect === 'EL ASADOR') {
    restaurantSearch('EL ASADOR');
  }
  if (restaurantSelect === 'GRAN RESTAURANT EL ZARCO') {
    restaurantSearch('GRAN RESTAURANT EL ZARCO');
  }
});