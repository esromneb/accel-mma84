/*********************************************
 Demonstrates orientation events
 *********************************************/
var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);


// Initialize the accelerometer.
accel.on('ready', function () {


//    Use this "enum" for board orientations
//    orientation = {
//        XUP : 0,
//        XDOWN : 1,
//        YUP : 2,
//        YDOWN : 3,
//        ZUP : 4,
//        ZDOWN : 5
//    };

    accel.on('orientation', function (orientationInteger, orientationName) {
        if( orientationInteger == accel.orientation.ZUP) {
            console.log('Board is lying upright');
        }

        if( orientationInteger == accel.orientation.ZDOWN) {
            console.log('Board is upside down');
        }

        console.log('Detected new orientation: ' + orientationName);
    });

    // If you would like to make the orientation change events occur faster uncomment this line
    // accel.setSampleBufferLength(6);

    // If you would like orientation changes to be delayed until device is very stable, uncomment this line
    // accel.setOrientationSuppression(0.01);

});

accel.on('error', function(err){
    console.log('Error:', err);
});