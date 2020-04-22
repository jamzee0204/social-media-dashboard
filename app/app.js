const path = require('path')

const express = require('express');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user.js');
const route404 = require('./routes/route404');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminRoutes);

app.use(userRoutes);

app.use("/", route404);

app.listen(3000 )