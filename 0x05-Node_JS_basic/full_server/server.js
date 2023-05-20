/* app is an instance of express */
import express from 'express';

const app = express();
const indexRouter = require('./routes/index');

const port = 1245;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

export default app;
