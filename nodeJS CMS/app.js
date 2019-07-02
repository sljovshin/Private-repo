/* Module imports */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const { mongoDBurl, PORT } = require('./config/configuration'); 


const app = express();


/* Configure Mongoose to connect to MongoDB */
mongoose.connect(mongoDBurl, { useNewUrlParser: true })
    .then( response => { console.log('Connection to database is confirmed, we are GO! ');})
    .catch( err  => { console.log('Connection to database is NOT confirmed, I repeat, NOT confirmed!'); });




/* Configure express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

/* Configure ViewEngine to use Handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');


/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);
//app.use('/admin', adminRoutes);


app.listen(PORT, () => {
    console.log(`Server is up and listening on port ${PORT}`);
});