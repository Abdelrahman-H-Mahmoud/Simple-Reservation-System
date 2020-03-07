const amqp = require('amqplib/callback_api');
const { producer } = require('../../config');

const sendToQueue = (message) => {
    return new Promise((resolve, reject) => {
        try {
            amqp.connect(producer.connection, (error0, connection) => {
                if (error0) {
                    reject(error0);
                }
                connection.createChannel((error1, channel) => {
                    if (error1) {
                        reject(error1);
                    }
                    channel.assertQueue(producer.queue, {
                        durable: false
                    });
                    channel.sendToQueue(producer.queue, Buffer.from(message + ""));

                    console.log(" [x] Sent %s", message);
                    connection.close();
                    resolve();
                });
            });
        }
        catch (err) {
            console.log(err);
        }
    })

}

module.exports = {
    sendToQueue
}