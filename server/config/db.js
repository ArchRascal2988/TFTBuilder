const mongoose= require('mongoose');
const uri= process.env.MONGODB_URI || 'mongodb://localhost:27017/TFTDB';


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports= mongoose.connection;