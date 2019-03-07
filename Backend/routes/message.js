const express = require('express');

const router = express.Router();

const messageController = require('../controllers/message');

router.post('/api/v1/messages', messageController.sendMessage);

 