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

//Agrega una nueva ruta y regresa un objeto:
app.get('/objeto', (req, res) => {
    const explorer = {
        name: 'panchito',
        msg: 'hellooooo'
    }
    res.send(explorer)
})

//Agrega una nueva ruta, indica que recibirá un parámetro: /explorers/:explorerName, esto indicará que :explorerName será un valor enviado por la url.
//El objeto req contiene la propiedad params, esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params)
app.get('/explorers/:explorerName',(req, res) => {
    res.send(req.params)
})

//con esto inicializamos la app
app.listen(port, () => {
  console.log(`Server listo on port ${port}`)
})

