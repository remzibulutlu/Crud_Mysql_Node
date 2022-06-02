const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//raw-url-encoded-json stuff
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw());
app.use(bodyParser.json());

//routing
const router = require('./postRouter.js');
app.use('/posts', router);

//homepage setup
app.get('/', (req, res) => {
  res.send("main page");
});

//server conection
app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
