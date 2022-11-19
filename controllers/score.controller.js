const models = require("../models");

function save(req, res) {
  const post = {
    score: req.body.score,
    date: req.body.date,
    level: req.body.level,
    userID: 1,
  };
  models.post.create(post)
    .then((result) => {
      res.status(200).json({
        message: "score insert successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong",
        post: error,
      });
    });
}

module.exports = {
  save: save,
};
