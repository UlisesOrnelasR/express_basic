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

//Agrega una ruta nueva para poder responder algo en la url localhost:3000/launchx.
app.get('/launchX',(req, res) => {
    res.send('Hola Launch X!!!!!!!!')
})

//con esto inicializamos la app
app.listen(port, () => {
  console.log(`Server listo on port ${port}`)
})

