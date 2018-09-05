const express = require('express/');

const app = express();

const PORT = 9000;

app.use(express.static('server/public'));

app.listen(9000, function(){
    console.log('listening on port', PORT);
    
})
