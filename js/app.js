var seat = [false,false,false,false,false,
  false,false,false,false,false];

window.onload = function(){
  var sendUserOption = document.getElementById('btn-send');
  sendUserOption.addEventListener('click', selectFlighClass);
}


function selectFlighClass (event) {
  var userOption = document.getElementById('option').value;
  var form = document.getElementsByTagName('form');
  if (userOption==='1') {
    for(var i = 0; i < 4 ; i++){
      if(seat[i]===false){
        seat[i] = true;
        var seatNumber = i+1;
        var flighClass = 'Primera Clase';
        reservedSeating (seatNumber,flighClass);
        break;
      }else if (i === 3 && seat[3]!== false) {
        noSeat();
      }
    }
  } else if (userOption === '2') {
    for(var i = 4; i < 10 ; i++){
      if(seat[i]===false){
        seat[i] = true;
        var seatNumber = i+1;
        var flighClass = 'Primera Clase';
        reservedSeating (seatNumber,flighClass);
        break;
      } else if (i === 3 && seat[3]!== false) {
        noSeat();
      }
    }
  } else {
    alert('Ingrese una opción válida (Solo números)');
  }
}

function reservedSeating (seatNumber,flighClass) {
  var boardingPass = document.getElementById('boarding-pass');
  var createText = document.createElement('span');
  var text = document.createTextNode('Número de asiento: '+ seatNumber +'Clase: ' + flighClass);
  createText.appendChild(text);
  boardingPass.appendChild(createText);
}

