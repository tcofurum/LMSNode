const express = require('express');
const authorController = require("../controllers/author/authorController");

const router = express.Router();

router
    .get('/readAllAuthors', authorController.readAllAuthors)
    .get('/readAuthorsByName/:searchString', authorController.readAuthorsByName)
    .post('/saveAuthors', authorController.saveAuthors)

module.exports = router;