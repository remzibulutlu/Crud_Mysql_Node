
var mysqlConn = require('./mysql-config.js');

var Posts = function (posts) {
    this.title = posts.title;
    this.content = posts.content;
    this.createdAt = posts.createdAt;

};
Posts.create = function (newPost, result) {
    mysqlConn.query("INSERT INTO posts set ?", newPost, function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('The id of the created post is:', res.insertId);
            result("", res.insertId);
        }
    });
};
Posts.findById = function (id, result) {
    mysqlConn.query("Select * from posts where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, "");
        }
        else {
            result("", res);
        }
    });
};
Posts.findAll = function (result) {
    mysqlConn.query("Select * from posts", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result("", err);
        }
        else {
            console.log('posts : ', res);
            result("", res);
        }
    });
};
Posts.update = function (id, posts, result) {
    mysqlConn.query("UPDATE posts SET title=?,content=? WHERE id = ?", [posts.title, posts.content, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result("", err);
        } else {
            result("", res);
        }
    });
};
Posts.delete = function (id, result) {
    mysqlConn.query("DELETE FROM posts WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result("", err);
        }
        else {
            result("", res);
        }
    });
};

module.exports = Posts;