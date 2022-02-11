const BadRequestError = require('../errors/bad-request-error');
const requestToWebStandards = require('../helpers/requests');
const Event = require('../models/event');

module.exports.getListEvents = (req, res) => {
  const { year } = req.query;
  if (year.length !== 4) throw new BadRequestError('Номер года передан неверно');

  requestToWebStandards().then((data) => {
    const filteredEvents = JSON.parse(data.toString())
      .filter((item) => item.start.startsWith(year));

    Event.find({}).then((events) => {
      res.send([...filteredEvents, ...events]);
    }).catch(() => res.send(filteredEvents));
  });
};
