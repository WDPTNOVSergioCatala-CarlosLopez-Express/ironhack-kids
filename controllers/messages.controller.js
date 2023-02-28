const Message = require("../models/message.model");
const mongoose = require("mongoose")

module.exports.list = (req, res, next) => {
    Message.find()
    res.render("messages", );
};

module.exports.doCreate = (req, res, next) => {
    Message.create(req.body)
    .then(() => {
        res.redirect("/messages");
    })
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.render("messages", { errors: err.errors, message: req.body});
        } else {
            next(err);
        }
    });
}
