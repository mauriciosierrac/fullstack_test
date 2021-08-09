const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => {
        console.log('DB Connect and already to use :) !!!')
    })
    .catch(err => console.error(err));
    