const mysql = require('mysql')
// 建立与 MySQL 数据库的连接
const db = mysql.createPool({
	host: 'rm-2ze23dl2u3m2w71u75o.mysql.rds.aliyuncs.com', // 数据库的IP地址
	port: 3306, //数据库端口号
	user: 'irene', // 登录数据库的账号
	password: '11DEdatabasemima', // 登录数据库的密码
	database: 'animalcafe' // 指定要操作哪个数据库
})


// // 举例 插入一个用户注册信息
// const sql = 'INSERT INTO user_info (username, password) VALUES (?, ?)';
// const values = ["fakeName", "fakePassword"];
// db.query(sql, values, (error, results, fields) => {
// if (error) throw error;
// 	console.log("inserted");
// });

module.exports = db