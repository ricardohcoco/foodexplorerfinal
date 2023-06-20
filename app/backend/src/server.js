const express = require('express');
require("dotenv/config")
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('tmp/uploads')); // Serve as imagens estáticas

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
