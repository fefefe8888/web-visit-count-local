const express = require('express');

const app = express();

visits = 0;

app.get('/', (req, res) => {
   visits = visits + 1;
   res.send('Number of visits since last restart is ' + visits);
});

app.listen(8080, () => {
   console.log('Listening on port 8080');
});
