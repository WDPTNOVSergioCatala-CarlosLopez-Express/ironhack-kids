const Message = require("../models/message.model");
const mongoose = require("mongoose")

module.exports.list = (req, res, next) => {
  Message.find({
    $or: [
      { userFrom: req.user._id, userTo: req.params.id },
      { userTo: req.user._id, userFrom: req.params.id },
    ],
  })
    .populate("userFrom")
    .populate("userTo")
    .then((messages) => {
      res.render("messages", {
        messages,
        userTo: req.params.id,
      });
    })
    .catch(next);
}


module.exports.doCreate = (req, res, next) => {
  console.log("intento crear mensaje")
  Message.create({
    userFrom: req.user.id,
    userTo: req.params.id,
    message: req.body.message
  })
    .then((message) => {
      console.log("soy un then")
      res.redirect(`/messages/${req.params.id}/chat`);
    })
    .catch((err) => {
      console.log("soy un catch", err)
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("messages", { errors: err.errors, message: req.body });
      } else {
        next(err);
      }
    });
};
