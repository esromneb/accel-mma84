/*********************************************
 Demonstrates shake events and setting shake threshold
*********************************************/
var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);


var process = function(xyz) {

//    console.log(xyz[0].toFixed(2),',', xyz[1].toFixed(2),',', xyz[2].toFixed(2));

};


// Initialize the accelerometer.
accel.on('ready', function () {
    // Stream accelerometer data
    accel.on('data', function (xyz) {
        process(xyz);
//        console.log('x:', xyz[0].toFixed(2),
//            'y:', xyz[1].toFixed(2),
//            'z:', xyz[2].toFixed(2));
    });

    accel.on('funtime', function (xyz) {
       console.log('fun time');
    });

    accel.on('shake', function (mag) {
        console.log('Detected shake with magnitude: ' + mag.toFixed(2));
    });

    accel.on('orientation', function (orientationInteger, orientationName) {
        console.log('Detected new orientation: ' + orientationName);
    });

//    accel.setShakeThreshold(1.1);

});

accel.on('error', function(err){
    console.log('Error:', err);
});