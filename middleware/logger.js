const dayjs = require('dayjs')

const logger = (req, res, next) => {
    console.log(`Logger: ${req.protocol}://${req.get('host')}${req.originalUrl}: ${dayjs().format()}`);
    next();
}

module.exports = logger