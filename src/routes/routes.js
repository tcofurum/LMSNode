const express = require('express');
const authorController = require("../main/service/author-service");

const router = express.Router();

router
    .get('/readAuthor', authorController.readAllAuthors)
    .get('/readAuthorj/:authorName', authorController.readAuthorsByName)
    .get('/readAuthorPage/:pageNo', authorController.readAuthorsLimitSearch)
    .get('/readAuthorCount', authorController.getAuthorsCount)
    .get('/readAuthorByPK/:pk', authorController.readAuthorByPK)        
    .post('/saveAuthor', authorController.addAuthorWithID)
    .post('/editAuthor', authorController.updateAuthor)
    .get('/deleteAuthor/:pk', authorController.deleteAuthor)        

module.exports = router;