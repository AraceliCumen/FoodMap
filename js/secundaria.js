$(document).ready(function () {
  alert('has click en la imagen para ver la información');
  $('#title-Restaurant').text(localStorage.restaurant.toUpperCase());
  var restaurantSelect = localStorage.restaurant.toUpperCase();
  // console.log(restaurantSelect);
  var keysOfData = Object.keys(data);
  // var restaurant;

  for (i = 0; i < keysOfData.length; i++) {
    if (restaurantSelect === keysOfData[i]) {
      $('#restaurant-slogan').prepend(data[restaurantSelect].slogan);
      // $('#select').ccs('background-image', 'url(../' + data[restaurantSelect].img + ')');
      // console.log('url(../' + data[restaurantSelect].img + ')');
      $('#select').addClass('img-rest');
    }
  }

  $('#foods').click(function() {
    window.location.href = 'foods.html';
  });
});