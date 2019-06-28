var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

console.log('executando thread');

if(cluster.isMaster){
    console.log('Thread master');

    cpus.forEach(() => {
        cluster.fork();
    });

    cluster.on('listening', (worker) => {
        console.log('cluster %d conectado', worker.process.pid);
    });

    cluster.on('exit', (worker) => {
        console.log('cluster %d desconectado', worker.process.pid);
        cluster.fork();
    });

} else {
    console.log('thread slave');
    require('./index.js');
}