'use strict';

module.exports = (req, res, next) => {
    if (Object.keys(req.query).length) {
        next();
    } else {
        res.status(500).json({ error: 'moddleware error 500 in server' });
    }
};
























// 'use strict'

// module.exports = (req, res, next)=> {
//     req.name = 'Qusai';
//     // req.browser =  req.headers['user-agent'];
//     next();
// }