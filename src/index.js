const express = require('express');

const config = require('./config'); 

const productRoutes = require('./routes/products');

// const logger = require('./middleware/logger');
// const errorHandler = require('./middleware/errorHandler');

const app = express();


app.use('/api/products', productRoutes);


const PORT = config.port;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});