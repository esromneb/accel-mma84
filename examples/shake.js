/*********************************************
 Demonstrates shake events and setting shake threshold
*********************************************/
var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);



// Initialize the accelerometer.
accel.on('ready', function () {

    accel.on('shake', function (mag) {
        console.log('Detected shake with magnitude: ' + mag.toFixed(2));
    });

    // to only detect very strong shakes, uncomment this line:
//    accel.setShakeThreshold(2.5);

    // for more accureate shake detection, increase the rate
//    accel.setOutputRate(600);


});

accel.on('error', function(err){
    console.log('Error:', err);
});