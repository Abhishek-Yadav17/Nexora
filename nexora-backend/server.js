const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://17abhishekyadav:4jtrD6usQ1snGXlu@cluster0.5empw.mongodb.net/nexora?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));

app.listen(5000, () => console.log('Server running on port 5000'));
