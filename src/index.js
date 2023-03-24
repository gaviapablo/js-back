import { openDb } from './configDB.js';

import express from 'express';
const app = express();
const PORT = 3000;

openDb();

app.get('/', (req,res) => {
    console.log("get recebido")
    res.send(req.hostname)
})

app.post('/', (req,res) => {
    console.log("post recebido")
    res.send(req.hostname)
})

app.put('/', (req,res) => {
    console.log("putrecebido")
    res.send(req.hostname)
})

app.delete('/', (req,res) => {
    console.log("delete recebido")
    res.send(req.hostname)
})

app.listen(PORT, () => {
    console.log('App online na porta ' + PORT)
})