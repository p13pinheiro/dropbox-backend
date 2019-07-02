const express = require('express');
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

routes.post('/boxes', BoxController.store);
routes.get('/boxe/:id', BoxController.restore);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;