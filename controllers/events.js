const BadRequestError = require('../errors/bad-request-error');
const requestToWebStandards = require('../helpers/requests');
const Event = require('../models/event');
const MESSAGES = require('../errors/messages');

module.exports.getListEvents = (req, res) => {
  const { year } = req.query;
  if (year.length !== 4) throw new BadRequestError('Номер года передан неверно');

  requestToWebStandards().then((data) => {
    const filteredEvents = data.filter((item) => item.start.startsWith(year));

    Event.find({}).then((allEvents) => {
      const handleCreatedEvents = allEvents.filter((event) => event.start.startsWith(year));
      const events = [...filteredEvents, ...handleCreatedEvents];

      res.send(events.length ? events : { message: MESSAGES.NOT_FOUND_EVENTS });
    }).catch(() => res.send(filteredEvents));
  });
};
