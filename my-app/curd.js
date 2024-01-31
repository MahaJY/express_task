const express = require('express');
const bodyParser = require('body-parser');
const user2Routes = require('./routes/user2routes');
const app = express();
const PORT = 3002;
app.use(bodyParser.json());
app.use('/user2', user2Routes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  
  

