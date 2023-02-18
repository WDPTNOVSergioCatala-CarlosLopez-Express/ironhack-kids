const Message = require("../models/message.model");
const mongoose = require("mongoose")

module.exports.create = (req, res, next) => {
    res.render("messages");
};

module.exports.doCreate = (req, res, next) => {
    Message.create(req.body)
    .then(() => {
        res.redirect("/Messages");
    })
    .catch((err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            res.render("Messages", { errors: err.errors, message: req.body});
        } else {
            next(err);
        }
    });
}
