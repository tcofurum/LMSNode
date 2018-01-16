const request = require('request-promise');
const authors = require('../entity/author');
// const book = require('../entity/book'); // this will be for later
const aDao = require('../dao/author-dao');
// const bDao = require('../dao/book-dao'); // this will be for later
const conn = require('./connection-service');
const bService = require('./base-service');
const JSON = require('circular-json');


// author services
const readAllAuthors = function (req, res, next) {
    // Async function (conn) takes longer than regular functions so executes last. 
    // Check online articles on controlling flow: https://blog.risingstack.com/mastering-async-await-in-nodejs/
    aDao.readAllAuthors(conn, res);
}

const readAuthorsLimitSearch = function (req, res, next) {
    aDao.readAllAuthorsWithLimit(conn, res, req.params.pageNo);
}

const getAuthorsCount = function (req, res, next) {
    aDao.getAuthorsCount(conn, res);
}

const readAuthorByPK = function (req, res, next) {
    aDao.readAuthorsByPK(conn, res, req.params.pk);
}


const readAuthorsByName = function (req, res, next) {
    aDao.readAuthorsByName(conn, res, req.params.authorName);
}

const addAuthorWithID = function (req, res, next) {
    author = new authors();
    author.setAuthorName(req.body.authorName);
    aDao.addAuthorWithID(author, conn, function(err, id){
        if (err){
            res.json(err);
        } 
        else{
            res.json(id);
            console.log(id);
        }
    });
}

const updateAuthor = function (req, res, next) {
    author = new authors();
    author.setAuthorId(req.body.authorId);
    author.setAuthorName(req.body.authorName);
    aDao.updateAuthor(author, conn, function(err, id){
        if (err){
            res.json(err);
        } 
        else{
            res.json(id);
            console.log(id);
        }
    });
}

const deleteAuthor = function (req, res, next) {
    author = new authors();
    author.setAuthorId(req.params.pk);
    aDao.deleteAuthor(author, conn, function(err, id){
        if (err){
            res.json(err);
        } 
        else{
            res.json(id);
            console.log(id);
        }
    });
}

module.exports = {
    // need to export modules to make them public in node.JS
    readAllAuthors,
    addAuthorWithID,
    readAuthorsByName,
    readAuthorsLimitSearch,
    getAuthorsCount,
    readAuthorByPK,
    updateAuthor,
    deleteAuthor
}