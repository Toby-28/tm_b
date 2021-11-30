require('dotenv').config()
const express= require('express'),
    app= express(),
    cors= require('cors'),
    bodyparser= require('body-parser')

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use('/picture', express.static('pictures'))



app.use('/', (req, res)=>{
    const body= []
    req.on('data', (chunk)=>{
        body.push(chunk)
        console.log('data=',chunk)
    })
    req.on('end', ()=>{
        const parsedBody= Buffer.concat(body).toString()
        console.log(parsedBody)
    })
    res.send()
})



app.listen(process.env.apiport, ()=>{
    console.log('====================')
})