const request = require('request-promise');
const mysql = require('mysql');

const readAllAuthors = function(req, res){
    var authors = [];
    console.log("Inside readAllAuthors");
}

const saveAuthors = function(req, res){
    console.log("Inside my saveAuthors controller", req.body);
}

const readAuthorsByName = function(req, res){
    console.log("Inside my readAuthorsByName controller", +req.params.searchString);
}

module.exports = {
    readAllAuthors,
    saveAuthors,
    readAuthorsByName
}