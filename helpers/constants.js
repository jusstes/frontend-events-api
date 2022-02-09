const { NODE_ENV, JWT_SECRET, HOST = 'localhost' } = process.env;

const constants = {
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret',
  MONGO: `mongodb://${HOST}:27017/eventsdb`,
  WEB_STANDARDS_API: 'https://web-standards.ru/calendar.json',
};

module.exports = constants;
