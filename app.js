const express = require('express');
const app = express();
const {usersData, userFilter, template, error} = require('./functions.js')


app.get('/', (req, res) => {  
    res.send(template)
})

app.get('/developers', (req, res) => {
    res.send(userFilter('developers'))
})

app.get('/QAs', (req, res) => {
    res.send(userFilter('QAs'))
})

app.get('/ventas', (req, res) => {
    res.send(userFilter('ventas'))
})

app.get('/marketing', (req, res) => {
    res.send(userFilter('marketing'))
})

app.use((req, res) => {
    res.status(404).send(error)
})

app.listen(3000, () => {
    console.log(`Servidor escuchando en puerto: http://localhost:3000`)
})