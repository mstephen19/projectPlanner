$(document).ready(function () {
  let today = moment();

  $('.dateDisplay').text(today.format('DD, MMM, YYYY'));

  function displayTime() {
    let todayOnInterval = moment();
    let timeNow = todayOnInterval.format('HH[:]mm[:]ss');
    $('.timeDisplay').text(timeNow);
  }

  setInterval(displayTime, 500);

  $('#toggleModal').on('click', function () {
    $('#exampleModal').modal('toggle');
  });

  $(function () {
    $('#datePicker').datepicker();
  });

  function submitItems() {
    //grab the values within each input
    var nameInput = $('.prName').val();
    var prTypeInput = $('.prType').val();
    var wageInput = $('.wgs').val();
    var dateInput = $('#datePicker').val(); //MM DD YYYY

    var newTr = $('<tr>').appendTo('.theBody');
    $('<td>').text(nameInput).appendTo(newTr);
    $('<td>').text(prTypeInput).appendTo(newTr);
    $('<td>').text(wageInput).appendTo(newTr);
    $('<td>').text(dateInput).appendTo(newTr);

    var dateToCompare = moment(dateInput, 'MM DD YYYY');
    var remainingTime = dateToCompare.diff(today, 'days');

    $('<td>').text(remainingTime).appendTo(newTr);

    var earnedMoney = '$' + wageInput * 8 * remainingTime;

    $('<td>').text(earnedMoney).appendTo(newTr);

    //hourlywage*8*value created above
  }

  $('.addProjectBtn').on('click', submitItems);
});
