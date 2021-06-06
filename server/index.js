const thrift = require("thrift");
const SaveList = require("../gen-nodejs/SaveList");
const AddNewRes = require("../gen-nodejs/news_types").AddNewRes;
const GetNewsRes = require("../gen-nodejs/news_types").GetNewsRes;
const NewInfo = require("../gen-nodejs/news_types").NewInfo;

// 直接定义一个变量用来存储客户端发送的数据
const list = [
    new NewInfo({
        title: 'News default',
        content: 'content default'
    })
];

// 创建一个thrift服务
const server = thrift.createServer(SaveList, {

    getNews: function(result) {
        const res = new GetNewsRes({
            code: 0,
            msg: 'success',
            data: list
        })
        result(null, res);
    },

    addNew: function(title, content, result){
        list.push(
            new NewInfo({
                title,
                content,
            })
        );

        const res = new AddNewRes({
            code: 0,
            msg: 'success',
            data: new NewInfo({
                title,
                content,
            })
        });
        result(null, res);
    }

});

server.listen(3002);
