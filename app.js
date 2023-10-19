const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');
require('express-async-errors')
const cors = require('cors')
const db = require('./db'),
    userRoutes = require('./controllers/user.controller')


//middleware
app.use(cors())
app.use(bodyparser.json())
app.use('/api/users', userRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})


//first make sure db connection is successful
//then start the express server.
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(6000,
            () => console.log('server started at 6000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))