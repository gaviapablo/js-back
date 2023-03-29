const express = require('express');
const sequelize = require('./config');
const Routes = require('./routes/index.routes');

const app = express();
const PORT = 3000;

sequelize.sync().then(() => console.log("database connected succesfully!"))

app.get('/', (req,res) => {
    console.log("get recebido")
    res.send(req.hostname)
})

app.use(express.json());

app.use('/api/users', Routes);

app.listen(PORT, () => {
    console.log('App online na porta ' + PORT)
})