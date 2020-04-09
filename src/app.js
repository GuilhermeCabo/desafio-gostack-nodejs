const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json({ repositories });
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const newProject = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(newProject);

  return response.status(201).json(newProject);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body;
  const { id } = request.params;

  const index = repositories.findIndex((project) => project.id === id);

  if (index < 0) {
    return res.status(404).json({ message: "Project not found" });
  }

  repositories[index] = {
    id,
    title,
    url,
    techs,
    likes: repositories[index].likes,
  };

  return response.status(200).json(repositories[index]);
});

app.delete("/repositories/:id", (req, res) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
