module.exports = (req, res, next) => {
    console.log('Passou pelo Middleware Global');
    if (req.body.cliente) console.log(`Vi que você postou o cliente ${req.body.cliente}`);
    next();
};