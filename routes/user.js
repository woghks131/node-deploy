const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow, updateMyInfo } = require('../controllers/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, follow);

router.post('/:id/unfollow', isLoggedIn, unfollow);

router.post('/:nick/updateMyInfo', isLoggedIn, updateMyInfo);

module.exports = router;