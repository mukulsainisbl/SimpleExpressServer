const express = require('express')
const app = express()
const PORT = 4040
const {userRoute} = require('./Routes/routes')

app.use(express.json()) // MiddleWare
app.use('/',userRoute)


app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`)
})