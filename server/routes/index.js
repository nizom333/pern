const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRoute');
const userRoute = require('./userRoute');
const brandRoute = require('./brandRoute');
const typeRoute = require('./typeRoute');

router.use('/user', userRoute);
router.use('/type', typeRoute);
router.use('/brand', brandRoute);
router.use('/device', deviceRouter);


module.exports = router;