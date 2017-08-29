const isOnline = require('is-online');
const isReachable = require('is-reachable');
const DataSender = require('./dataSender');

function check(address) {
    checkOnline(getCallback(address));
}

function getCallback(address) {
    if (Array.isArray(address)) {
        return pingAll.bind(this, address);
    }

    return ping.bind(this, address);
}

function checkOnline(next) {
    isOnline().then(online => {
        DataSender.send('is-online', online);

        if (online) {
            next();
        }
    });
}

function pingAll(addressList) {
    for (const address of addressList) {
        ping(address);
    }
}

function ping(address) {
    isReachable(address).then(reachable => console.log(`${address} ${reachable ? 'is reachable' : 'is not reachable'}`));
}

module.exports = {
    check,
};
