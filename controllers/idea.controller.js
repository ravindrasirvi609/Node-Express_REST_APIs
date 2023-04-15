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






