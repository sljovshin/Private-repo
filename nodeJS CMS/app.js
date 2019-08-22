/* Module imports */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const { mongoDBurl, PORT, globalVariables } = require('./config/configuration'); 
const { selectOption } = require('./config/customFunctions'); 


const app = express();


/* Configure Mongoose to connect to MongoDB */
mongoose.connect(mongoDBurl, { useNewUrlParser: true })
    .then( response => { console.log('Connection to database is confirmed, we are GO! ');})
    .catch( err  => { console.log('Connection to database is NOT confirmed, I repeat, NOT confirmed!'); });




/* Configure express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

/* Flash and Session */
app.use( session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(globalVariables);

/* Configure ViewEngine to use Handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default', helpers: {select: selectOption}}));
app.set('view engine', 'handlebars');

/* Method Override middleware */
app.use(methodOverride('newMethod'));

/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);


app.listen(PORT, () => {
    console.log(`Server is up and listening on port ${PORT}`);
});