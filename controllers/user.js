const User = require('../models/user');

exports.follow = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) { // req.user.id 는 followerId,  req.params.id 는 followingId
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.unfollow = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) { // req.user.id 는 followerId,  req.params.id 는 followingId
            await user.removeFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.updateMyInfo = async (req, res, next) => {
    try {


        console.log(`아이디: ${req.user.id} , 변경할닉네임: ${req.params.nick}`);

        const user = await User.update({ 
            nick: req.params.nick
        }, {
            where: {id: req.user.id }
        });


        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};
