const express = require('express')
const app = express()
const path = require('path')

app.set('view-engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'MCP')))

app.get('/home', (req, res) => {
  res.render('index.ejs')
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/views/index.ejs', (req, res) => {
    res.render('index.ejs')
})

app.get('/Download/1.7.10', (req, res) => {
    res.download('MCP/MCP 1.7.10.zip')
})

app.get('/Download/1.8.8', (req, res) => {
    res.download('MCP/MCP 1.8.8.zip')
})

app.get('/Download/1.9.4', (req, res) => {
    res.download('MCP/MCP 1.9.4.zip')
})

app.get('/Download/1.10', (req, res) => {
    res.download('MCP/MCP 1.10.zip')
})

app.get('/Download/1.11.2', (req, res) => {
    res.download('MCP/MCP 1.11.2.zip')
})

app.get('/Download/1.13.1', (req, res) => {
    res.download('MCP/MCP 1.13.1.zip')
})

app.get('/Download/1.13.2', (req, res) => {
    res.download('MCP/MCP 1.13.2.zip')
})

app.get('/Download/1.14.4', (req, res) => {
    res.download('MCP/MCP 1.14.4.zip')
})

app.get('/Download/1.15', (req, res) => {
    res.download('MCP/MCP 1.15.zip')
})

app.get('/Download/1.15.1', (req, res) => {
    res.download('MCP/MCP 1.15.1.zip')
})

app.get('/Download/1.15.2', (req, res) => {
    res.download('MCP/MCP 1.15.2.zip')
})

app.get('/Download/1.16.1', (req, res) => {
    res.download('MCP/MCP 1.16.1.zip')
})

app.get('/Download/1.16.2', (req, res) => {
    res.download('MCP/MCP 1.16.2.zip')
})

app.get('/Download/1.16.3', (req, res) => {
    res.download('MCP/MCP 1.16.3.zip')
})

app.get('/Download/1.16.4', (req, res) => {
    res.download('MCP/MCP 1.16.4.zip')
})

app.get('/Download/1.16.5', (req, res) => {
    res.download('MCP/MCP 1.16.5.zip')
})

app.get('/Download/1.17', (req, res) => {
    res.download('MCP/MCP 1.17.zip')
})

app.get('/Download/1.18.1', (req, res) => {
    res.download('MCP/MCP 1.18.1.zip')
})

app.get('/Download/1.18.2', (req, res) => {
    res.download('MCP/MCP 1.18.2.zip')
})

app.get('/Download/1.19', (req, res) => {
    res.download('MCP/MCP 1.19.zip')
})

app.get('/Download/1.19.2', (req, res) => {
    res.download('MCP/MCP 1.19.2.zip')
})

app.get('/Download/1.19.4', (req, res) => {
    res.download('MCP/MCP 1.19.4.zip')
})

app.listen(19965)