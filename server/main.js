var http = require('http');
var querystring = require('querystring');
const db = require('../database/db.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain',
        'Access-Control-Allow-Origin':'*'
    });

    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            let keys = [];
            for (var key in parsedData) {
                keys.push(key);
            }
            //JSON.parse(keys[0])为真实需要的数据？此处存疑 可能有更优解

            if(JSON.parse(keys[0]).task){
                let reqTask = JSON.parse(keys[0]).task;
                let reqInfo = JSON.parse(keys[0]);
                if (reqTask === "register"){
                    const isRegisterd = 'SELECT * FROM user_info WHERE username = ?';
                    const vaule = reqInfo.username;
                    db.query(isRegisterd, vaule, (error, results) => {
                        if (error) throw error;
                        if (results.length !== 0){
                            //账号已被注册
                            res.end('0');
                        }else{
                            const sql = 'INSERT INTO user_info (username, password) VALUES (?, ?)';
                            const values = [reqInfo.username, reqInfo.password];
                            db.query(sql, values, (error) => {
                            if (error) throw error;
                            });
                            //注册成功
                            res.end("1");
                        }
                    });
                }else if(reqTask === "login"){
                    const sql = 'SELECT * FROM user_info WHERE username = ? and password = ?';
                    const values = [reqInfo.username, reqInfo.password];
                    db.query(sql, values, (error, results) => {
                        let resInfo = {};
                        if (error) throw error;
                        if (results.length === 0){
                            //登陆失败，数据库无匹配信息
                            resInfo.resResult = "0";
                            res.end(JSON.stringify(resInfo));
                        }else{
                            if(results[0].username === reqInfo.username & results[0].password === reqInfo.password){
                                resInfo.userId = results[0].id;
                                resInfo.resResult = "1";
                                console.log(typeof(resInfo));
                                console.log(JSON.stringify(resInfo));
                                res.end(JSON.stringify(resInfo));
                            }
                        }
                    });
                }else if(reqTask == "submitArticle"){
                    const sql = 'INSERT INTO article (title, content, create_time, update_time, user_id) VALUES (?, ?, ?, ?, ?)';
                    const values = [reqInfo.title, reqInfo.article, reqInfo.createTime, reqInfo.updateTime, reqInfo.writerId];
                    db.query(sql, values, (error) => {
                        if (error) throw error;
                        });
                        res.end("1");
                }else{
                    console.log("others");
                }
            }else{
                res.end('not a userInfo' + JSON.stringify(keys[0]));
            }
        });
    } else {
        // other
        res.end('Send a POST request with Content-Type: application/x-www-form-urlencoded');
    }
});

server.listen(3000);

console.log("start server on port:3000");