const db = require("../models");
const Tvshow = db.shows;

// Create and Save a new show
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a show
  const show = new Tvshow({
    title: req.body.title,
    description: req.body.description,
    season: req.body.season
  });

  // Save show in the database
  show
    .save(show)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the show."
      });
    });
};

// Retrieve all shows from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Tvshow.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving shows."
        });
      });
};

// Find a single show with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tvshow.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found show with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving show with id= " + id });
      });
};

// Update a show by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Tvshow.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update show with id=${id}. Maybe show was not found!`
            });
          } else res.send({ message: "show was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating show with id=" + id
          });
        });
};

// Delete a show with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Tvshow.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete show with id=${id}. Maybe show was not found!`
          });
        } else {
          res.send({
            message: "show was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete show with id=" + id
        });
      });
};

// Delete all shows from the database.
exports.deleteAll = (req, res) => {
    Tvshow.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} shows were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all shows."
      });
    });
};