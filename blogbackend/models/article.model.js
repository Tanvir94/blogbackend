module.exports = mongoose => {
    const article = mongoose.model(
      "article",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return article;
  };