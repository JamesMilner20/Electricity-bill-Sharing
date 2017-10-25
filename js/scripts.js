$(document).ready(function() {
  $("#enter1").click(function(event) {
    event.preventDefault();

    $("#identifier").show();
    var inputtedNoHousehold = parseInt($("input#noHousehold").val());
    for (var i = 1; i <= inputtedNoHousehold; i++){
      $("#householdInfo").append(
        '<form id="household" class="form-group">'+
        '<div class="form-group col-md-7">'+
        '<label for="bill">Household '+i+'</label>'+
        '<input class="form-control" type="text" name="bill" placeholder="Name:">'+
        '</div>'+
        '<div class="form-group col-md-5">'+
        '<label for="bill">Number of people in Household:</label>'+
        '<input class="form-control bill" type="number" name="bill" placeholder="Number">'+
        '</div>'+
        '</form>')
    };
  });

  $("#btn2").click(function(event) {
    event.preventDefault();


    var nos = $("input.bill");
    var total = 0;
    for (var i = 0; i < nos.length; i++) {
    total = total + parseInt(nos[i].value);
  };
    var amount = parseInt($("input.amount").val())

    for (var i = 0; i < nos.length; i++) {
      x = nos[i].value;
      householdNumber = i + 1;
        $(".output").append('<p>Household '+householdNumber+' Owes:'+'</p>'+
          total
          );
        };
      });
    });
