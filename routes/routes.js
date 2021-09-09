const express = require('express');

const router = express.Router();

const controllers = require('./../controllers/controllers');

router.get('/project/:name', controllers.getProject);

module.exports = router;