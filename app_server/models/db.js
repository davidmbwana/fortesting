/*
var mongoose = require ('mongoose');
var dbURI = 'mongodb://localhost/loc8tr';
mongoose.connect(dbURI);


mongoose.connection.on('connected',function (){
    console.log('Mongoose connected to' + dbURI);
});

mongoose.connection.on('error',function (){
    console.log('Mongoose connection error');
});

mongoose.connection.on('connected',function (){
    console.log('Mongoose disconnected to');
});


gracefulshutdown = function(msg, callback){
    mongoose.connection.close(function () {
        console.log('mongoose disconnected through ' + msg);
        callback();
    })
};

process.once('SIGINT', function () {
    gracefulshutdown('app termination', function (){
        process.exit(0);
    });
});

*/