const User = require("../models/userModel");

exports.get = (req, res, next) => {
  User.find({}).then((user) => res.send(user));
};

exports.post = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

exports.put = (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((user) => {
      res.send(user);
    });
  });
};

exports.delete = (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
    res.send(user);
  });
};
