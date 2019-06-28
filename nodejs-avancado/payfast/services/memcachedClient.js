var memcached = require('memcached');

module.exports = () =>{
    return createMemcachedClient;
}

function createMemcachedClient(){
    
    var cliente = new memcached('localhost:11211', {
        retries: 10,
        retry: 10000,
        remove: true
    });
    
    return cliente;
}
