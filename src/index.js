const express = require('express');
const sequelize = require('sequelize');
const app = express();
const PORT = 3000;

sequelize.sync().then(() => console.log("database connected succesfully!"))

app.get('/', (req,res) => {
    console.log("get recebido")
    res.send(req.hostname)
})

app.use(express.json());

app.listen(PORT, () => {
    console.log('App online na porta ' + PORT)
})