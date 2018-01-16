const Author = require('../entity/author');
const Base = require('./base-dao');
// const JSON = require('circular-json');


// author dao
function readAllAuthors(conn, res) {
    // you can also use => function (err, rows, fields) { extractData(rows, fields); }
    conn.query('SELECT * FROM tbl_author', function (err, rows) {
        if (err) res.json("Operation failed " + err);
        res.json(extractData(rows));
    });
}

function readAllAuthorsWithLimit(conn, res, pageNo) {
    conn.query(Base.getLimit(pageNo, 'SELECT * FROM tbl_author'), function (err, rows) {
        if (err) res.json("Operation failed " + err);
        res.json(extractData(rows));
    });
}

function readAuthorsByName(conn, res, authorName) {
    authorName = "%" + authorName + "%";
    conn.query('SELECT * FROM tbl_author WHERE authorName LIKE ?', [authorName], function (err, rows) {
        if (err) res.json("Operation failed " + err);
        res.json(extractData(rows));
    });
}

function readAuthorsByPK(conn, res, authorId) {
    conn.query('SELECT * FROM tbl_author WHERE authorId  = ?', [authorId], function (err, rows) {
        if (err) res.json("Operation failed " + err);
        res.json(extractData(rows));
    });
}

function getAuthorsCount(conn, res) {
    conn.query('SELECT COUNT(*) AS COUNT FROM tbl_author', function (err, rows) {
        if (err) res.json("Operation failed " + err);
        res.json(rows[0].COUNT);
    });
}

function addAuthorWithID(receivedAuthor, conn, callback) {
    conn.query('INSERT INTO tbl_author (authorName) VALUES (?)', [receivedAuthor.getAuthorName()], function (err, result) {
        if (err) callback("Operation failed " + err, null);
        callback(null, result.insertId);
    });
}

function updateAuthor(receivedAuthor, conn, callback) {
    conn.query('UPDATE tbl_author SET authorName =? WHERE authorId = ?', [receivedAuthor.getAuthorName(), receivedAuthor.getAuthorId()], function (err, result) {
        if (err) callback("Operation failed " + err, null);
        callback(null, "Operation Successful");
    });
}

function deleteAuthor(receivedAuthor, conn, callback) {
    conn.query('DELETE FROM tbl_author WHERE authorId = ?', [receivedAuthor.getAuthorId()], function (err, result) {
        if (err) callback("Operation failed " + err, null);
        callback(null, "Operation Successful");
    });
}

function extractData(rows) {
    var authors = []; // for storing author objects
    for (var count in rows) {
        var author = new Author();
        author.setAuthorId(rows[count].authorId);
        author.setAuthorName(rows[count].authorName);
        // set books for later

        authors.push(author);
    }
    return authors;
}

module.exports = {
    readAllAuthors,
    addAuthorWithID,
    updateAuthor,
    deleteAuthor,
    getAuthorsCount,
    readAllAuthorsWithLimit,
    readAuthorsByName,
    readAuthorsByPK
}