const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { errorsHandler } = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rateLimiter');
const router = require('./routes/index');
const restoreNotifications = require('./helpers/restoreNotifications');

app.use(requestLogger);
app.use(limiter);

app.use(cors({
  origin: ['https://dantrofimov.github.io', 'http://localhost:3000'],
  credentials: true,
  sameSite: 'none',
  secure: true,
}));

app.options('*', cors());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  restoreNotifications();
});
