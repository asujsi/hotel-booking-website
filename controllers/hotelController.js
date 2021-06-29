const Hotel = require("../models/hotelModel");

exports.get = (req, res, next) => {
  // Hotel.find({name: req.query.hotelName})
  // .then( hotels => res.send(hotels));
  Hotel.find({ name: req.body.name })
    .populate("rooms")
    .exec((err, hotels) => {
      if (err) {
        res.send({ error: err.message });
      } else {
        res.send(hotels);
      }
    });
};

exports.post = (req, res, next) => {
  Hotel.create(req.body)
    .then((hotel) => {
      res.send(hotel);
    })
    .catch(next);
};

exports.put = (req, res, next) => {
  Hotel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Hotel.findOne({ _id: req.params.id }).then((hotel) => {
      res.send(hotel);
    });
  });
};

exports.delete = (req, res, next) => {
  Hotel.findByIdAndRemove({ _id: req.params.id }).then((hotel) => {
    res.send(hotel);
  });
};
