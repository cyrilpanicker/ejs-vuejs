const express  = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const ipAddress = config['ip-address'];
const port = config['port'];

const app = express();
app.use(bodyParser.json());
app.use('/assets', express.static('public'));
app.set('view engine','ejs');

app.get('/',(request,response) => {
    response.render('pages/home',{
        pageTitle:'testTitle',
        customStyles:['assets/styles/home.css'],
        customScripts:['assets/scripts/home.js']
    });
});

app.listen(port,ipAddress,() => {
    console.log('listening at http://'+ipAddress+':'+port);
});