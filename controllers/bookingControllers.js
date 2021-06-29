const Booking = require("../models/bookingModel");

exports.get = (req, res, next) => {
  Booking.find({ hotel: req.body.hotel }).then((rooms) => res.send(room));
};

exports.post = (req, res, next) => {
  Booking.create(req.body)
    .then((booking) => {
      res.send(booking);
    })
    .catch(next);
};

exports.put = (req, res, next) => {
  Booking.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Booking.findOne({ _id: req.params.id }).then((booking) => {
      res.send(booking);
    });
  });
};

exports.delete = (req, res, next) => {
  Booking.findByIdAndRemove({ _id: req.params.id }).then((booking) => {
    res.send(booking);
  });
};
