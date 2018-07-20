const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);