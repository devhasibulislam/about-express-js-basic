const test = (req, res) => {
    // console.log(req.app.locals.title);
    // console.log(req.secure);
    // console.log(req.app.get('view engine')); // at least won't get any error!
    // console.log(req.accepts('json'));
    // console.log(req.get('accept')); // get header value
    // res.send(res.app.get('views'));
    res.send('application connected successfully.');
}

module.exports = test;