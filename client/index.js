const express = require('express');
const cors = require('cors');
const StubFactory = require('./stub');

const app = express();
app.use(cors());

app.get('/new', async function (req, res) {
    const stub = StubFactory();

    const data = await stub.getNews();

    res.json({
        data: data,
        msg: '0'
    });

})

app.post('/new', async function (req, res) {
    const stub = StubFactory();

    // thrift文件中定义的ping方法
    const data = await stub.addNew('New 1', 'New 1 content');

    res.json({
        data: data,
        msg: '0'
    });
});

app.listen(3000, function () {
    console.log('listening on port 3000')
});
