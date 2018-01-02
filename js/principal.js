// Accediendo a la data
// console.log(data);
$(document).ready(function() {
  alert('Ingrese uno de los Restaurants: Muelle 33, EL tiesto Restobar  Campestre, El Asador, Gran Restaurant el Zarco');
  var arrNameRest = [];
  $.each(data, function(i, item) {
    arrNameRest.push(i);
  });


  $('#search').click(function() {
    $.each(arrNameRest, function(i, element) {
      // console.log(typeof(arrNameRest[i]));
      // debugger;
      if ($('#list-restaurant').val().toUpperCase() === arrNameRest[i]) {
        localStorage.restaurant = $('#list-restaurant').val();
        console.log('encontrado');
        window.location.href = 'secundaria.html';
      } else {
        alert('Ingrese uno de los Restaurants: Muelle 33, EL tiesto Restobar  Campestre, El Asador, Gran Restaurant el Zarco');
      }
    });
    $('#list-restaurant').val('');
  });
});
