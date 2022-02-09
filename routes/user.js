const userRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getCurrentUser, updateUser, createUser, login, signOut,
} = require('../controllers/user');

const {
  userInfoValidation,
  userValidation,
  loginValidation,
} = require('../middlewares/validation');

userRouter.post('/sign_up', userValidation, createUser);
userRouter.post('/sign_in', loginValidation, login);
userRouter.use(auth);
userRouter.get('/user', getCurrentUser);
userRouter.patch('/user', userInfoValidation, updateUser);
userRouter.delete('/sign_out', signOut);

module.exports = userRouter;
