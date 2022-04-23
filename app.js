//Usando objeto de express
const express = require('express')
//App de express
const app = express()
//puerto en el que vamos a ver nuestra app
const port = 3000 //localhost:3000

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//con esto inicializamos la app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})