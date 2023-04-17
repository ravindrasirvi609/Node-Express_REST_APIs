const ideas = require("../models/idea.model");

/**
 * Search all ideas
 */
exports.fetchAllideas = (req, res) => {
  res.status(200).send(ideas);
};

/**
 * Create new idea
 */
let idCount = 1;
exports.createIdea = (req, res) => {
  const idea = req.body;
  idea.id = ++idCount;
  ideas[idea.id] = idea;
  res.status(201).send(idea);
};

exports.updateIdea = (req, res) => {
  // i need to read the id that i passed in the path
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({
      message: 'id is not passed not correct'
    })
  }

}

exports.deleteIdea = (req, res) => {
  if (ideas[req.params.id]) {
    delete ideas[req.params.id];
    res.status(200).send({
      message: 'successfully deleted'
    })

  }
  else {
    res.status(400).send({
      message: 'id is not found'
    })
  }
}






