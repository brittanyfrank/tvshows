module.exports = app => {
    const tvshows = require("../controllers/tvshows.controller.js");
  
    var router = require("express").Router();
  
    // Create a new show
    router.post("/", tvshows.create);
  
    // Retrieve all shows
    router.get("/", tvshows.findAll);
  
    // Retrieve a single show with id
    router.get("/:id", tvshows.findOne);
  
    // Update a show with id
    router.put("/:id", tvshows.update);
  
    // Delete a show with id
    router.delete("/:id", tvshows.delete);
  
    // Create a new show
    router.delete("/", tvshows.deleteAll);
  
    app.use('/api/tvshows', router);
  };