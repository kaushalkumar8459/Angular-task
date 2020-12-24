let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser');
let ContactSchema = require('./model/Contact_schema');
let database = 'mongodb://localhost:27017/Retiuno';

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('Database sucessfully connected');
    },
    (error) => {
      console.log('Database could not connected: ' + error);
    }
  );

// Setting up port with express js
const route = require('./router/route');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use('/api', route);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// route for get data
// url-localhost:4000/data/get
var Data = express.Router();
app.use('/data', Data);
require('./router/route')(Data, ContactSchema);

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
