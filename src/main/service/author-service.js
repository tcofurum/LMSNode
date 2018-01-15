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
    var result = aDao.readAllAuthors(conn, res)
    // console.log(result);
    // console.log("Sent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

const readAuthorsLimitSearch = function (req, res, next) {

}

const getAuthorsCount = function (req, res, next) {

}

const readAuthorByPK = function (req, res, next) {

}


const readAuthorsByName = function (req, res, next) {
    console.log("Inside my readAuthorsByName controller", +req.params.authorName);
}

const addAuthorWithID = function (req, res, next) {
    author = new authors();
    author.setAuthorName = req.body.authorName;
    var id = aDao.addAuthorWithID(author, conn);
}

const updateAuthor = function (req, res, next) {

}

const deleteAuthor = function (req, res, next) {

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