$(document).ready(function() {
  $("#enter1").click(function(event) {
    $("#enter1").addClass("animated shake");
    event.preventDefault();

    var item = $("#mySelect").val();
    if (item == "two") {
      alert("Electrical Appliance owned per household section under constuction")
    } else {
      $("#identifier").show();
      var inputtedNoHousehold = parseInt($("input#noHousehold").val());
      for (var i = 1; i <= inputtedNoHousehold; i++) {
        $("#householdInfo").append(
          '<form id="household" class="form-group">' +
          '<div class="form-group col-md-7">' +
          '<label for="identity">Household ' + i + '</label>' +
          '<input class="form-control identity" type="text" name="identity" placeholder="Name:">' +
          '</div>' +
          '<div class="form-group col-md-5">' +
          '<label for="bill">Number of people in Household:</label>' +
          '<input class="form-control bill" type="number" name="bill" placeholder="Number">' +
          '</div>' +
          '</form>')
      };
    }
  });

  $("#btn2").click(function(event) {
    event.preventDefault();

    var idn = $("input.identity");
    var nos = $("input.bill");
    var total = 0;
    for (var i = 0; i < nos.length; i++) {
      total = total + parseInt(nos[i].value);
    };
    var amount = parseInt($("input.amount").val())

    for (var i = 0; i < nos.length; i++) {
      x = nos[i].value;
      id = idn[i].value;
      householdNumber = i + 1;
      $("#output").append('<p>'+id +' '+'Owes:'+'</p>' +
        (x / total) * amount
      );
    };
  });

  $("#btn3").click(function(event) {
    event.preventDefault();
    $("#identifier").empty();
    $("#output").empty();
  });

  $("#btn4").click(function(event) {
    event.preventDefault();
    $("#output").empty();
  });
});
