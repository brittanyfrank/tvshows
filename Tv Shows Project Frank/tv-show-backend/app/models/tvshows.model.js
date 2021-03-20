module.exports = mongoose => {
    const Tvshow = mongoose.model(
      "tvshow",
      mongoose.Schema(
        {
          title: String,
          description: String,
          season: Number
        },
        { timestamps: true }
      )
    );
  
    return Tvshow;
  };