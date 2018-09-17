//require('./config/config');
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

//const { User } = require('./models/User');
//require('./services/passport');
const mainRoutes = require('./routes/mainRoutes');
//const authRoutes = require('./routes/authRoutes');
//const { mongoose } = require('./db/mongodb'); // object destructuring that only stores mongoose property
const PORT = process.env.PORT || 5000;
const app = express();

// app.use(cookieSession({
// 	maxAge: 30 * 24 * 60 * 60 * 1000,
// 	keys: [process.env.cookieKey]
// }));
// app.use(passport.initialize());
// app.use(passport.session()); 

// middleware to authenticate user with google account
app.use(mainRoutes);
// app.use(authRoutes);


app.listen(PORT, () => {
	console.log('App is running on 3000');
});