const express = require('express');
const router = express.Router();

// Import models
const Author = require('./authors');
const Article = require('./Article');
const Tag = require('./tags');
const ArticleTags = require('./ArticleTags');

// Define middleware function
const setupModels = (req, res, next) => {
    req.models = {
        Author,
        Article,
        Tag,
        ArticleTags,
    };
    next();
};

// Export middleware function
module.exports = setupModels;

// Export models as properties of an object
module.exports.Author = Author;
module.exports.Article = Article;
module.exports.Tag = Tag;
module.exports.ArticleTags = ArticleTags;
