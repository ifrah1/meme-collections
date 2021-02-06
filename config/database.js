const mongoose = require('mongoose');

// Connect to MongoDb 
// mongoose.connect('mongodb://127.0.0.1:27017/meme-site', {
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Display message showing DB connected 
const db = mongoose.connection;
db.on('connected', () => console.log('Connected to MongoDb')); 