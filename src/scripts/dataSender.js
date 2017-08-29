class DataSender {
    static setDestination(destination) {
        DataSender.destination = destination;
    }

    static removeDestination() {
        DataSender.destination = null;
    }

    static send(channel, message) {
        if (DataSender.destination !== null) {
            DataSender.destination.send(channel, message);
        }
    }
}

DataSender.destination = null;

module.exports = DataSender;
