const Author = require('../entity/author');
const JSON = require('circular-json');


// author dao
function addAuthorWithID(receivedAuthor) {

}

function updateAuthor(receivedAuthor, conn) {
    return conn.query('INSERT INTO tbl_author (authorName) VALUES (?)', function(err, result){
        if(err) res.send(JSON.stringify("Operation failed " + err));

    })
}

function deleteAuthor(receivedAuthor) {

}

function getAuthorsCount() {

}

function readAllAuthors(conn, res) {
    // you can also use => function (err, rows, fields) { extractData(rows, fields); }
    return conn.query('SELECT * FROM tbl_author', function (err, rows) {
        if(err) res.send(JSON.stringify("Operation failed " + err));
        res.json(extractData(rows));
        // return authors;
    });
}

function readAllAuthorsWithLimit(pageNo) {

}

function readAuthorsByName(authorName) {

}

function readAuthorsByPK(authorId) {

}

function extractData(rows) {
    var authors = []; // for storing author objects
    for (var count in rows) {
        var author = new Author();
        author.setAuthorId(rows[count].authorId);
        // console.log(rows[count].authorId);
        author.setAuthorName(rows[count].authorName);
        // set books for later

        authors.push(author);
    }
    // console.log(authors);
    return authors;
}

module.exports = {
    readAllAuthors
}