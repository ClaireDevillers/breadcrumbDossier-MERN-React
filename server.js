const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const pathStuff = require('./path_functions')

const app = express();

app.use(logger('dev'));
app.use(express.json());


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/path/*', function(req,res) {
    try {
        res.status(200).json(pathStuff.getPathData(req.params['0']))
    } catch(err) {
        res.status(400).json(err.message)
    }
})

// send react html file
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// use port 3001 instead of 3000 during developpement to avoid collision with React dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});