const express= require('express')
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())
const categorys = require('../modern-tech-server/Catagory.json')


app.get('/', (req, res) =>{
    res.send('wellcome')
})
app.get('/courses', (req, res) =>{
    res.send(categorys)
})

app.listen(port , ()=> {console.log(`'port' ${port}`)})