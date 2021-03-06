const models = require('../models');

module.exports = {
  getAnswers: (req, res) => {
    const { question_id } = req.params;
    const { count, page } = req.query;
    models.answers
      .getAnswers(question_id, count)
      .then((result) => res.status(200).send(result))
      .catch((error) => {
        console.log(error);
        res.sendStatus(404);
      });
  },

  postAnswer: (req, res) => {
    const { question_id } = req.params;
    const { body, name, email, photos } = req.body;
    models.answers
      .postAnswer(question_id, body, name, email, photos)
      .then((result) => {
        if (result.length) {
          res.status(201).send('CREATED!');
        } else {
          res.sendStatus(400);
        }
      })
      .catch((error) => res.sendStatus(400));
  },

  addHelpful: (req, res) => {
    const { answer_id } = req.params;
    models.answers
      .addHelpful(answer_id)
      .then((result) => {
        if (result.length) {
          res.sendStatus(204);
        } else {
          res.sendStatus(400);
        }
      })
      .catch((error) => res.sendStatus(400));
  },

  addReport: (req, res) => {
    const { answer_id } = req.params;
    models.answers
      .addReport(answer_id)
      .then((result) => {
        if (result.length) {
          res.sendStatus(204);
        } else {
          res.sendStatus(400);
        }
      })
      .catch((error) => res.res.sendStatus(400));
  },
};
