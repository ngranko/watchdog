const Store = require('configstore');

class ServerList {
    static get() {
        return Object.keys(this.store.all);
    }

    static has(server) {
        return this.store.has(server);
    }

    static add(server) {
        if (!ServerList.has(server)) {
            this.store.set(server, {});
        }
    }

    static remove(server) {
        if (ServerList.has(server)) {
            this.store.delete(server);
        }
    }
}

ServerList.store = new Store('watchdog');

module.exports = ServerList;
