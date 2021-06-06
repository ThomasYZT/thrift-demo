const thrift = require('thrift');
const SaveList = require('../gen-nodejs/SaveList');

module.exports = function () {
    var con = thrift.createConnection("localhost", 3002, {
        transport : thrift.TBufferedTransport,
        protocol : thrift.TBinaryProtocol
    });

    con.on("error", function(err) {
        console.log("Error: " + err);
    });

    return thrift.createHttpClient(SaveList, con);
}
