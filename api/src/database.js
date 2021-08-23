const mongoose = require('mongoose');
const URI = 'mongodb://localhost/market'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);


mongoose.connect(URI)
.then(() => console.log('DB is up.'))
.catch((err) => console.log(err));