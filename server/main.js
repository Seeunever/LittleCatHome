var http = require('http');
var querystring = require('querystring');
const db = require('../database/user_info.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain',
        'Access-Control-Allow-Origin':'*'
    });

    if (req.method === 'POST') {
        //读取JSON
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
                    console.log("if (reqTask === ){");
                    //register
                    const sql = 'INSERT INTO user_info (username, password) VALUES (?, ?)';
                    const values = [reqInfo.username, reqInfo.password];
                    db.query(sql, values, (error) => {
                    if (error) throw error;
                        console.log("//insert into database error");
                        //insert into database error
                    });
                    //注册成功
                    res.end("1");
                }else if(reqTask === "login"){
                    //login
                    const sql = 'SELECT * FROM user_info WHERE username = ? and password = ?';
                    const values = [reqInfo.username, reqInfo.password];
                    db.query(sql, values, (error, results) => {
                        let resInfo = [];
                        if (error) throw error;
                        //insert into database error
                        if (results.length === 0){
                            resInfo.resResult = "0";
                            res.end(JSON.stringify(resInfo));
                        }else{
                            if(results[0].username === reqInfo.username & results[0].password === reqInfo.password){
                                //登录成功
                                resInfo.userId = reqInfo.id;
                                resInfo.resResult = "1";
                                res.end(JSON.stringify(resInfo));
                            }
                        }
                    });
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