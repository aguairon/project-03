const Project = require('../models/project')

function indexRoute(req, res) {
  Project
    .find()
    .then(projects => res.json(projects))
}

function showRoute(req, res, next) {
  Project
    .findById(req.params.id)
    .then(projects => res.json(projects))
    .catch(next)
}

function createRoute(req, res, next) {
  Project
    .create(req.body)
    .then(project => res.status(201).json(project))
    .catch(next)
}

function updateRoute(req, res, next) {
  Project
    .findById(req.params.id)
    .then(project => project.set(req.body))
    .then(project => project.save())
    .then(project => res.json(project))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute
}
