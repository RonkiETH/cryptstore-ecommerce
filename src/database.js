const mongoose = require('mongoose');

const {CRYPTSTORE_MONGODB_HOST, CRYPTSTORE_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${CRYPTSTORE_MONGODB_HOST}/${CRYPTSTORE_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log(`La base de datos está conectada`))
    .catch(err => console.log(err));
