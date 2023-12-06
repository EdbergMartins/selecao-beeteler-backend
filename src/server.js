const express = require('express');
const auth = require('./routes/auth');
const app = express();
const cors = require('cors');
const createDB = require('./models/create');
const populateDB = require('./models/populate');

app.use(express.json());
app.use(cors());
app.use(auth)

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

(async () => {
  await createDB();
  await populateDB();
})();