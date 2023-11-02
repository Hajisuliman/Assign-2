let express = require('express');
let path = require('path');
const expressLayouts = require('express-ejs-layouts'); 

let indexRouter = require('./routes/index');

let app = express();

const port = process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up express-ejs-layouts
app.use(expressLayouts);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
