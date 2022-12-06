const express= require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())
const category = require('../modern-tech-server/Catagory.json')
// const catagoryDetails = require('../modern-tech-server/CourseDetails.json')

app.get('/', (req, res) =>{
    res.send('wellcome')
})
app.get('/courses', (req, res) =>{
    res.send(category)
})

app.get('/courses/:id', (req, res) =>{
    // res.send(categorys)
    const id = req.params.id;
    console.log(id)
    const selectedCourse = category.find(c => c.id === id);
    res.send(selectedCourse)
    console.log(selectedCourse)
})

app.listen(port , ()=> {
    
    console.log('Your port is runnig', port)
})