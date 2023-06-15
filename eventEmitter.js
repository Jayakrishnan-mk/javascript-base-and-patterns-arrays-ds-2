const eventEmitter = require('events');

const testVar = new eventEmitter();

testVar.on('success', () => {
    console.log('Emitter on ...');
});

testVar.on('failure', () => {
    console.log('not working. but...');
})

// testVar.emit('success');
testVar.emit('failure');
